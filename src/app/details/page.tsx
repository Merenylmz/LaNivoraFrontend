"use client"

import { CustomMDX, ScrollToHash } from "@/components";
import { Posts } from "@/components/blog/Posts";
import ParfumeTypes from "@/components/parfume/ParfumeTypes";
import { Projects } from "@/components/work/Projects";
import { baseURL, person } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { Avatar, Column, Heading, HeadingNav, Icon, Line, Media, Row, Schema, SmartLink, Text } from "@once-ui-system/core";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { ReactNode, useLayoutEffect, useState } from "react";

const Details = () => {
    const searchParams = useSearchParams();
    const slug = searchParams.get("slug");
    const [detail, setDetail] = useState<ParfumeTypes | null>();

    useLayoutEffect(()=>{
        setDetail(null);
        (async()=>{
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/parfumes/${slug && slug}`);
            const data = res.data;
            setDetail(data);
        })()
    }, [slug]);
    
    return (
        <>
            {
                detail && <>
                <Row fillWidth>
                    <Row maxWidth={12}/>
                        <Row fillWidth horizontal="center">
                            <Column as="section" maxWidth="m" horizontal="center" gap="l" paddingTop="24">
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
                            <Media
                            src={detail.images[0] as string}
                            alt={detail.title as string}
                            aspectRatio="16/9"
                            priority
                            sizes="(min-width: 768px) 100vw, 768px"
                            border="neutral-alpha-weak"
                            radius="l"
                            marginTop="12"
                            marginBottom="8"
                            />
                        )}
                        <Column as="article" maxWidth="s">
                            <Text variant="body-default-xl">Açıklama: {detail.description}</Text>
                            <Text>Fiyat: {detail.price as ReactNode} {detail.campaignId.description && <> <br /><Text>Kampanya Dahil Fiyat: {(detail.price as number) - (detail.campaignId.discount as number)}</Text> </>}</Text>
                            <Text>Yıldızlı Ürün mü?: {detail.star ? "Yıldızlı":"Yok"}</Text>
                            <br />
                            <Text variant="body-default-m">Kampanya: {detail.campaignId.description ? <ul>
                                <li>Açıklama: {detail.campaignId.description}</li>
                                <li>İndirim Miktarı: {detail.campaignId.discount as ReactNode}</li>
                            </ul>: "Yok"}</Text>
                            <br />
                            <Text>Diğer Bilgiler: {detail.otherInfo}</Text>
                            <Text>Koku Tonları: {detail.fragranceNotes}</Text>
                    
                        </Column>
                        <Column fillWidth gap="40" horizontal="center" marginTop="40">
                            <Line maxWidth="40" />
                            <Heading as="h2" variant="heading-strong-xl" marginBottom="24">
                            Diğer Ürünlerimiz
                            </Heading>
                            {/* <Projects range={[8]} /> */}
                        </Column>
                        <ScrollToHash />
                        </Column>
                    </Row>
                    <Column
                        maxWidth={12}
                        paddingLeft="40"
                        fitHeight
                        position="sticky"
                        top="80"
                        gap="16"
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
                </>
            }
        </>
    );
}

export default Details;