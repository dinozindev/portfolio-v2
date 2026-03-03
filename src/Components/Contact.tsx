import ContactCard from "./ContactCard"
import SectionHeader from "./SectionHeader"

const Contact = () => {
    return (
        <>
            <section className="flex items-center justify-evenly pb-50">
                <div className="flex flex-col w-2/4 gap-4">
                    <SectionHeader number="04" text="Contato" />
                    <div className="flex flex-col gap-10 md:gap-0 md:flex-row md:justify-between pt-10 flex-wrap">
                        <ContactCard title="Email" description="dinozindev@gmail.com">
                            <i className="fa-solid fa-envelope text-5xl"></i>
                        </ContactCard>
                        <ContactCard title="Telefone" description="(11) 95350-9367">
                            <i className="fa-solid fa-phone text-5xl"></i>
                        </ContactCard>
                        <ContactCard title="GitHub" description="@dinozindev" link="https://github.com/dinozindev">
                            <i className="fa-brands fa-github text-5xl"></i>
                        </ContactCard>
                        <ContactCard title="LinkedIn" description="Lucas Kenji Kikuchi" link="https://www.linkedin.com/in/lucas-kenji-kikuchi-233802287/">
                            <i className="fa-brands fa-linkedin text-5xl"></i>
                        </ContactCard>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact