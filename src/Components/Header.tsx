import curriculo from "../Curriculo.pdf"

const Header = () => {
    return (
        <header className="flex flex-row justify-between items-center px-12 py-10 fixed w-full">
            <h1 className="text-3xl text-orange-300">dinozindev</h1>
            <div className="flex flex-row justify-end items-center gap-6">
            <a className="hover:text-orange-200 transition-all" href="#details"><span className="text-orange-300">01.</span> Sobre</a>
            <a className="hover:text-orange-200 transition-all" href="#skills"><span className="text-orange-300">02.</span> Skills</a>
            <a className="hover:text-orange-200 transition-all" href="#projects"><span className="text-orange-300">03.</span> Projetos</a>
            <a className="hover:text-orange-200 transition-all" href="#contact"><span className="text-orange-300">04.</span> Contato</a>
            <a href={curriculo} target="_blank"><div className="border-solid rounded-md border p-3 text-orange-300 hover:text-white transition-all">
                Currículo
            </div></a>
            </div>
        </header>
    )
}

export default Header