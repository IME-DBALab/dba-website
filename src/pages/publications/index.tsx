import { Layout } from "@/components/templates"
import { ChangeEvent, FormEvent, useState } from "react"
import {
  ArrowTopRightOnSquareIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid"

interface Publication {
  date: Date
  title: string
  url: string
  publication_type:
    | "Journal"
    | "Conference"
    | "Workshop"
    | "Book"
    | "Book Chapter"
    | "Thesis"
    | "Patent"
    | "Other"
  authors: string[]
  tags: string[]
  abstract: string
}

const publications: Publication[] = [
  {
    date: new Date("2023-04-11"),
    title:
      "A Framework for Privacy-Preserved Collaborative Learning in Smart Factory Environment",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-27199-1_42",
    publication_type: "Conference",
    authors: [
      "Ericka Pamela Bermudez Pillado",
      "Tori Bukit",
      "Sean Yonathan Tanjung",
      "Hyun-Woo Lim",
      "Ignatius Iwan",
      "Bernardo Nugroho Yahya",
      "Seok-Lyong Lee",
    ],
    tags: [
      "modular dashboard",
      "federated learning",
      "privacy preserving mechanism",
    ],
    abstract:
      "Integration of artificial intelligence (AI) in a work environment is the key factor of the industry 4.0 revolution. Vertical and horizontal integration among different parties become relevant but privacy could be the issues. Federated learning (FL) has been widely used as a decentralized mechanism to cope with privacy preserving problems. However, the initial setup for FL in the real-world application is difficult and requires a lot of human involvement in daily operation. In addition, project key performance indicator which is important to assess enterprise collaboration accomplishment among partners has been rarely addressed. In this work, we develop a horizontal FL framework and modular dashboard to enable collaborative training among different parties. The module is available for key performance monitoring operational view on both server and clients in three aspects; computer-related indicators, machine learning-related indicators, and manufacturing related indicators. Using the proposed framework, it can provide insight to the user regarding FL results.",
  },
  {
    date: new Date("2022-06-01"),
    title:
      "Federated Domain Adaptation based Human Activity Recognition using FADA and CORAL",
    url: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE11113549",
    publication_type: "Conference",
    authors: ["Ignatius Iwan", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    tags: [
      "federated learning",
      "domain adaptation",
      "domain shift",
      "correlation alignment",
    ],
    abstract:
      " Federated learning has provided a way to collaboratively learn between multiple instances. However, trained machine learning models may not be suitable to new devices. The different activities and devices cause domain shift problem which is referred to different distribution between target and source data. In this work, we identify the problem of federated domain adaptation in classifying human activities through wearable devices and aim to enhance the model performance when the model transferred from source domain  to  target  domain.  We  leverage  adversarial  approach  for  learning  domain  difference  and discrepancy loss through correlation alignment (CORAL) between two domains. Experiment is conducted using different datasets that contain different setting on the same activities.",
  },
]

const Publications = () => {
  const [currentPublications, setCurrentPublications] = useState(publications)

  const onFilter = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const query = event.target.value.toLowerCase()
    const filteredPublications = publications.filter((publication) => {
      return (
        publication.title.toLowerCase().includes(query) ||
        publication.authors.join(" ").toLowerCase().includes(query) ||
        publication.tags.join(" ").toLowerCase().includes(query)
      )
    })
    setCurrentPublications(filteredPublications)
  }

  return (
    <Layout>
      <h1>Publications</h1>
      <Search onChange={onFilter} />
      <div className="mt-5">
        <div className="grid grid-cols-12">
          {currentPublications.map((publication, index) => (
            <div className="col-span-12 mt-5" key={index}>
              <p className="text-lg font-bold capitalize">
                {publication.title} <FormattedDate date={publication.date} />{" "}
                <a href={publication.url} target="_blank" rel="noreferrer">
                  <ArrowTopRightOnSquareIcon className="inline-block w-5 h-5 text-secondary" />
                </a>
              </p>
              <Authors authors={publication.authors} />
              <Abstract abstract={publication.abstract} />
              <Tags tags={publication.tags} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Publications

const Authors = ({ authors }: { authors: string[] }) => {
  return (
    <div>
      {authors.map((author, index) => (
        <span key={index}>
          {author}
          {index !== authors.length - 1 && ", "}
        </span>
      ))}
    </div>
  )
}

const FormattedDate = ({ date }: { date: Date }) => {
  return (
    <span>
      ({date.toLocaleString("eng-us", { month: "long" })}, {date.getFullYear()})
    </span>
  )
}

const Abstract = ({ abstract }: { abstract: string }) => {
  const [showFullAbstract, setShowFullAbstract] = useState(false)
  const toggleShowAbstract = () => setShowFullAbstract(!showFullAbstract)
  const shortAbstract = abstract.slice(0, 200) + "..."
  return (
    <div className="bg-slate-100 text-sm italic text-justify p-5">
      {showFullAbstract ? abstract : shortAbstract}{" "}
      <span
        className="text-secondary underline cursor-pointer"
        onClick={toggleShowAbstract}
      >
        {showFullAbstract ? "Read Less" : "Read More"}
      </span>
    </div>
  )
}

const Tags = ({ tags }: { tags: string[] }) => {
  const getTagColor = (tag: string) => {
    switch (tag) {
      case "federated learning":
        return "bg-blue-100"
      case "privacy preserving mechanism":
        return "bg-green-100"
      case "modular dashboard":
        return "bg-yellow-100"
      case "domain adaptation":
        return "bg-red-100"
      case "domain shift":
        return "bg-purple-100"
      case "correlation alignment":
        return "bg-pink-100"
      default:
        return "bg-gray-100"
    }
  }

  return (
    <div className="flex flex-wrap justify-end mt-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`text-xs text-justify mr-2 p-1 rounded-md ${getTagColor(
            tag
          )}`}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

const Search = ({
  onChange,
}: {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <div>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MagnifyingGlassIcon className="w-5 h-5 text-slate-400" />
        </div>
        <input
          onChange={onChange}
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-slate-300 rounded-lg bg-slate-50"
          placeholder="Filter by title, author or tag..."
        />
      </div>
    </div>
  )
}
