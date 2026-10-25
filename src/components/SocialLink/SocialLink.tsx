import { useTranslation } from 'react-i18next'
import githubIcon from '@/assets/icons/github.png'
import linkedinIcon from '@/assets/icons/linkedin.png'
import emailIcon from '@/assets/icons/gmail.png'

type Social = "github" | "linkedin" | "email"

interface SocialProps {
  url: string,
  icon: string
}

const SocialLink = ({ socialType, className }: { socialType: Social, className: string }) => {

  const { t } = useTranslation('common')

  const socialData: Record<Social, SocialProps> = {
    linkedin: {
      url: "https://www.linkedin.com/in/lorena-aylen-gil",
      icon: linkedinIcon
    },
    github: {
      url: "https://github.com/Loreaylen",
      icon: githubIcon
    },
    email: {
      url: "mailto:lorenaaylengil@gmail.com",
      icon: emailIcon
    }
  }

  return (
    <a
      className={className}
      href={socialData[socialType].url}
      aria-label={t(socialType)}
      {...socialType !== 'email' ? {rel: 'noopener no-referrer', target: '_blank'} : {}}
    >
      <img src={socialData[socialType].icon} alt="" />
    </a>
  )
}

export default SocialLink