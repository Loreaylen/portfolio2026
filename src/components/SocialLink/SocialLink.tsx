import { useTranslation } from 'react-i18next'
import { type ComponentType, type SVGProps } from 'react'
import githubIcon from '@/assets/icons/github-brands-solid-full.svg?react'
import linkedinIcon from '@/assets/icons/linkedin-in-brands-solid-full.svg?react'
import emailIcon from '@/assets/icons/envelope-solid-full.svg?react'

type Social = "github" | "linkedin" | "email"

interface SocialProps {
  url: string,
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

const SocialLink = ({ socialType }: { socialType: Social}) => {

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

  const SocialIcon = socialData[socialType].icon

  return (
    <a
      className="border-2 rounded-full border-border size-auto p-2"
      href={socialData[socialType].url}
      aria-label={t(socialType)}
      {...socialType !== 'email' ? {rel: 'noopener no-referrer', target: '_blank'} : {}}
    >
      <SocialIcon className='size-8 text-link' />
    </a>
  )
}

export default SocialLink