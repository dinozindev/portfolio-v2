type MiniWidgetProps = {
    title: string;
    description: string;
    skills: string[];
    linkGithub?: string;
    linkWebsite?: string;
    linkYoutube?: string;
    index: number;
}

const ProjectMiniWidget = ({ title, description, skills, linkGithub, linkWebsite, linkYoutube }: MiniWidgetProps) => {
    return (
        <div className="bg-miniwidget w-1/4 px-6 py-9 flex flex-col justify-between shadow-2xl hover:translate-z-2.5 hover:-translate-y-2.5 transition-all">
            <h3 className="text-3xl mb-3">{title}</h3>
            <p className="mb-3">{description}</p>
            <div className="flex flex-wrap gap-3 mb-3">
            {skills.map((skill, i) => (
                <p className="bg-orange-300 text-black px-1.5 rounded-sm text-sm" key={i}>{skill}</p>
            ))}
            </div>
            <div className="flex gap-2 justify-end">
                {linkGithub && (
                    <a href={linkGithub} target="_blank">
                        <i className="fa-brands fa-github hover:text-orange-300 transition-all"></i>
                    </a>
                )}
                {linkWebsite && (
                    <a href={linkWebsite} target="_blank">
                        <i className="fa-solid fa-arrow-up-right-from-square hover:text-orange-300 transition-all"></i>
                    </a>
                )}
                {linkYoutube && (
                    <a href={linkYoutube} target="_blank">
                        <i className="fa-brands fa-youtube hover:text-orange-300 transition-all"></i>
                    </a>
                )
                }
            </div>
        </div>
    )
}

export default ProjectMiniWidget