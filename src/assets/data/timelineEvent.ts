interface TimelineEvent {
  title: string
  date?: Date
  details?: string
  description?: string
  pictureUrl?: string
}

export const timelineEvents: TimelineEvent[] = [
  {
    title: "Time Series Classification",
    details: "Human Emotion Recognition and Human Activity Recognition",
  },
  {
    title: "Time Series Classification for Human Behavior",
    details: "Process Mining",
  },
  {
    title: "Transfer Learning on Time Series Data",
  },
  {
    title: "Explainable Artificial Intelligence on Time Series Data",
  },
  {
    title: "Federated Learning on Time Series Data",
  },
]
