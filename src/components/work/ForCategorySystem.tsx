"use client";

import { useState } from "react";
import { Projects } from "./Projects";
import { ToggleButton } from "@once-ui-system/core";

const ForCategorySystem = () => {
    const [gender, setGender] = useState("2");
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "25px", marginTop: 20 }}>
                <ToggleButton onClick={()=>setGender("2")} selected={gender == "2" && true}>Tümü</ToggleButton>
                <ToggleButton onClick={()=>setGender("1")} selected={gender == "1" && true}>Kadın</ToggleButton>
                <ToggleButton onClick={()=>setGender("0")} selected={gender == "0" && true}>Erkek</ToggleButton>
            </div>
            
            <Projects range={false} gender={gender}/>
        </div>
    );
}

export default ForCategorySystem;