import type { PropsWithChildren}  from "react"

interface SectionProps extends PropsWithChildren {
  className?: string,
  id?:string
}

export const Section = ({children, className, id}: SectionProps) => {

  return(
    <section  id={id} className={`p-5 ${className}`}>
      {children}
    </section>
  )
}