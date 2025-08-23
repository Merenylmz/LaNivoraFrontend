"use client"

import ParfumeTypes from "@/components/parfume/ParfumeTypes";
import { Button, Column, Row, Text } from "@once-ui-system/core";
import axios from "axios";
import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";

const AdminProducts = () => {
    const [parfumes, setParfumes] = useState<Array<ParfumeTypes>>();
    const userInfo = useSelector((state: {auth:{}})=>state.auth);

    useLayoutEffect(()=>{
        (async()=>{
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/parfumes/`);
            const data = res.data;
            setParfumes(data);
        })()
    }, []);

    console.log(userInfo);

    return (
        <div>
            {
                parfumes && parfumes.map((parfume)=>(
                    <Row fillWidth fitHeight gap="16" style={{flexDirection: "row", width: "100%" }}>
                        <Column fillWidth>
                            <Text>{parfume.title}</Text>
                        </Column>
                        <Column fillWidth vertical="end">
                            <Button>Sil</Button>
                            <Button>Güncelle</Button>
                        </Column>
                    </Row>
                ))
            }
        </div>
    );
}

export default AdminProducts;