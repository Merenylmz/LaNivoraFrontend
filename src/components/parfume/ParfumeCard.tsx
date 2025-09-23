"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import { ProjectCard } from "../ProjectCard";
import ParfumeTypes from "./ParfumeTypes";


const ParfumeCard = ({range = false, gender}: {range?: any, gender?: String}) => {
    const [parfumes, setParfumes] = useState<Array<ParfumeTypes>>();
    // let parfumesArray;
    
    useEffect(()=>{
        (async()=>{
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/parfumes`);
            const data = res.data
            setParfumes(data);
        })()
    }, []);
    
    const filteredParfumes = parfumes && (parfumes as Array<ParfumeTypes>).filter((p) => {
        if (gender === "2") return true; 
        return p.gender?.toString() === gender; 
    });

    const displayedParfumes = range ? filteredParfumes && filteredParfumes.slice(0, 3) : filteredParfumes;

    return (
        <>
            {displayedParfumes && displayedParfumes.map((p, index) => (
                <ProjectCard data={p} key={index} />
            ))}
        </>
    );
};


export default ParfumeCard;