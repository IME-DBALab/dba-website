interface Alumni {
  name: string
  type: "PhD" | "Master" | "Bachelor" | "Master-PhD"
  year: number
}

export const alumni: Alumni[] = [
  {
    name: "Sunder Ali Khowaja",
    type: "PhD",
    year: 2018,
  },
  {
    name: "Aria Ghora Prabono",
    type: "Master-PhD",
    year: 2021,
  },
  {
    name: "Feri Setiawan",
    type: "Master-PhD",
    year: 2021,
  },
  {
    name: "Frans Prathama",
    type: "Master",
    year: 2021,
  },
  {
    name: "Wenny Franciska Senjaya",
    type: "PhD",
    year: 2023,
  },
  {
    name: "임현우",
    type: "Master",
    year: 2023,
  },
]

interface CurrentStudent {
  name: string
  type: "PhD" | "Master" | "Bachelor" | "Master-PhD"
}

export const currentStudents: CurrentStudent[] = [
  {
    name: "Ignatius Iwan",
    type: "Master-PhD",
  },
  {
    name: "Tori Andika Bukit",
    type: "PhD",
  },
  {
    name: "Ericka Bermudez",
    type: "Master",
  },
  {
    name: "Sean Yonathan Tanjung",
    type: "Master",
  },
]

interface InternStudents {
  group: string
  name: string
  topic: string
}

export const internStudents: InternStudents[] = [
  {
    group: "(2019 - 2023)",
    name: "김미선",
    topic: "Time Series Regression and Classification",
  },
  {
    group: "(2019 - 2023)",
    name: "김나연",
    topic: "Federated Learning for Smart Factory",
  },
  {
    group: "(2019 - 2023)",
    name: "양윤석",
    topic: "Federated Learning for Smart Factory",
  },
  {
    group: "(2019 - 2023)",
    name: "신용",
    topic: "Federated Learning for Smart Factory",
  },
  {
    group: "(2019 - 2023)",
    name: "김찬",
    topic: "Federated Learning for Smart Factory",
  },
  {
    group: "(2019 - 2023)",
    name: "신수연",
    topic: "Federated Learning for HAR",
  },
  {
    group: "(2019 - 2023)",
    name: "김수정",
    topic: "Federated Learning for HAR",
  },
  {
    group: "(2019 - 2023)",
    name: "이가영",
    topic: "Time Series for Bike Sharing Systems",
  },
  {
    group: "(2019 - 2023)",
    name: "얌희정",
    topic: "Time Series Classification",
  },
  {
    group: "(2019 - 2023)",
    name: "유하준",
    topic: "Recommender System",
  },
  {
    group: "(2014 - 2015)",
    name: "임대빈",
    topic: "Process Mining on Smart Manufacturing System",
  },
  {
    group: "(2014 - 2015)",
    name: "방찬규",
    topic: "Process Mining on Smart Manufacturing System",
  },
  {
    group: "(2014 - 2015)",
    name: "최우식",
    topic: "Process Mining on Smart Manufacturing System",
  },
  {
    group: "(2014 - 2015)",
    name: "안창",
    topic: "Process Mining on Smart Manufacturing System",
  },
  {
    group: "(2014 - 2015)",
    name: "김상기",
    topic: "Process Mining on Smart Manufacturing System",
  },
  {
    group: "(2014 - 2015)",
    name: "한서현",
    topic: "Process Mining on Smart Manufacturing System",
  },
]

interface CapstoneDesignProject {
  projectName: string
  studentNames?: string[]
  year: number
}

export const capstoneDesignProjects: CapstoneDesignProject[] = [
  {
    projectName: "Emergency Response System with Multimodal Learning",
    studentNames: ["강현우", "유하준", "김지원"],
    year: 2023,
  },
  {
    projectName: "Human Activity Recognition on CamStudy",
    studentNames: ["신수연", "김수정", "이가영", "김가연"],
    year: 2021,
  },
  {
    projectName: "Personalized AI Chatbot for Education",
    studentNames: ["이승준", "김민우", "김성진"],
    year: 2020,
  },
  {
    projectName: "Transfer Learning for Homestay Price Suggestion",
    studentNames: ["성지현", "이지연", "임진경"],
    year: 2019,
  },
  {
    projectName: "용인시 재활용 폐기물 수거차량 경로 재설정",
    studentNames: ["박병완"],
    year: 2018,
  },
  {
    projectName: "추천시스템을 이용한 산업공학 뉴스피드 서비스",
    year: 2017,
  },
  {
    projectName: "㈜부원공업 야적장 레이아웃 최적화와 재고관리 시스템",
    year: 2015,
  },
  {
    projectName: "Travel Recommendation for Tourist",
    year: 2014,
  },
]

interface CollaborationStudent {
  name: string
  year: number
  month: number
  university: string
}

export const collaborationStudents: CollaborationStudent[] = [
  {
    name: "Muhammad Tayyab",
    year: 2018,
    month: 12,
    university: "Hanyang University",
  },
  {
    name: "Waqas Ahmed",
    year: 2018,
    month: 12,
    university: "Hanyang University",
  },
  {
    name: "Mehran Ullah",
    year: 2018,
    month: 12,
    university: "Hanyang University",
  },
  {
    name: "Muhammad Imran",
    year: 2018,
    month: 12,
    university: "Hanyang University",
  },
  {
    name: "Seongjun Kim",
    year: 2018,
    month: 12,
    university: "Hanyang University",
  },
  {
    name: "Asif Iqbal",
    year: 2018,
    month: 12,
    university: "Hanyang University",
  },
  {
    name: "Muhammad Omair",
    year: 2018,
    month: 10,
    university: "Hanyang University",
  },
  {
    name: "Waqas Iqbal",
    year: 2018,
    month: 5,
    university: "Hanyang University",
  },
  {
    name: "Salman Habib",
    year: 2017,
    month: 12,
    university: "Hanyang University",
  },
]
