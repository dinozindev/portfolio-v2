type CardProps = {
  children: React.ReactNode;
  title: string;
};

const SkillCard = ({ children, title }: CardProps) => {
  return (
    <div className="group relative bg-miniwidget p-8 rounded-xl shadow-2xl 
                    transition-all hover:-translate-y-2.5 overflow-hidden">
      <div className="relative z-0 flex items-center justify-center">
        {children}
      </div>
      {title && (
        <div className="absolute inset-0 
                        bg-black/70 
                        flex items-center justify-center
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300
                        z-10">
          <p className="text-white text-center px-4 text-sm hover:cursor-default">
            {title}
          </p>
        </div>
      )}
    </div>
  );
};

export default SkillCard;