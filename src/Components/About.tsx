const About = () => {
    return (
        <>
            <section className="flex items-center justify-evenly h-screen">
                <div className="flex flex-col w-2/4 gap-2">
                    <p className="text-xl text-orange-300">Olá, meu nome é</p>
                    <h2 className="text-6xl md:text-8xl">Lucas Kenji.</h2>
                    <p className="text-xl md:text-2xl">Sou um desenvolvedor Full-stack apaixonado por Front-end. Formado em Análise e Desenvolvimento de Sistemas na FIAP, busco a primeira oportunidade de emprego na área de tecnologia.</p>
                    <div className="flex py-8 gap-3">
                        <a href="#details" className="text-orange-300 hover:text-orange-100 cursor-pointer">Sobre</a>
                        <a href="#skills" className="text-orange-300 hover:text-orange-100 cursor-pointer">Skills</a>
                        <a href="#projects" className="text-orange-300 hover:text-orange-100 cursor-pointer">Projetos</a>
                        <a href="#contact" className="text-orange-300 hover:text-orange-100 cursor-pointer">Contato</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About