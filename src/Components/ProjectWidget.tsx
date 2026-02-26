type WidgetProps = {
  image: string;
  title: string;
  description: string;
  skills: string[];
  linkGithub: string;
  linkWebsite?: string;
  linkYoutube?: string;
  index: number;
};

const ProjectWidget = ({
  image,
  title,
  description,
  skills,
  linkGithub,
  linkWebsite,
  linkYoutube,
  index,
}: WidgetProps) => {
  const isReversed = index % 2 !== 0;

  return (
    <div className={`flex items-center gap-10 ${isReversed ? "flex-row-reverse" : ""}`}>
      <img className="w-7/12 border-orange-300 border shadow-xl sepia saturate-[150%] hue-rotate-[10deg] transition duration-300 hover:sepia-0 hover:hue-rotate-0 cursor-pointer" src={image} alt={title}/>
      <div className={`flex flex-col gap-3 ${isReversed ? "items-start text-left" : "items-end text-right"}`}>
        <h3 className="text-3xl">{title}</h3>
        <p>{description}</p>
        <div className="flex gap-3 flex-wrap justify-end">
          {skills.map((skill, i) => (
            <p key={i} className="bg-orange-300 text-black px-1.5 rounded-sm">
              {skill}
            </p>
          ))}
        </div>
        <div className="flex gap-2">
          <a href={linkGithub} target="_blank">
            <i className="fa-brands fa-github hover:text-orange-300"></i>
          </a>
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
    </div>
  );
};

export default ProjectWidget;