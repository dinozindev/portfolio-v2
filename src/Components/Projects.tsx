import ProjectWidget from "./ProjectWidget"
import SectionHeader from "./SectionHeader"
import valskins from "../assets/valskins-screenshot.png"
import cs2skins from "../assets/weapon-ss.png";
import mottumottion from "../assets/mottumottion.png";

const projects = [
  {
    image: valskins,
    title: "ValSkins",
    description:
      "Aplicação Web consumindo Valorant-API para visualização de Skins, Bundles, Buddies, Player Cards, Player Titles e Sprays do jogo Valorant.",
    skills: ["TypeScript", "React", "styled-components"],
    linkGithub: "https://github.com/dinozindev/val-skins",
    linkWebsite: "https://val-skins.vercel.app/",
  },
  {
    image: cs2skins,
    title: "CS2 Skins",
    description: "Aplicação Web consumindo CSGO-API do ByMykel para visualização de Skins, Kits de Música, Coleções, Chaveiros, Adesivos e Agentes do jogo Counter-Strike 2.",
    skills: ["TypeScript", "React", "styled-components"],
    linkGithub: "https://github.com/dinozindev/cs2-skins",
    linkWebsite: "https://cs2-skins-gamma.vercel.app/"
  },
  {
    image: mottumottion,
    title: "Mottu Mottion",
    description: "Projeto desenvolvido em parceria com a empresa Mottu com o objetivo de facilitar o gerenciamento dos pátios de moto através de uma aplicação que forneça a atualização e localização em tempo real da ocupação de motocicletas, além do histórico de movimentações de uma moto dentro da filial.",
    skills: ["TypeScript", "React Native", "Java", ".NET", "Docker", "Azure", "MongoDB", "Oracle"],
    linkGithub: "https://github.com/dinozindev/challenge-mottu-mottion"
  }
];

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
        index={index}
      />
    ))}
  </div>
</section>
    </>
  )
}

export default Projects