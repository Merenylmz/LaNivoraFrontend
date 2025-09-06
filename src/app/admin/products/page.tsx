"use client"

import { deleteItem } from "@/adminActions/actions";
import AdminGuard from "@/components/admin/AdminGuard";
import ParfumeTypes from "@/components/parfume/ParfumeTypes";
import { Button, Column, Feedback, Row, Text } from "@once-ui-system/core";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";

const AdminProducts = () => {
    const [parfumes, setParfumes] = useState<Array<ParfumeTypes>>();
    const userInfo = useSelector((state: {auth:{}})=>state.auth) as {token: string};
    const [feedBack, setFeedBack] = useState({shown: false, variant: "success"});
    const router = useRouter();

    useLayoutEffect(()=>{
        (async()=>{
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/parfumes/`);
            const data = res.data;
            setParfumes(data);
        })()
    }, []);

    const deleteButtonHandler = async(slug: String) =>{
        const status = await deleteItem(`${process.env.NEXT_PUBLIC_API_URL}/parfumes/delete/${slug}?token=${userInfo.token}`);
        
        status ? setFeedBack({shown: true, variant: "success"}) : setFeedBack({shown: false, variant: "danger"});
    };

    
    return (
        <AdminGuard>
            <div>
                <Button variant="primary" fillWidth style={{marginBottom: 20}} onClick={()=>router.push("/admin/products/create")}>Parfüm Ekle</Button>
                <Button variant="primary" fillWidth style={{marginBottom: 30}} onClick={()=>router.push("/admin/campaigns")}>Kampanya Sayfası</Button>
                {
                    feedBack.shown && 
                    <Feedback
                    title="Bilgi" 
                    description="Ürün Başarıyla Silindi"
                    variant={feedBack.variant as "success" | "info" | "danger" | "warning"}
                        style={{marginBottom: 20}}
                        />
                    }   
                {
                    parfumes && parfumes.map((parfume, index)=>(
                        <Row fillWidth fitHeight gap="160" key={index} style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                            <Column fillWidth>
                                <Text>{parfume.title}</Text>
                                <Text variant="body-default-xs">{parfume.description}</Text>
                            </Column>
                            <Column style={{ flexDirection: "row", gap: 8 }}>
                                <Button variant="danger" onClick={()=>deleteButtonHandler(parfume.slug)}>Sil</Button>
                                <Button variant="primary" onClick={()=>router.push(`/admin/products/edit?slug=${parfume.slug}`)}>Güncelle/Detay</Button>
                            </Column>
                        </Row>
                    ))
                }
            </div>
            
        </AdminGuard>
    );
}

export default AdminProducts;