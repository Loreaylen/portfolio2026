interface HeadingProps {
  children: string,
  className?: string
}

const Heading = ({children, className}: HeadingProps) => {
  return (
    <h2 className={`p-3 text-text-primary font-jakarta text-3xl max-lg:text-2xl uppercase ${className}`}>
      {children}
    </h2>
  )
}

export default Heading