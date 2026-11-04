import type { Action } from "@/types/actions"
import { useTranslation } from "react-i18next"


const ActionLink = ({ action, url }: { action: Action, url: string | null }) => {

  const { t } = useTranslation(['projects', 'common'])
  if (!url) return null

  return (
    <a 
    href={url} 
    target="_blank" 
    rel='noopener' 
    referrerPolicy="no-referrer" 
    aria-label={t(action.label, { ns: 'common' })}
    className="size-12 rounded-full hover:outline-2 hover:outline-offset-2 hover:outline-link focus:outline-2 focus:outline-offset-2 focus:outline-action active:bg-text-secondary"
    >
      <img src={action.icon} alt="" />
    </a>
  )
}

export default ActionLink