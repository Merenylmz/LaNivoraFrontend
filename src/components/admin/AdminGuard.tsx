'use client';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';
import NotFound from '@/app/not-found';
import { Text } from '@once-ui-system/core';

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
        renderComponent = <div>
         <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
              padding: "32px 24px",
              margin: "0 auto",
              borderRadius: 12,
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Text variant="heading-default-xl" style={{ color: "#ffffffff" }}>
                Hoşgeldin, <span style={{ color: "#008af3ff" }}>{userInfo.user.username}</span>
              </Text>
              <br />
              <Text variant="body-default-s" style={{ marginTop: 8, color: "#ffffffff" }}>
                Değişiklik Yapmak için Etkileşime Geçebilirsin
              </Text>
            </div>

            <div>
              {children}
            </div>
          </div>
        </div>
    }

  return <>{renderComponent}</>;
};

export default AdminGuard;
