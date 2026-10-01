import type { ProjectData } from "@/types/projects"
import type { Actions } from "@/types/actions"
import { useTranslation } from "react-i18next"


const ActionButton = ({project, action}: {project:ProjectData, action:Actions}) => {

  const { t } = useTranslation(['projects', 'common'])
  const url = project[action.url]
                    if (!url) return null

                    return (
                      <a href={url} target="_blank" aria-label={t(action.label, { ns: 'common' })}>
                        <img src={action.icon} alt="" />
                      </a>
                    )
}

export default ActionButton