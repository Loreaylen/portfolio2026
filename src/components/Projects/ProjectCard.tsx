import { useTranslation } from "react-i18next";
import { useState } from "react";
import type { ProjectData } from "@/components/Projects/projects.types";
import type { Action } from "@/types/actions";
import githubIcon from "@/assets/icons/github-brands-solid-full.svg"
import siteIcon from "@/assets/icons/web.svg"
import demoIcon from "@/assets/icons/play.svg"
import ActionLink from "../ActionLink/ActionLink";

const ProjectCard = ({ project, i }: { project: ProjectData; i: number }) => {

  const { t } = useTranslation("common")
  const [expanded, setExpanded] = useState<boolean>(false)

  const actions: Action[] = [
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
    <article key={i} className="bg-cards block max-w-sm p-6 border border-border rounded-lg shadow-xs">
      <img className="rounded-md" src={project.imageUrl} alt={project.imageAlt} />
      <h3 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-text-primary">{project.name}</h3>
      <div className="mb-3 flex flex-row flex-wrap gap-1.5">
        {
          project.technologies.map((tag: string) => (
            <span className="text-link border border-link bg-background rounded-full text-sm font-medium px-2.5 py-1.5 text-center" key={tag}>{tag}</span>
          ))
        }
      </div>
      <div className="mb-3">
        <p className={`mb-6 text-text-primary ${expanded ? "line-clamp-none" : "line-clamp-3"}`}>{project.description}</p>
        <span onClick={() => setExpanded(prev => !prev)} className="cursor-pointer text-link">{expanded ? t('less') : t('more')}</span>
      </div>
      <div className="flex flex-row gap-3 items-center justify-start">
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