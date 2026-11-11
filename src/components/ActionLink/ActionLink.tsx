import type { Action } from "@/types/actions"
import { useTranslation } from "react-i18next"


const ActionLink = ({ action, url }: { action: Action, url: string | null }) => {

  const { t } = useTranslation(['projects', 'common'])
  if (!url) return null

  const Icon = action.icon

  return (
    <a 
    href={url} 
    target="_blank" 
    rel='noopener' 
    referrerPolicy="no-referrer" 
    aria-label={t(action.label, { ns: 'common' })}
    className=" focus:outline-action active:scale-95
    hover:-translate-y-0.5
    transition-all"
    >
      <Icon className="rounded-full size-11 text-cards bg-action hover:bg-action-hover transition-all ease-in-out-[0.3s]
      active:shadow-[0_2px_10px_var(--color-text-secondary)]" />
    </a>
  )
}

export default ActionLink