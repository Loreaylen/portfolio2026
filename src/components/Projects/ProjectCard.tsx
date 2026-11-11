import { useTranslation } from "react-i18next";
import { useState } from "react";
import type { ProjectData } from "@/components/Projects/projects.types";
import type { Action } from "@/types/actions";
import githubIcon from "@/assets/icons/github-brands-solid-full.svg?react"
import siteIcon from "@/assets/icons/web.svg?react"
import demoIcon from "@/assets/icons/play.svg?react"
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
    <article key={i} className="bg-cards block max-w-sm shadow-md shadow-border rounded-lg relative overflow-hidden">
      <img className="mask-b-from-50% mask-b-to-100% " src={project.imageUrl} alt={project.imageAlt} />
      <h3 className="px-5 py-2 text-2xl font-semibold tracking-tight text-text-primary">{project.name}</h3>
      <div className="px-5 mb-3 flex flex-row flex-wrap gap-1.5">
        {
          project.technologies.map((tag: string) => (
            <span className="text-link border border-link bg-background rounded-xl text-sm font-medium px-2.5 py-0.5 text-center" key={tag}>{tag}</span>
          ))
        }
      </div>
      <div className="px-5 mb-3">
        <p className={`mb-6 text-text-primary ${expanded ? "line-clamp-none" : "line-clamp-3"}`}>{project.description}</p>
        <span onClick={() => setExpanded(prev => !prev)} className="cursor-pointer text-link transition-all hover:text-cyan-500 active:text-action-active">{expanded ? t('less') : t('more')}</span>
      </div>
      <div className="px-5 pb-3 flex flex-row gap-3 items-center justify-start">
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