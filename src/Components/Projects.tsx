import ProjectWidget from "./ProjectWidget"
import SectionHeader from "./SectionHeader"
import valskins from "../assets/valskins-screenshot.png"

const Projects = () => {
  return (
    <>
    <section className="flex items-center justify-evenly pb-50">
                <div className="flex flex-col w-2/4 gap-4">
                    <SectionHeader number="03" text="Projetos" />
                    <div className="flex justify-between">
                        <ProjectWidget image={valskins} title="ValSkins v1" description="Aplicação Web consumindo Valorant-API para visualização de Skins, Bundles, Buddies, Player Cards, Player Titles e Sprays do jogo Valorant."  linkGithub="#" linkWebsite="#" />
                    </div>
                </div>
            </section>
    </>
  )
}

export default Projects