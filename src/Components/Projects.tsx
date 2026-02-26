import projects from "../data/main-projects.json";
import SectionHeader from "./SectionHeader";
import ProjectWidget from "./ProjectWidget";

const Projects = () => {
  return (
    <>
      <section className="flex items-center justify-evenly pb-50">
        <div className="flex flex-col w-2/4 gap-25">
          <SectionHeader number="03" text="Projetos" />

          {projects.map((project, index) => (
            <ProjectWidget
              key={project.title}
              {...project}
              image={
                new URL(
                  `../assets/${project.image}`,
                  import.meta.url
                ).href
              }
              index={index}
            />
          ))}

          <SectionHeader number="03.1" text="Outros Projetos" />
        </div>
      </section>
    </>
  );
};

export default Projects;