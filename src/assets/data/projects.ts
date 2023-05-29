interface Project {
  name: string
  url: string
  tags: string[]
  description: string
  isPublic: boolean
  stack: string[]
}

const projects = [
  {
    name: "FL4Industry",
    url: "https://github.com/IME-DBALab/FL4Industry",
    tags: ["Federated Learning", "Supervised Learning", "Fault Detection"],
    description:
      "This project aims to generalize the federated learning framework for industrial applications.",
    isPublic: false,
    stack: ["Python", "Flower"],
  },
]

export { projects }
export type { Project }
