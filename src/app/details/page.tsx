"use client"

import { useSearchParams } from "next/navigation";

const Details = () => {
    const searchParams = useSearchParams();
    const slug = searchParams.get("slug");
    
    return (
        <div>
            {slug && slug}
        </div>
    );
}

export default Details;