"use client"

import { useRouter, useSearchParams } from "next/navigation";
import {
  Button,
  Checkbox,
  Icon,
  Input,
  Select,
  Textarea,
  Row,
  Column,
} from "@once-ui-system/core";
import { useSelector } from "react-redux";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { getItemsOrItem, slugify } from "@/adminActions/actions";
import CampaignType from "@/components/campaign/CampaignTypes";
import ParfumeTypes from "@/components/parfume/ParfumeTypes";
import AdminGuard from "@/components/admin/AdminGuard";

const AdminProductEdit = () => {
    const searchParams = useSearchParams();
    const slug = searchParams.get("slug");
    const userInfo = useSelector((state: { auth: {} }) => state.auth) as {
    token: string;
  };
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState<Array<CampaignType>>();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    brand: "",
    price: "",
    extraInfo: "",
    notes: "",
    slug: "",
    campaign: "",
    isActive: false,
    isFeatured: false,
    images: []
  });


  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", inputs.title);
      formData.append("description", inputs.description);
      formData.append("brand", inputs.brand);
      formData.append("price", inputs.price);
      formData.append("otherInfo", inputs.extraInfo);
      formData.append("isActive", inputs.isActive ? "1": "0");
      formData.append("star", inputs.isFeatured ? "1": "0");
      formData.append("fragranceNotes", inputs.notes);
      formData.append("slug", inputs.slug);
      formData.append("campaignId", inputs.campaign);
      if (inputs.images[0]) {
        inputs.images.forEach((file) => {
          formData.append("images", file); 
        });
      } 
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/parfumes/edit/${slug}?token=${userInfo.token}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const data = res.data;

      if (!data) {
        return alert("Ekleme İşlemi Başarısız");
      }
      setIsLoading(false);

      return router.push("/admin/products");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    (async()=>{
        const campaign = await getItemsOrItem(`${process.env.NEXT_PUBLIC_API_URL}/campaign/`);
        const parfume = await getItemsOrItem(`${process.env.NEXT_PUBLIC_API_URL}/parfumes/${slug}`) as ParfumeTypes;
        setCampaigns(campaign);
        setInputs({
            title: parfume.title as string|| "" ,
            description: parfume.description as string || "",
            brand: parfume.brand as string || "",
            price: parfume.price as any, // number → string
            extraInfo: parfume.otherInfo as string || "",
            notes: parfume.fragranceNotes as string || "",
            slug: parfume.slug as string || "",
            campaign: parfume.campaignId?._id as string || "", // kampanya ID'si
            isActive: parfume.isActive as boolean || false,
            isFeatured: parfume.star as boolean || false,
            images: parfume.images as [], // edit modunda dosya input boş başlar
        });
    })()
  }, [slug]);

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
          <Input
            id="aaa"
            label="Başlık"
            value={inputs.title}
            onChange={(e) => {
              const slug = slugify(e.target.value);
              setInputs({ ...inputs, title: e.target.value , slug: slug});
            }}
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

        <Row fillWidth gap="16" style={{ flexDirection: "row" }}>
          <Column fillWidth>
            <Input
              id="aaa"
              label="Marka"
              value={inputs.brand}
              onChange={(e) => setInputs({ ...inputs, brand: e.target.value })}
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
          <Column fillWidth>
            <Input
              id="aaa"
              label="Fiyat"
              type="number"
              value={inputs.price}
              onChange={(e) => setInputs({ ...inputs, price: e.target.value })}
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
        </Row>

        <Column fillWidth>
          <Input
            id="aaa"
            label="Ek Bilgiler"
            value={inputs.extraInfo}
            onChange={(e) =>
              setInputs({ ...inputs, extraInfo: e.target.value })
            }
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

        <Column fillWidth>
          <Checkbox
            id="aaa"
            label="Ürün Aktif Olsun mu?"
            description="Ürünü ilk etapta aktif etmek için işaretleyin"
            isChecked={inputs.isActive}
            onToggle={() => setInputs({...inputs, isActive: !inputs.isActive})}
          />
        </Column>

        <Column fillWidth>
          <Textarea
            id="aaa"
            label="Koku Notaları"
            placeholder="Koku Tonu için Buraya girin"
            description="Ürüne Koku Tonu Eklemek isterseniz Buraya girebilirsiniz"
            lines={3}
            value={inputs.notes}
            onChange={(e) => setInputs({ ...inputs, notes: e.target.value })}
          />
        </Column>

        <Column fillWidth>
          <Input
            id="aaa"
            label="Resimler"
            type="file"
            multiple
            hasPrefix={
              <Icon
                marginLeft="4"
                onBackground="neutral-weak"
                name="list"
                size="xs"
              />
            }
            onChange={(e) => {
              const selectedFiles = Array.from(e.target.files || []);
              setInputs({ ...inputs, images: selectedFiles as []})
            }}
          />
        </Column>

        <Column fillWidth>
          <Checkbox
            label="Yıldızlı bir Ürün mü?"
            description="Yıldızlanan ürünler daha özel ürünlerdir."
            isChecked={inputs.isFeatured}
            onToggle={() =>setInputs({ ...inputs, isFeatured: !inputs.isFeatured })}
          />
        </Column>

        {/* <Column fillWidth>
          <Input
            id="aaa"
            label="Slug"
            value={inputs.slug}
            onChange={(e) => setInputs({ ...inputs, slug: e.target.value })}
            hasPrefix={
              <Icon
                marginLeft="4"
                onBackground="neutral-weak"
                name="list"
                size="xs"
              />
            }
          />
        </Column> */}

        <Column fillWidth>
        {
          campaigns && 
          <Select
            id="aaa"
            label="Kampanya Seçimi"
            description="Ürüne Kampanya Eklemek isterseniz seçebilirsiniz"
            value={inputs.campaign}
            options={[
              { label: "Seçim Yapınız", value: "0" },
              ...campaigns.map((c) => ({
                label: c.description,
                value: c._id as string, 
              })),

            ]}
            onSelect={(val) => setInputs({ ...inputs, campaign: val })}
          />
        }
        </Column>

        <Row style={{ justifyContent: "flex-end", marginTop: 24 }}>
          <Button variant="primary" type="submit" disabled={isLoading}>
            {
              isLoading ? 
              <Icon name="clock"/> : 
              <div>Güncelle</div>
            }
          </Button>
          <Button variant="primary" type="button" style={{marginLeft: 10}} onClick={()=>router.push("/admin/products")}>
            Geri Dön
          </Button>
        </Row>
      </Row>
    </form>
    </div>
    </AdminGuard>
  );
}

export default AdminProductEdit;