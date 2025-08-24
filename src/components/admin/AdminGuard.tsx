'use client';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';
import NotFound from '@/app/not-found';

const AdminGuard = ({ children }: { children: React.ReactNode }) => {
  const userInfo = useSelector((state: any) => state.auth);
  const router = useRouter();
  const [isAllowed, setIsAllowed] = useState<boolean | null>(null);

  let renderComponent; 
  useLayoutEffect(() => {
    if (!userInfo.token) {
      router.replace('/admin'); 
      setIsAllowed(false);
    } else {
      setIsAllowed(true);
    }
  }, [userInfo.token, router]);

    if (isAllowed === null || !isAllowed || !userInfo.user.email) {
        renderComponent = NotFound();
    } else {
        renderComponent = children
    }

  return <>{renderComponent}</>;
};

export default AdminGuard;
