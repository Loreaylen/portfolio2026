import { useTranslation } from 'react-i18next'
import { type ComponentType, type SVGProps } from 'react'
import githubIcon from '@/assets/icons/github-brands-solid-full.svg?react'
import linkedinIcon from '@/assets/icons/linkedin-in-brands-solid-full.svg?react'
import emailIcon from '@/assets/icons/envelope-solid-full.svg?react'

type Social = "github" | "linkedin" | "email"

interface SocialProps {
  name: string
  url: string,
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

const SocialLink = ({ socialType }: { socialType: Social}) => {

  const { t } = useTranslation('common')

  const socialData: Record<Social, SocialProps> = {
    linkedin: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/lorena-aylen-gil",
      icon: linkedinIcon
    },
    github: {
      name: "Github",
      url: "https://github.com/Loreaylen",
      icon: githubIcon
    },
    email: {
      name: "Email",
      url: "mailto:lorenaaylengil@gmail.com",
      icon: emailIcon
    }
  }

  const SocialIcon = socialData[socialType].icon

  return (
    <a
      className="border rounded-lg border-border w-30 h-12 p-2 flex flex-row gap-1 justify-center items-center hover:animate-pulse512 transition-all active:scale-95 active:shadow-[0_0_0_4px_greenyellow]"
      href={socialData[socialType].url}
      aria-label={t(socialType)}
      {...socialType !== 'email' ? {rel: 'noopener no-referrer', target: '_blank'} : {}}
    >
      <SocialIcon className='size-8 text-link' />
      <span className='text-link font-bold'>{socialData[socialType].name}</span>
    </a>
  )
}

export default SocialLink