import type { Actions } from "@/types/actions"
import { useTranslation } from "react-i18next"


const ActionLink = ({ action, url }: { action: Actions, url: string | null }) => {

  const { t } = useTranslation(['projects', 'common'])
  if (!url) return null

  return (
    <a href={url} target="_blank" rel='noopener' referrerPolicy="no-referrer" aria-label={t(action.label, { ns: 'common' })}>
      <img src={action.icon} alt="" />
    </a>
  )
}

export default ActionLink