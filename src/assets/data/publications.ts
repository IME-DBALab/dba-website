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

export { publications }
export type { Publication }
