import { useTranslation, Trans } from 'react-i18next'
import Logo from "@/assets/icons/logo.svg?react"


const Footer = () => {

  const { t } = useTranslation('translation', { keyPrefix: 'footer' })

  interface Attribution {
    text: string,
    url: string
  }

  const attributions = t('attributions', { returnObjects: true }) as Array<Attribution>

  return (
    <footer className='bg-background'>
      <div className='p-5 flex justify-between flex-wrap gap-3'>
        <div className='mb-6 md:mb-0 flex flex-row gap-2 w-64 items-center'>
          <Logo className='size-10 text-action' />
          <span className='font-manrope font-semibold uppercase text-2xl text-action'>Aylen Gil</span>
        </div>
        <div className='text-text-primary flex flex-col gap-3'>
          <h4 className='uppercase'>{t('attributionsTitle')}</h4>
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