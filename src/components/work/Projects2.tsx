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
        images={["/images/projects/project-01/parfume1.png", "/images/projects/project-01/parfume2.png","/images/projects/project-01/parfume3.png" ,"/images/projects/project-01/parfume4.png"]}
        title={`Zamansız Elegansın Kokusu ile Fark Yaratın`}
        description={"Parfüm sadece bir koku değil, bir yaşam tarzıdır. Lanivora ile tarzınızı en iyi şekilde yansıtın. Her zevke uygun, geniş bir parfüm yelpazesi sizi bekliyor. İmza kokunuzu bulmak için koleksiyonumuza göz atın. Klasikten vazgeçmeyenler için... Her döneme damgasını vuran, ikonikleşmiş parfümlerle tanışın."}
        content={"Parfüm sadece bir koku değil, bir yaşam tarzıdır. Lanivora ile tarzınızı en iyi şekilde yansıtın. Her zevke uygun, geniş bir parfüm yelpazesi sizi bekliyor. İmza kokunuzu bulmak için koleksiyonumuza göz atın. Klasikten vazgeçmeyenler için... Her döneme damgasını vuran, ikonikleşmiş parfümlerle tanışın."}
        avatars={displayedProjects[0].metadata.team?.map((member) => ({ src: member.avatar })) || []}
        link={"/products"}
      />
    </Column>
  );
}
