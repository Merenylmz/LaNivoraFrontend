"use client"

import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import { ProjectCard } from "../ProjectCard";
import ParfumeTypes from "./ParfumeTypes";


const ParfumeCard = () => {
    const [parfumes, setParfumes] = useState<Array<ParfumeTypes>>();
    
    useEffect(()=>{
        (async()=>{
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/parfumes`);
            const data = res.data
            setParfumes(data);
        })()
    }, []);
    return (
        <>
            {
                parfumes && parfumes.map((p:ParfumeTypes, index)=>(
                    <ProjectCard data={p} key={index}/>
                ))
            }
        </>
    );
}

export default ParfumeCard;