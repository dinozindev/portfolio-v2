
type SectionHeaderProps = {
    number: string,
    text: string
}

const SectionHeader = ({number, text}: SectionHeaderProps) => {
  return (
    <>
    <header className="flex mb-8 mt-16 items-center md:justify-start gap-6">
        <div className="flex gap-2 items-end">
        <p className="text-orange-300 text-3xl">{number}.</p>
        <h3 className="text-4xl">{text}</h3>
        </div> 
        <div className="w-3/4 md:w-1/5 h-px bg-orange-300 opacity-50"></div>
    </header>
    
    </>
  )
}

export default SectionHeader