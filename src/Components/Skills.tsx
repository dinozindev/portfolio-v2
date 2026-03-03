import SectionHeader from "./SectionHeader"
import SkillCard from "./SkillCard"

const Skills = () => {
    return (
        <>
            <section className="flex items-center justify-evenly pb-40">
                <div className="flex flex-col w-2/4 gap-4">
                    <SectionHeader number="02" text="Skills" />
                    <div className="flex flex-wrap justify-center gap-4 text-3xl md:text-6xl text-orange-200 md:pt-20">
                        <SkillCard title="C"><i className="devicon-c-original"></i></SkillCard>
                        <SkillCard title="JavaScript"><i className="devicon-javascript-plain"></i></SkillCard>
                        <SkillCard title="HTML"><i className="devicon-html5-plain"></i></SkillCard>
                        <SkillCard title="CSS"><i className="devicon-css3-plain"></i></SkillCard>
                        <SkillCard title="TypeScript"><i className="devicon-typescript-plain"></i></SkillCard>
                        <SkillCard title="React.js"><i className="devicon-react-original"></i></SkillCard>
                        <SkillCard title="Next.js"><i className="devicon-nextjs-plain"></i></SkillCard>
                        <SkillCard title="Tailwind CSS"><i className="devicon-tailwindcss-original"></i></SkillCard>
                        <SkillCard title="Bootstrap 5"><i className="devicon-bootstrap-plain"></i></SkillCard>
                        <SkillCard title="Java"><i className="devicon-java-plain"></i></SkillCard>
                        <SkillCard title="Spring"><i className="devicon-spring-original"></i></SkillCard>
                        <SkillCard title="Oracle"><i className="devicon-oracle-original"></i></SkillCard>
                        <SkillCard title="Node.js"><i className="devicon-nodejs-plain-wordmark"></i></SkillCard>
                        <SkillCard title="MySQL"><i className="devicon-mysql-plain-wordmark"></i></SkillCard>
                        <SkillCard title="PostgreSQL"><i className="devicon-postgresql-plain"></i></SkillCard>
                        <SkillCard title="MongoDB"><i className="devicon-mongodb-plain"></i></SkillCard>
                        <SkillCard title=".NET"><i className="devicon-dot-net-plain"></i></SkillCard>
                        <SkillCard title="Python"><i className="devicon-python-plain"></i></SkillCard>
                        <SkillCard title="Docker"><i className="devicon-docker-plain"></i></SkillCard>
                        <SkillCard title="Azure"><i className="devicon-azure-plain"></i></SkillCard>
                        <SkillCard title="Flask"><i className="devicon-flask-plain"></i></SkillCard>
                        <SkillCard title="Node-RED"><i className="devicon-nodered-plain"></i></SkillCard>
                        <SkillCard title="Firebase"><i className="devicon-firebase-plain"></i></SkillCard>
                        <SkillCard title="Postman"><i className="devicon-postman-plain"></i></SkillCard>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills