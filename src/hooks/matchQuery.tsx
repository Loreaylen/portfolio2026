import { useState, useEffect } from "react"

const matchQuery = (query: string): boolean => {
const [match, setMatch] = useState<boolean>(false)

useEffect(() => {
const media = window.matchMedia(query)

if(media.matches !== match){
  setMatch(media.matches)
}

const listener = () => setMatch(media.matches)

media.addEventListener("change", listener)

return () => media.removeEventListener("change", listener)
}, [match, query])

return match
} 

export default matchQuery
