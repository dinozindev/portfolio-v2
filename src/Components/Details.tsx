import SectionHeader from "./SectionHeader"

const Details = () => {
    return (
        <>
            <section className="flex items-center justify-evenly pb-40">
                <div className="flex flex-col w-2/4 gap-4">
                    <SectionHeader number="01" text="Sobre" />
                    <div className="flex justify-between">
                        <div className="text-md md:text-xl">
                            <p>
                                Desenvolvedor Full-Stack com foco em desenvolvimento de <span className="text-orange-300">aplicações web modernas, APIs robustas e integração com serviços em nuvem.</span>
                            </p>
                            <br></br>
                            <p>Tenho experiência no front-end com <span className="text-orange-300">React, Next.js, TypeScript, Styled Components, Tailwind CSS e Bootstrap 5</span>, aplicando boas práticas de componentização, responsividade e performance. No back-end, desenvolvo APIs com <span className="text-orange-300">Spring Boot e .NET Minimal APIs</span>, seguindo princípios de arquitetura limpa e boas práticas REST.</p>
                            <br></br>
                            <p>Trabalho com bancos relacionais <span className="text-orange-300">(Oracle, PostgreSQL e MySQL)</span> e não relacionais <span className="text-orange-300">(MongoDB)</span>, além de pipelines de CI/CD com Azure DevOps e deploys utilizando <span className="text-orange-300">Docker e Microsoft Azure.</span></p>
                            <br></br>
                            <p>Sou movido por aprendizado contínuo, boas práticas e desenvolvimento de soluções <span className="text-orange-300">eficientes e escaláveis.</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Details