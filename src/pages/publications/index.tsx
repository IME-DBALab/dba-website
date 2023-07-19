import { Layout } from "@/components/templates"
import { ChangeEvent, useState } from "react"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid"
import { publications } from "@/assets/data/publications"
import { Search } from "@/components/Search"

const Publications = () => {
  const [currentPublications, setCurrentPublications] = useState(publications)
  const [currentYear, setCurrentYear] = useState<number>(0)

  const onFilter = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const query = event.target.value.toLowerCase()
    const filteredPublications = publications.filter((publication) => {
      return (
        publication.title.toLowerCase().includes(query) ||
        publication.authors.join(" ").toLowerCase().includes(query)
      )
    })
    setCurrentPublications(filteredPublications)
  }

  return (
    <Layout>
      <h1>Publications</h1>
      <Search
        onChange={onFilter}
        placeholder="Filter by title, author or topic..."
      />
      <div className="mt-5">
        <div className="grid grid-cols-12">
          {currentPublications.map((publication, index) => (
            <div className="col-span-12 mt-3" key={index}>
              <FormattedDate
                date={publication.date}
                previousDate={
                  index > 0 ? currentPublications[index - 1].date : null
                }
              />
              <div className="ml-3">
                <span className="font-bold capitalize">
                  {publication.title}
                </span>
                <br />
                <Authors authors={publication.authors} /> [
                <a href={publication.url} target="_blank" rel="noreferrer">
                  site
                </a>
                ]
              </div>
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
    <span>
      {authors.map((author, index) => (
        <span key={index}>
          {author}
          {index !== authors.length - 1 && ", "}
        </span>
      ))}
    </span>
  )
}

const FormattedDate = ({
  date,
  previousDate,
}: {
  date: Date
  previousDate: Date | null
}) => {
  const isNewYear = previousDate
    ? date.getFullYear() !== previousDate.getFullYear()
    : true

  return isNewYear ? <div className="mt-3">{date.getFullYear()}</div> : null
}
