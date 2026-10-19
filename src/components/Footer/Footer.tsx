import { useTranslation, Trans } from 'react-i18next'

const Footer = () => {

  const { t } = useTranslation('translation', {keyPrefix: 'footer'})

  interface Attribution {
    text: string,
    url: string
  }

  const attributions = t('attributions', { returnObjects: true }) as Array<Attribution>

  return (
    <footer>
      <p>{t('copyright')}</p>
      <h4>{t('attributionsTitle')}</h4>
      <ul>
        {
          attributions.map((item: Attribution) => {
            return (
              <Trans
                parent="li"
                components={{ a: <a href={item.url} referrerPolicy='no-referrer' rel='noopener' target='_blank'/>}}
              >
                {item.text}
              </Trans>
            )
          })
        }
      </ul>
    </footer>
  )
}

export default Footer