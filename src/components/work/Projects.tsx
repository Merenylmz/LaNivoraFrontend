import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";
import ParfumeCard from "../parfume/ParfumeCard";

interface ProjectsProps {
  range: Boolean;
}

export function Projects({ range }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  // const displayedProjects = range
  //   ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
  //   : sortedProjects;

  return (
    <Column fillWidth gap="16" marginBottom="40">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "24px",
          width: "100%",
        }}
      >
        <ParfumeCard range={range}/>
      </div>
    </Column>
  );
}