import { timelineEvents } from "@/assets/data/timelineEvent"

export const TimeLine = ({ className }: { className?: string }) => {
  return (
    <ol
      className={`relative border-l border-gray-200 dark:border-gray-700 ${className}`}
    >
      {timelineEvents.map((event, index) => (
        <li key={index} className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {event.date?.toLocaleDateString() ?? ""}
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {event.title}
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            {event.details}
          </p>
        </li>
      ))}
    </ol>
  )
}
