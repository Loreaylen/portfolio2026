import type { PropsWithChildren}  from "react"

interface SectionProps extends PropsWithChildren {
  className?: string,
  id?:string
}

const Section = ({children, className, id}: SectionProps) => {

  return(
    <section id={id} className={`mx-10 px-5 py-10 border-b border-border/50 ${className}`}>
      {children}
    </section>
  )
}
export default Section