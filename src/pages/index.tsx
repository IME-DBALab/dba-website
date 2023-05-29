import { Layout } from "@/components/templates"
import {
  ChevronDoubleRightIcon,
  NewspaperIcon,
} from "@heroicons/react/24/solid"

interface New {
  date: string
  title: string
  url?: string
}

const newsList: New[] = [
  {
    date: "2023.05.30",
    title: "현우's thesis defense",
    url: "/",
  },
  {
    date: "2023.05.25",
    title: "SIU Conference due date",
    url: "https://siu2023.itu.edu.tr/bildiri-formati-eng.html",
  },
]

const Home = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p className="mt-5 text-justify">
        The Data and Business Analytics Lab of the HUFS IME department is
        dedicated to leveraging data and driving technological advancements in
        the field of artificial intelligence (AI), with a specific emphasis on
        assisting manufacturing companies. Our primary objective lies in
        harnessing sensor data for various applications, while remaining
        adaptable and eagerly seeking opportunities to expand the implementation
        of AI in the industrial sector.
      </p>
      <h2 className="mt-5 flex items-center">
        <NewspaperIcon className="h-7 w-7" /> News
      </h2>
      <div className="w-full bg-gray-100 p-5 rounded-sm">
        <ul>
          {newsList.map((news, index) => (
            <li key={index}>
              <a href={news.url} target="_blank">
                <div className="flex items-center text-gray-700 underline underline-offset-2 mb-1">
                  <ChevronDoubleRightIcon className="h-4 w-4 text-gray-500" />
                  {news.date} {news.title}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default Home
