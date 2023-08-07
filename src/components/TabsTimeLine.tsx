import { timelineEvents } from "@/assets/data/timelineEvent"
import { useState } from "react"

export const TabsTimeLine = () => {
  const [activeTab, setActiveTab] = useState<number>(5)

  const handleClick = (tab: number) => {
    setActiveTab(tab)
  }

  const TabsContent = (tab: number) => {
    switch (tab) {
      case 1:
        return <TimeSeriesClassification />
      case 5:
        return <FederatedLearning />
      default:
        return <></>
    }
  }

  return (
    <div className="grid grid-cols-12 gap-4 border-b-2">
      {/* tabs */}
      <div className="col-span-4 flex flex-col">
        <Tab tab={1} activeTab={activeTab} handleClick={handleClick} />
        <Tab tab={2} activeTab={activeTab} handleClick={handleClick} />
        <Tab tab={3} activeTab={activeTab} handleClick={handleClick} />
        <Tab tab={4} activeTab={activeTab} handleClick={handleClick} />
        <Tab tab={5} activeTab={activeTab} handleClick={handleClick} />
      </div>
      {/** content */}
      <div className="col-span-8">{TabsContent(activeTab)}</div>
    </div>
  )
}

interface TabProps {
  tab: number
  activeTab: number
  handleClick: (tab: number) => void
}

const Tab = ({ tab, activeTab, handleClick }: TabProps) => {
  return (
    <div
      className={`border-b-2 cursor-pointer ${
        activeTab === tab ? "bg-secondary text-white" : "bg-slate-100"
      } w-full h-10 flex justify-center items-center font-title`}
      onClick={() => handleClick(tab)}
    >
      Step {tab}
    </div>
  )
}

const TimeSeriesClassification = () => {
  return (
    <>
      <h2>Time Series Classification</h2>
      <h3>Human Emotion Recognition and Human Activity Recognition</h3>
    </>
  )
}

const FederatedLearning = () => {
  return (
    <>
      <h2>Federated Learning on Time Series Data</h2>
      <p>
        Federated Learning on Time Series Data is an innovative machine learning
        approach that enables collaborative model training on decentralized data
        sources without sharing raw data. Time series data, characterized by
        sequential data points over time, finds applications in various fields
        like finance, healthcare, and industry. With Federated Learning, models
        are trained locally on each device using their respective time series
        data, and only model updates are shared with a central server, ensuring
        data privacy and security.
      </p>
    </>
  )
}
