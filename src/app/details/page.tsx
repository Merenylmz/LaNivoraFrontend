"use client";

import { useSearchParams } from "next/navigation";
import { ReactNode, useLayoutEffect, useState } from "react";
import axios from "axios";
import ParfumeTypes from "@/components/parfume/ParfumeTypes";
import { baseURL, person } from "@/resources";
import {
  Avatar,
  Carousel,
  Column,
  Heading,
  HeadingNav,
  Icon,
  Line,
  Row,
  Schema,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import { ScrollToHash } from "@/components";
import getTextWithGenderId from "@/components/other/other";


const Details = () => {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  const [detail, setDetail] = useState<ParfumeTypes | null>(null);

  useLayoutEffect(() => {
    setDetail(null);
    (async () => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/parfumes/${slug}`);
      setDetail(res.data);
    })();
  }, [slug]);

  return (
    <>
      {detail && (
        <Row
          fillWidth
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "16px",
          }}
        >
          {/* Ana içerik */}
          <Column
            as="section"
            maxWidth="m"
            horizontal="center"
            gap="l"
            paddingTop="24"
            style={{
              paddingLeft: "16px",
              paddingRight: "16px",
              flex: 1,
              minWidth: "300px",
            }}
          >
            <Schema
              as="blogPosting"
              baseURL={baseURL}
              path={`/details?slug=${slug}`}
              title={detail.title as string}
              description={detail.description as string}
              image={
                detail.images[0] as string ||
                `/api/og/generate?title=${encodeURIComponent(detail.title as string)}`
              }
              author={{
                name: "Quarkend",
                url: `https://quarkend.com`,
              }}
            />

            <Column maxWidth="s" gap="16" horizontal="center" align="center">
              <SmartLink href="/products">
                <Text variant="label-strong-m">Ürünlerimiz</Text>
              </SmartLink>
              <Text variant="body-default-xs" onBackground="neutral-weak" marginBottom="12">
                Parfüm
              </Text>
              <Heading variant="display-strong-m">{detail.title}</Heading>
            </Column>

            <Row marginBottom="32" horizontal="center">
              <Row gap="16" vertical="center">
                <Avatar size="s" src={person.avatar} />
                <Text variant="label-default-m" onBackground="brand-weak">
                  {person.name}
                </Text>
              </Row>
            </Row>

            {detail.images[0] && (
              <Carousel
                items={detail.images.map((i) => ({
                  slide: i,
                  alt: "Ürün görseli",
                }))}
                style={{ maxWidth: "100%" }}
              />
            )}

            <Column as="article" maxWidth="s" gap="16">
              <Text variant="body-default-xl">
                <strong>Açıklama:</strong> {detail.description}
              </Text>

              <Text variant="body-default-m">
                <strong>Fiyat:</strong> {detail.price as number} ₺
              </Text>

              {detail.campaignId?.description && (
                <Column
                  style={{
                    padding: "16px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    width: "100%",
                  }}
                  gap="8"
                >
                  <Text variant="label-strong-m">🎯 Kampanya Bilgisi</Text>
                  <Text>Açıklama: {detail.campaignId.description}</Text>
                  <Text>İndirim Miktarı: {detail.campaignId.discount as ReactNode} ₺</Text>
                  <Text>
                    Kampanya Dahil Fiyat: {((detail.price as number) - (detail.campaignId.discount as number)) > 0 && (detail.price as number) - (detail.campaignId.discount as number)} ₺
                  </Text>
                </Column>
              )}

              <Text>
                <strong>Yıldızlı Ürün mü?:</strong> {detail.star ? "⭐ Evet" : "Hayır"}
              </Text>

              {detail.otherInfo && (
                <Text>
                  <strong>Diğer Bilgiler:</strong> {detail.otherInfo}
                </Text>
              )}

              {detail.fragranceNotes && (
                <Text>
                  <strong>Koku Tonları:</strong> {detail.fragranceNotes}
                </Text>
              )}

              {(
                <Text>
                  <strong>Cinsiyet:</strong> {getTextWithGenderId(detail.gender as string)}
                </Text>
              )}
            </Column>

            {/* <Column fillWidth gap="40" horizontal="center" marginTop="40">
              <Line maxWidth="40" />
              <Heading as="h2" variant="heading-strong-xl" marginBottom="24">
                Diğer Ürünlerimiz
              </Heading>
              {/* <Projects range={true}/> 
            </Column> */}

            <ScrollToHash />
          </Column>

          {/* Sidebar sadece geniş ekranlarda */}
          <Column
            maxWidth={12}
            paddingLeft="40"
            fitHeight
            position="sticky"
            top="80"
            gap="16"
            style={{
              display: "none",
            }}
            className="md:flex"
          >
            <Row
              gap="12"
              paddingLeft="2"
              vertical="center"
              onBackground="neutral-medium"
              textVariant="label-default-s"
            >
              <Icon name="document" size="xs" />
              On this page
            </Row>
            <HeadingNav fitHeight />
          </Column>
        </Row>
      )}
    </>
  );
};

export default Details;