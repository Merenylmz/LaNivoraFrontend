"use client"

import { setInfos } from "@/store/slices/authSlices";
import { Button, Feedback, Icon, Input } from "@once-ui-system/core";
import axios from "axios";
import { serialize } from "cookie";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

const Admin = () => {
    const [inputs, setInputs] = useState({email: "", password: ""});
    const [feedBack, setFeedBack] = useState({shown: false, variant: "danger"});
    const router = useRouter();
    const dispatch = useDispatch();

    const handleSubmit = async(e: FormEvent) =>{
        e.preventDefault();
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, inputs);
        const data = res.data;
        if (!data.status) {
            return setFeedBack({...feedBack, shown: true});
        }
        
        dispatch(setInfos({token: data.token, user: data.user}));
        router.push("/admin/products");
    };  

    return (
        <div style={{alignItems: "center", justifyContent: "center"}}>
            {
                feedBack.shown && 
                <Feedback
                    title="Hata" 
                    description="Email Veya Şifrenizi Kontrol edin"
                    variant={feedBack.variant as "success" | "info" | "danger" | "warning"}
                    style={{marginBottom: 20}}
                />
            }  
            <form onSubmit={handleSubmit} style={{backgroundColor: "transparent", padding: 25, borderRadius: 20, borderWidth: 1, borderColor: "gray"}}>
                <Input
                    id="input-1"
                    label="Email"
                    type="email"
                    hasPrefix={
                        <Icon marginLeft="4" onBackground="neutral-weak" name="email" size="xs" />
                    }
                    style={{marginBottom: 20}}
                    onChange={(e)=>setInputs({...inputs, email: e.target.value})}
                    value={inputs.email}
                />
                <Input
                    id="input-1"
                    type="password"
                    label="Şifre"
                    hasPrefix={
                        <Icon marginLeft="4" onBackground="neutral-weak" name="email" size="xs" />
                    }
                    style={{marginBottom: 20}}
                    value={inputs.password}
                    onChange={(e)=>setInputs({...inputs, password: e.target.value})}
                />
                <Button variant="primary" style={{width: "100%"}} type="submit">Giriş</Button>
            </form>
        </div>
    );
}

export default Admin;