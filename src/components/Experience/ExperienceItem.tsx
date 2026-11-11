import type { ExperienceData } from "./experience.types"

const ExperienceItem = ({job}: {job: ExperienceData}) => {

  return(
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-action-glow rounded-full mt-1.5 -left-1.5 border border-buffer border-none shadow-action-glow shadow-[0px_0px_20px_2px]"></div>
        <time className="text-sm font-normal leading-none text-body text-text-primary px-2 py-0.5 rounded-md bg-cards/15 border border-border">{job.period}</time>
        <h3 className="text-lg font-semibold text-heading my-2 text-text-primary">{job.position} - {job.company} </h3>
        <ul className="mb-4 text-base font-normal text-body text-text-primary">
              {
                job.responsibilities.map((bullet, i) =>
                  <li key={i}>{bullet}</li>)
              }
            </ul>
    </li>
  )
}
export default ExperienceItem