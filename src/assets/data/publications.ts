interface Publication {
  date: Date
  title: string
  url?: string
  authors: string[]
  pdfUrl?: string
}

const publications: Publication[] = [
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
    date: new Date("2016-09-01"),
    title:
      "An Effective Threshold Based Measurement Techinque for Fall Detection using Smart Devices",
    url: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE07017901",
    authors: ["Sunder Ali Khowaja", "Feri Setiawan", "Aria Ghora Prabono", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    }, 
  {
    date: new Date("2016-11-01"),
    title:
      "Citizen-driven public service improvement using process mining",
    url: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE07060154",
    authors: ["Feri Setiawan", "Bernardo Nugroho Yahya"],
    },
  {
    date: new Date("2017-11-01"),
    title:
      "Towards Anomaly Detection System using Wearable Sensors",
    url: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE07060154",
    authors: ["Aria Ghora Prabono", "Feri Setiawan", "Sunder Ali Khowaja", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2017-12-01"),
    title:
      "Hierarchical Classification Method Based on Selective Learning of Slacked Hierarchy for Activity Recognition System",
    url: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE07060154",
    authors: ["Sunder Ali Khowaja", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2017-12-01"),
    title:
      "ETL Workflow Design for Analyzing Relationship of Empathy and Social Awareness using Socio-Emotion Data",
    url: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE07060154",
    authors: ["Aria Ghora Prabono", "Feri Setiawan", "Sunder Ali Khowaja", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2018-01-01"),
    title:
      "A Verification Approach for Human Behavior Modeling",
    authors: ["Feri Setiawan", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2018-01-01"),
    title:
      "Improving Human Activity Recognition Model with Limited Labeled Data using Multitask Semi-Supervised Learning",
    authors: ["Aria Ghora Prabono", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2018-04-01"),
    title:
      "A Machine Learning-based Approach on The Automatic Sensor Event Abstraction for Process Model Discovery",
    authors: ["Aria Ghora Prabono", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2018-04-01"),
    title:
      "A New Framework for Predicting Activities using LocoAct Relationships",
    authors: ["Sunder Ali Khowaja", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2018-7-01"),
    title:
      "Imrpoved Behavior Model Based on Sequential Rule Mining",
    authors: ["Feri Setiawan", "Bernardo Nugroho Yahya"],
    },
  {
    date: new Date("2018-7-23"),
    title:
      "A Framework for Real Time Emotion Recognition Based on Human ANS using Pervasive Device",
    authors: ["Feri Setiawan", "Sunder Ali Khowaja", "Aria Ghora Prabono", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2018-11-01"),
    title:
      "Predictive Analysis on Limited Data: A Case Study of Transportation Processes",
    authors: ["Feri Setiawan", "Bernardo Nugroho Yahya"],
    },
  {
    date: new Date("2018-11-01"),
    title:
      "Multitask Semi-supervised Learning for Human Activity Recognition",
    authors: ["Aria Ghora Prabono", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2018-11-09"),
    title:
      "Contextual Activity Based Healthcare Internet of Things, Services, and People (HIoTSP): An architectural framework for healthcare monitoring using wearable sensors",
    authors: ["Sunder Ali Khowaja", "Aria Ghora Prabono", "Feri Setiawan", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2019-01-01"),
    title:
      "Trace Clustering Exploration for Detecting Sudden Drift: A case study in logistic process",
    authors: ["Frans Prathama", "Bernardo Nugroho Yahya", "Danny Darmawan Harjono", "ER Mahendrawathi"],
    },
  {
    date: new Date("2019-07-01"),
    title:
      "Context-based Similarity Measure on Human Behavior Pattern Analysis",
    authors: ["Aria Ghora Prabono","Seok-Lyong Lee","Bernardo Nugroho Yahya"],
    },
  {
    date: new Date("2019-08-01"),
    title:
      "Deep Activity Recognition Model on Imaging Sensor Data",
    authors: ["Feri Setiawan","Bernardo Nugroho Yahya","Seok-Lyong Lee"],
    },
  {
    date: new Date("2019-11-01"),
    title:
      "Hyperparameter Optimization using Random Search and Asynchronous Successive Halving for Human Activity Recognition",
    authors: ["Wenny Franciska Senjaya", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2019-11-01"),
    title:
      "Analysis Framework for Discovering Multiple Case Perspective Human Behavior Model",
    authors: ["Frans Prathama", "Bernardo Nugroho Yahya"],
    },
  {
    date: new Date("2020-10-06"),
    title:
      "Fine-grained emotion recogntion: fusion of physiological signals and facial expressions on spontaneous emotion corpus",
    authors: ["Feri Setiawan", "Aria Ghora Prabono", "Sunder Ali Khowaja", "Wangsoo Kim", "Kyoungsoo Park", "Bernardo Nugroho Yahya", "Seok-Lyong Lee", "Jin Pyo Hong"],
    },
  {
    date: new Date("2020-11-01"),
    title:
      "Automated RULA for a sequenece of activities based on sensor data",
    authors: ["Wenny Franciska Senjaya", "Frans Prathama", "Feri Setiawan", "Aria Ghora Prabono", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2020-12-01"),
    title:
      "CAPHAR: Context-aware Personalized Human Activity Recognition using associative learning in smart environments",
    authors: ["Sunder Ali Khowaja", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2021-01-01"),
    title:
      "Hybrid Domain Adaptation with Deep Network Architecture for End-to-end Cross-domain Human Activity Recognition",
    authors: ["Aria Ghora Prabono", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2021-02-01"),
    title:
      "Atypical sample Regularizer Autoencoder for Cross-domain Human Activity Recognition",
    authors: ["Aria Ghora Prabono", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2021-02-01"),
    title:
      "Toward soft real-time stress detection using wrist-worn devices for human workspaces",
    authors: ["Sunder Ali Khowaja", "Aria Ghora Prabono", "Feri Setiawan", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2021-02-01"),
    title:
      "Personalized recommendation by matrix co-factorization with multiple implicit feedback on pairwise comparison",
    authors: ["Frans Prathama", "Wenny Franciska Senjaya", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2021-07-12"),
    title:
      "A multi-case persepective analytical framework for discovering human daily behavior from sensors using process mining",
    authors: ["Frans Prathama", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2021-11-01"),
    title:
      "Hybrid domain adaptation for sensor-based human activity recognition in a heterogeneous setup with feature commonalities",
    authors: ["Aria Ghora Prabono", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2021-11-01"),
    title:
      "Cascaded and Recursive ConvNets (CRCNN): An effective and flexible approach for image denoising",
    authors: ["Sunder Ali Khowaja", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2021-11-01"),
    title:
      "Ergonomics Risk Assessment with a Hybrid Neural Network Architecture",
    authors: ["Wenny Franciska Senjaya", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2022-06-01"),
    title:
      "Sequential inter-hop graph convolutional neural network (SIhGCN) for skeleton-based human action recognition",
    url: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE11113549",
    authors: ["Feri Setiawan", "Bernardo Nugroho Yahya", "Seok-Ju Chun", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2022-06-01"),
    title:
      "Federated Domain Adaptation based Human Activity Recognition using FADA and CORAL",
    url: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE11113549",
    authors: ["Ignatius Iwan", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2022-08-01"),
    title:
      "Multiple-instance domain adaptation for cost-effective sensor-based human activity recognition",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-27199-1_42",
    authors: ["Aria Ghora Prabono", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2022-10-20"),
    title:
      "A Framework for Privacy-Preserved Collaborative Learning in Smart Factory Environment",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-27199-1_42",
    authors: ["Ericka Pamela Bermudez Pillado", "Tori Bukit", "Sean Yonathan Tanjung", "Hyun-Woo Lim", "Ignatius Iwan", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2022-11-17"),
    title:
      "Sensor-Based Motion Tracking System Evaluation for RULA in Assembly Task",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-27199-1_42",
    authors: ["Wenny Franciska Senjaya", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
  {
    date: new Date("2023-03-06"),
    title:
      "Normalized Attention Inter-Channel Pooling (NAIP) for Deep Convolutional Neural Network Regularization",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-27199-1_42",
    authors: ["Feri Setiawan", "Bernardo Nugroho Yahya", "Seok-Lyong Lee"],
    },
]

export { publications }
export type { Publication }
