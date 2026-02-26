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
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            {skills.map((skill, i) => (
                <p key={i}>{skill}</p>
            ))}
            <div className="flex gap-2">
                {linkGithub && (
                    <a href={linkGithub} target="_blank">
                        <i className="fa-brands fa-github hover:text-orange-300"></i>
                    </a>
                )}
                {linkWebsite && (
                    <a href={linkWebsite} target="_blank">
                        <i className="fa-solid fa-arrow-up-right-from-square hover:text-orange-300"></i>
                    </a>
                )}
                {linkYoutube && (
                    <a href={linkYoutube} target="_blank">
                        <i className="fa-brands fa-youtube hover:text-orange-300"></i>
                    </a>
                )
                }
            </div>
        </div>
    )
}

export default ProjectMiniWidget