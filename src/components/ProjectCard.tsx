"use client";

import {
  Avatar,
  Card,
  Column,
  Icon,
  Line,
  Media,
  Row,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  image: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  image,
}) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Card
        radius="l-4"
        direction="column"
        border="neutral-alpha-medium"
        style={{ minHeight: 550, display: "flex", flexDirection: "column" }}
      >
        <Row fillWidth paddingX="20" paddingY="12" gap="8" vertical="center">
          <Avatar size="xs" src="/images/avatar.jpg" />
          <Text variant="label-default-s">Quarkend</Text>
        </Row>

        <Media
          border="neutral-alpha-weak"
          sizes="400px"
          fillWidth
          aspectRatio="4 / 3"
          radius="l"
          alt="Proxima b"
          src={image}
        />

        <Column fillWidth paddingX="20" paddingY="24" gap="8" style={{ flex: 1 }}>
          <Text variant="body-default-xl" style={{ lineClamp: 2 }}>{title}</Text>
          <Text onBackground="neutral-weak" variant="body-default-s" style={{ lineClamp: 3 }}>
            {description}
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
          Quarkend
          <Icon name="chat" size="s" onBackground="neutral-strong" marginLeft="24" />
          Team
        </Row>
      </Card>
    </div>
  );
};