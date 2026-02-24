type WidgetProps = {
  image: string;
  title: string;
  description: string;
  // skills: string[];
  linkGithub?: string;
  linkWebsite: string;
}

const ProjectWidget = ({ image, title, description, linkGithub, linkWebsite } : WidgetProps) => {
  return (
    <div className="flex relative justify-between items-center gap-10">
      <img className="w-3/5 border-orange-300 border shadow-xl sepia saturate-[150%] hue-rotate-[10deg] transition duration-300 hover:sepia-0 hover:hue-rotate-0 cursor-pointer" src={image} alt={title} />
      <div className="flex flex-col items-end">
        <h3 className="text-3xl">{title}</h3>
        <p>{description}</p>
        <div className="flex gap-4">
          <a href={linkGithub} target="_blank"><i className="fa-brands fa-github"></i></a>
          <a href={linkWebsite} target="_blank"><i className="fa-solid fa-arrow-up-right-from-square"></i></a></div>
      </div>
    </div>
  )
}

export default ProjectWidget