const Tags = ({ tags }: { tags: string[] }) => {
  const getTagColor = (tag: string) => {
    switch (tag) {
      case "federated learning":
        return "bg-blue-100"
      case "privacy preserving mechanism":
        return "bg-green-100"
      case "modular dashboard":
        return "bg-yellow-100"
      case "domain adaptation":
        return "bg-red-100"
      case "domain shift":
        return "bg-purple-100"
      case "correlation alignment":
        return "bg-pink-100"
      case "supervised learning":
        return "bg-purple-100"
      case "fault detection":
        return "bg-orange-100"
      default:
        return "bg-gray-100"
    }
  }

  return (
    <div className="flex flex-wrap justify-end mt-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`text-xs text-justify mr-2 p-1 rounded-md ${getTagColor(
            tag.toLocaleLowerCase()
          )}`}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

export { Tags }
