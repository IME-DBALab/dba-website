import { Layout } from "@/components/templates"
import { projects } from "@/assets/data/projects"
import type { Project } from "@/assets/data/projects"
import Link from "next/link"
import GithubLogo from "@/assets/github_logo.webp"
import Image from "next/image"

const Projects = () => {
  return (
    <Layout>
      <h1>Projects</h1>
      <p className="mt-5">
        Please{" "}
        <Link className="text-secondary underline" href="/contact">
          contact us
        </Link>{" "}
        if you are interested in our private projects.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Layout>
  )
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="border-2 border-slate-200 p-3 mt-5 rounded-md">
      <div className="text-lg font-bold flex justify-between bg-">
        {project.name}
        <span className="font-normal text-xs border border-slate-200 p-1 px-2 rounded-md">
          {project.isPublic ? "Public" : "Private"}
        </span>
      </div>
      <p>{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-2 text-sm">
        {project.stack.map((stack) => (
          <div key={stack} className="flex items-center">
            <StackCircle stack={stack} />
            {stack}
          </div>
        ))}
      </div>
      <a href={project.url} target="_blank" rel="noreferrer">
        <div className="flex items-center mt-2 py-1 bg-[#1B1F23] text-white text-lg rounded-md justify-center">
          <Image src={GithubLogo} alt="Github Logo" className="h-5 w-5 mr-1" />
          Github
        </div>
      </a>
    </div>
  )
}

const StackCircle = ({ stack }: { stack: string }) => {
  const getStackColor = (stack: string) => {
    switch (stack) {
      case "React":
        return "bg-cyan-500"
      case "Flower":
        return "bg-pink-500"
      case "Django":
        return "bg-teal-500"
      case "Python":
        return "bg-emerald-500"
      default:
        return "bg-gray-500"
    }
  }
  return (
    <div className={`h-2 w-2 rounded-full mr-1 ${getStackColor(stack)}`}></div>
  )
}

export default Projects
