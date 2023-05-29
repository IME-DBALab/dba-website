import { Layout } from "@/components/templates"
import { ChangeEvent, useState } from "react"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid"
import { publications } from "@/assets/data/publications"
import { Search } from "@/components/Search"
import { Tags } from "@/components/Tags"

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
      <Search
        onChange={onFilter}
        placeholder="Filter by title, author or tag..."
      />
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
