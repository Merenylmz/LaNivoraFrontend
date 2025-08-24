"use client"

import AdminGuard from "@/components/admin/AdminGuard";
import {
  Button,
  Icon,
  Input,
  Textarea,
  Row,
  Column,
} from "@once-ui-system/core";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AdminCampaignsCreate = () => {
    const userInfo = useSelector((state: { auth: {} }) => state.auth) as {
        token: string;
    };
    const router = useRouter();
    const [inputs, setInputs] = useState({
        description: "",
        discount: "",
    });


  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault();
    try {

      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/campaign/add?token=${userInfo.token}`, inputs);
      const data = res.data;

      if (!data) {
        return alert("Ekleme İşlemi Başarısız");
      }
      return router.push("/admin/campaigns");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminGuard>
      <div>
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "transparent",
        padding: 25,
        borderRadius: 20,
        border: "1px solid gray",
      }}
    >
      <Row fillWidth gap="24" style={{ flexDirection: "column" }}>

        <Column fillWidth>
          <Textarea
            id="aaa"
            label="Açıklama"
            placeholder="Açıklamayı buraya girin"
            lines={3}
            value={inputs.description}
            onChange={(e) =>
              setInputs({ ...inputs, description: e.target.value })
            }
          />
        </Column>

        <Column fillWidth>
            <Input
                id="aaa"
                label="Fiyat"
                type="number"
                value={inputs.discount}
                onChange={(e) => setInputs({ ...inputs, discount: e.target.value })}
                hasPrefix={
                    <Icon
                    marginLeft="4"
                    onBackground="neutral-weak"
                    name="list"
                    size="xs"
                    />
                }
            />
        </Column>

        <Row style={{ justifyContent: "flex-end", marginTop: 24 }}>
          <Button variant="primary" type="submit">
            Ekle
          </Button>
          <Button variant="primary" type="button" style={{marginLeft: 10}} onClick={()=>router.push("/admin/campaigns")}>
            Geri Dön
          </Button>
        </Row>
      </Row>
    </form>
    </div>
    </AdminGuard>
  );
}

export default AdminCampaignsCreate;