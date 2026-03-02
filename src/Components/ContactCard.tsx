type CardProps = {
    title: string;
    description: string;
    link?: string;
    children: React.ReactNode;
}

const ContactCard = ({title, description, link, children} : CardProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
        {children}
        <h3 className="text-2xl">{title}</h3>
        <p>{description}</p>
        {link && (
            <a href={link} target="_blank"><i className="fa-solid fa-arrow-up-right-from-square text-xl mt-1 hover:text-orange-300 transition-all"></i></a>
        )}
    </div>
  )
}

export default ContactCard