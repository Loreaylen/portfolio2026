import type { ProjectData } from "@/components/Projects/projects.types";
import type { Actions } from "@/types/actions";
import githubIcon from "@/assets/icons/github.png"
import siteIcon from "@/assets/icons/web.svg"
import demoIcon from "@/assets/icons/play.svg"
import ActionLink from "../ActionLink/ActionLink";

const ProjectCard = ({ project, i }: { project: ProjectData; i: number }) => {

  const actions: Actions[] = [
    {
      url: 'githubUrl',
      icon: githubIcon,
      label: 'github'
    },
    {
      url: 'siteUrl',
      icon: siteIcon,
      label: 'site'
    },
    {
      url: 'demoUrl',
      icon: demoIcon,
      label: 'demo'
    }
  ]

  return (
    <article key={i}>
      <div>
        <h3>{project.name}</h3>
        <img src={project.imageUrl} alt={project.imageAlt} />
        <p>{project.description}</p>
      </div>
      <div>
        {
          project.technologies.map((tag: string) => (
            <span key={tag}>{tag}</span>
          ))
        }
      </div>
      <div>
        {
          actions.map((action) => {
            return <ActionLink key={action.label} action={action} url={project[action.url] || null} />
          })
        }
      </div>
    </article>
  )
}

export default ProjectCard;