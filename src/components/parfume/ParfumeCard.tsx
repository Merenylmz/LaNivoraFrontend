"use client"

import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import { ProjectCard } from "../ProjectCard";
import ParfumeTypes from "./ParfumeTypes";


const ParfumeCard = ({range = false}: {range?: any}) => {
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
                !range ? 
                parfumes && parfumes.map((p:ParfumeTypes, index)=>(
                    <ProjectCard data={p} key={index}/>
                )) : 
                parfumes && parfumes.slice(0, 3).map((p:ParfumeTypes, index)=>(
                    <ProjectCard data={p} key={index}/>
                )) 
            }
        </>
    );
}

export default ParfumeCard;