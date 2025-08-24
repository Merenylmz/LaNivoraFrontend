"use client"
import { deleteItem } from "@/adminActions/actions";
import AdminGuard from "@/components/admin/AdminGuard";
import CampaignType from "@/components/campaign/CampaignTypes";
import { Button, Column, Feedback, Row, Text } from "@once-ui-system/core";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ReactNode, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";

const AdminCampaigns = () => {
    const [campaign, setCampaign] = useState<Array<CampaignType>>();
    const userInfo = useSelector((state: {auth:{}})=>state.auth) as {token: string};
    const [feedBack, setFeedBack] = useState({shown: false, variant: "success"});
    const router = useRouter();

    useLayoutEffect(()=>{
        (async()=>{
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/campaign/`);
            const data = res.data;
            setCampaign(data);
        })()
    }, []);

    const deleteButtonHandler = async(id: String) =>{
        const status = await deleteItem(`${process.env.NEXT_PUBLIC_API_URL}/campaign/delete/${id}?token=${userInfo.token}`);
        
        status ? setFeedBack({shown: true, variant: "success"}) : setFeedBack({shown: false, variant: "danger"});
    };

    console.log(userInfo);
    
    return (
        <AdminGuard>
            <div>
                <Button variant="primary" fillWidth style={{marginBottom: 20}} onClick={()=>router.push("/admin/campaigns/create")}>Kampanya Ekle</Button>
                <Button variant="primary" fillWidth style={{marginBottom: 30}} onClick={()=>router.push("/admin/products")}>Parfüm Sayfası</Button>
                {
                    feedBack.shown && 
                    <Feedback
                        title="Bilgi" 
                        description="Kampanya Başarıyla Silindi"
                        variant={feedBack.variant as "success" | "info" | "danger" | "warning"}
                        style={{marginBottom: 20}}
                    />
                }   
                {
                    campaign && campaign.map((c, index)=>(
                        <Row fillWidth fitHeight gap="160" key={index} style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                            <Column fillWidth>
                                <Text>{c.description}</Text>
                                <Text variant="body-default-xs">İndirim Miktarı: {c.discount as ReactNode}</Text>
                            </Column>
                            <Column style={{ flexDirection: "row", gap: 8 }}>
                                <Button variant="danger" onClick={()=>deleteButtonHandler(c._id)}>Sil</Button>
                            </Column>
                        </Row>
                    ))
                }
                
            </div>
        </AdminGuard>
    );
}

export default AdminCampaigns;