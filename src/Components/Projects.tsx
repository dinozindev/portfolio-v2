import projects from "../data/main-projects.json";
import otherProjects from "../data/other-projects.json";
import SectionHeader from "./SectionHeader";
import ProjectWidget from "./ProjectWidget";
import ProjectMiniWidget from "./ProjectMiniWidget";

const Projects = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-evenly pb-50">
        <div className="flex flex-col w-2/4 gap-25 pb-30">
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
        </div>
        <div className="flex flex-col gap-4 w-3/4">
          <header className="mb-16 flex flex-col items-center gap-4">
          <h3 className="text-4xl">Outros Projetos</h3>
          <a className="text-orange-300 hover:text-white" href="https://github.com/dinozindev?tab=repositories" target="_blank">Visualize outros repositórios no GitHub</a>
          </header>
          <div className="flex flex-wrap gap-4 justify-center">
            {otherProjects.map((project, index) => (
              <ProjectMiniWidget
                key={project.title}
                {...project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;