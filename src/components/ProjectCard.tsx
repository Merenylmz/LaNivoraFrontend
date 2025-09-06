"use client";

import {
  Avatar,
  Card,
  Column,
  Icon,
  Line,
  Media,
  Row,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import Link from "next/link";
import ParfumeTypes from "./parfume/ParfumeTypes";

interface ProjectCardProps {
  data: ParfumeTypes
}
export function truncate(text: string, maxLength: number) {
  return text.length > maxLength
    ? text.slice(0, maxLength) + "..."
    : text;
}


export const ProjectCard: React.FC<ProjectCardProps> = ({
  data 
}) => {
  return (
    <div style={{ width: "100%", height: "550px" }}>
      <SmartLink href={`/details?slug=${data.slug}`} style={{ width: "100%", height: "100%" }}>
      <Card
        radius="l-4"
        direction="column"
        border="neutral-alpha-medium"
        style={{ minHeight: 550, display: "flex", flexDirection: "column", width: "100%" }}
      >
        <Row fillWidth paddingX="20" paddingY="12" gap="8" vertical="center">
          <Avatar size="xs" src="/images/lanivoraLogo.jpg" />
          <Text variant="label-default-s">LaNivora</Text>
        </Row>

        <Media
          border="neutral-alpha-weak"
          sizes="400px"
          fillWidth
          aspectRatio="4 / 3"
          radius="l"
          alt="Proxima b"
          src={data.images[0] as string}
        />

        <Column fillWidth paddingX="20" paddingY="24" gap="8" style={{ flex: 1 }}>
          <Text variant="body-default-xl" style={{ lineClamp: 2 }}>{data.title}</Text>
          <Text onBackground="neutral-weak" variant="body-default-s" style={{ lineClamp: 3 }}>
            {truncate(data.description as string, 220)}
          </Text>
        </Column>

        <Line background="neutral-alpha-medium" />

        <Row
          paddingX="20"
          paddingY="12"
          gap="8"
          vertical="center"
          textVariant="label-default-s"
          onBackground="neutral-medium"
          >
          <Icon name="like" size="s" onBackground="neutral-strong" />
          La
          <Icon name="chat" size="s" onBackground="neutral-strong" marginLeft="24" />
          Nivora
        </Row>
      </Card>
      </SmartLink>
    </div>
  );
};