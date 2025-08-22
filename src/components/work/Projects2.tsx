import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard2 } from "../ProjectCard2";

interface ProjectsProps {
  range?: [number, number?];
}

export function Projects2({ range }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });   

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

    
  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      <ProjectCard2
        priority={1 < 2}
        key={"deneme"}
        href={`work/deneme`}
        images={["/images/projects/project-01/cover-01.jpg", "/images/projects/project-01/cover-02.jpg","/images/projects/project-01/cover-03.jpg", "/images/projects/project-01/deneme.gif"]}
        title={`Web tasarımı, dijital dünyadaki vitrininizdir.`}
        description={"Kullanıcıların sitenizde kalmasını, markanızla etkileşim kurmasını ve hedeflerinize ulaşmanızı sağlayan ilk izlenimi oluşturur. İyi bir tasarım, güvenilirlik ve profesyonellik mesajı verirken, kötü bir tasarım potansiyel ziyaretçileri hızla uzaklaştırabilir."}
        content={"Kullanıcıların sitenizde kalmasını, markanızla etkileşim kurmasını ve hedeflerinize ulaşmanızı sağlayan ilk izlenimi oluşturur. İyi bir tasarım, güvenilirlik ve profesyonellik mesajı verirken, kötü bir tasarım potansiyel ziyaretçileri hızla uzaklaştırabilir."}
        avatars={displayedProjects[0].metadata.team?.map((member) => ({ src: member.avatar })) || []}
        link={"/projects"}
      />
    </Column>
  );
}
