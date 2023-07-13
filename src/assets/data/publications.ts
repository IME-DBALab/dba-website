interface Publication {
  date: Date
  title: string
  url: string
  authors: string[]
}

const publications: Publication[] = [
  {
    date: new Date("2023-04-11"),
    title:
      "A Framework for Privacy-Preserved Collaborative Learning in Smart Factory Environment",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-27199-1_42",
    authors: ["Ericka Pamela Bermudez Pillado", "Tori Bukit", "Sean Yonathan Tanjung", "Hyun-Woo Lim", "Ignatius Iwan", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2022-06-01"),
    title:
      "Federated Domain Adaptation based Human Activity Recognition using FADA and CORAL",
    url: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE11113549",
    authors: ["Ignatius Iwan", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2016-06-01"),
    title:
      "Online Human Action Recognition Framework Based on Wearable Sensors",
    url: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE07017532",
    authors: ["Feri Setiawan", "Aria Ghora Prabono", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2016-06-01"),
    title:
      "Evaluation of Features for classifying low-level human activities on larger datasets",
    url: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE07017901",
    authors: ["Sunder Ali Khowaja", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2016-11-01"),
    title:
      "Citizen-driven public service improvement using process mining",
    url: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE07060154",
    authors: ["Feri Setiawan", "Bernardo Nugroho Yahya"],
    },
  {
    date: new Date("2017-12-01"),
    title:
      "ETL Workflow Design for Analyzing Relationship of Empathy and Social",
    url: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE07060154",
    authors: ["Aria Ghora Prabono", "Feri Setiawan", "Sunder Ali Khowaja", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
]

export { publications }
export type { Publication }
