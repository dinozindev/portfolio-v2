const Header = () => {
    return (
        <header className="flex flex-row justify-between items-center px-12 py-10">
            <h1 className="text-3xl text-orange-300">dinozindev</h1>
            <div className="flex flex-row justify-end items-center gap-6">
            <a><span className="text-orange-300">01.</span> Seção 1</a>
            <a><span className="text-orange-300">02.</span> Seção 2</a>
            <a><span className="text-orange-300">03.</span> Seção 3</a>
            <a><span className="text-orange-300">04.</span> Seção 4</a>
            <div className="border-solid rounded-md border p-3 text-orange-300">
                Currículo
            </div>
            </div>
        </header>
    )
}

export default Header