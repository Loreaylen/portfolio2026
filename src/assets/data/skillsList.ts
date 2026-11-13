import type { Skill } from "@/types/skills"
import htmlIcon from "/src/assets/icons/html5-brands-solid-full.svg?react"
import cssIcon from "/src/assets/icons/css3-alt-brands-solid-full.svg?react"
import javascriptIcon from "/src/assets/icons/js-brands-solid-full.svg?react"
import typescriptIcon from "/src/assets/icons/typescript-brands-solid-full.svg?react"
import reactIcon from "/src/assets/icons/react-brands-solid-full.svg?react"
import nodeIcon from "/src/assets/icons/node-js-brands-solid-full.svg?react"
import expressIcon from "/src/assets/icons/express.svg?react"
import mysqlIcon from "/src/assets/icons/mysql.svg?react"
import sqlServerIcon from "/src/assets/icons/microsoft-sql-server-logo.svg?react"
import gitIcon from "/src/assets/icons/git-alt-brands-solid-full.svg?react"
import githubIcon from "/src/assets/icons/github-brands-solid-full.svg?react"
import visualStudioCodeIcon from "/src/assets/icons/visual-studio-brands-solid-full.svg?react"
import figmaIcon from "/src/assets/icons/figma-brands-solid-full.svg?react"
import tailwindIcon from "/src/assets/icons/tailwind-css-brands-solid-full.svg?react"


export const skillsList: Skill[] = [
    {
      "name": "HTML",
      "icon": htmlIcon,
      "category": "frontend"
    },
    {
      "name": "CSS",
      "icon": cssIcon,
      "category": "frontend"
    },
    {
      "name": "JavaScript",
      "icon": javascriptIcon,
      "category": "frontend"
    },
    {
      "name": "TypeScript",
      "icon": typescriptIcon,
      "category": "frontend"
    },
    {
      "name": "React",
      "icon": reactIcon,
      "category": "frontend"
    },
    {
      "name": "Node.js",
      "icon": nodeIcon,
      "category": "backend"
    },
    {
      "name": "Express",
      "icon": expressIcon,
      "category": "backend"
    },
    {
      "name": "MySQL",
      "icon": mysqlIcon,
      "category": "database"
    },
    {
      "name": "SQL Server",
      "icon": sqlServerIcon,
      "category": "database"
    },
    {
      "name": "Git",
      "icon": gitIcon,
      "category": "tools"
    },
    {
      "name": "GitHub",
      "icon": githubIcon,
      "category": "tools"
    },
    {
      "name": "Visual Studio Code",
      "icon": visualStudioCodeIcon,
      "category": "tools"
    },
    {
      "name": "Figma",
      "icon": figmaIcon,
      "category": "tools"
    },
    {
      "name": "Tailwind CSS",
      "icon": tailwindIcon,
      "category": "frontend"
    }
  ]