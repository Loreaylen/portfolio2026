import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation('experience')

  const jobs = t('experience', {returnObjects:true}) as Array<Object>

  console.log(jobs[0])

  return(
    <section id="experience">
      {
        jobs.map((job:object, i:number) => (
          <article key={i}>
            <h2>{t('position')}</h2>
            <span></span>
            <ul>
              for()
            </ul>
          </article>
        ) )
      }
    </section>
  )
}

export default Experience