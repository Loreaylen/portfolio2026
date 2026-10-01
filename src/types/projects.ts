export type ProjectData = {
  name: string,
  description: string,
  technologies: string[],
  imageUrl: string,
  imageAlt: string,
  githubUrl: string,
  siteUrl?: string,
  demoUrl?: string
}

export type Action = 'githubUrl'| 'siteUrl' |'demoUrl'
