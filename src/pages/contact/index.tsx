import { Layout } from "@/components/templates"
import { ChangeEvent, useState } from "react"

const Contact = () => {
  return (
    <div>
      <Layout>
        <h1>Contact</h1>
        <p className="mt-5">
          For any inquires, please reach out to:{" "}
          <a
            className="text-secondary underline"
            href="mailto:bernardo@hufs.ac.kr"
          >
            bernardo@hufs.ac.kr
          </a>
          (Professor Bernardo Nugroho Yahya)
        </p>
        <br />
        <p>
          경기도 용인시 처인구 모현읍 왕산리 884 한국외국어대학교, 공학관
          (Hankuk University of Foreign Studies, Engineering Building) Business
          Idea Lab/Data and Business Analytics Lab, Room 317 Republic of Korea
        </p>
      </Layout>
    </div>
  )
}

export default Contact
