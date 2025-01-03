

export default function Title(props) {
  return (
    <div className={`flex gap-4 max-xs:gap-3 items-center ${props.className}`}>
        <div className="h-10 w-5 bg-primary rounded max-xs:h-8 max-xs:w-4"></div>
        <h2 className="text-primary font-semibold ">{props.text}</h2>
    </div>
  )
}
