import { useTranslation, Trans } from 'react-i18next'
import Logo from "@/assets/icons/logo.svg?react"


const Footer = () => {

  const { t } = useTranslation('translation', { keyPrefix: 'footer' })

  interface Attribution {
    text: string,
    url: string
  }

  const attributions: Attribution[] = [
  {
    "text": "<a>Font Awesome</a>",
    "url": "https://fontawesome.com/"
  },
  {
    "text": "<a>Simple Icons</a>",
    "url": "https://simpleicons.org/"
  },
  {
    "text": "<a>SVG Repo</a>",
    "url": "https://www.svgrepo.com/"
  }
]

  return (
    <footer className='bg-background border-t border-border'>
      <div className='p-5 flex justify-between flex-wrap gap-3'>
        <div className='mb-6 md:mb-0 flex flex-row gap-2 w-64 items-center'>
          <Logo className='size-10 text-action' />
          <span className='font-manrope font-semibold uppercase text-2xl text-action'>Aylen Gil</span>
        </div>
        <div className='text-text-primary flex flex-col gap-3'>
          <h4 className='uppercase font-bold'>{t('attributionsTitle')}</h4>
          <ul className='flex flex-col gap-1'>
            {
              attributions.map((item: Attribution) => {
                return (
                  <Trans
                    parent="li"
                    components={{ a: <a href={item.url} referrerPolicy='no-referrer' rel='noopener' target='_blank' /> }}
                  >
                    {item.text}
                  </Trans>
                )
              })
            }
          </ul>
        </div>
      </div>

      <p className='text-center py-5 border-t border-border text-text-secondary'>{t('copyright')}</p>
    </footer>
  )
}

export default Footer