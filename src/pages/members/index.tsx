import { Layout } from "@/components/templates"
import {
  alumni,
  currentStudents,
  internStudents,
  capstoneDesignProjects,
  collaborationStudents,
} from "@/assets/data/members"

const Members = () => {
  const groupedStudents = internStudents.reduce((acc, student) => {
    const group = student.group
    if (acc[group]) {
      acc[group].push(student)
    } else {
      acc[group] = [student]
    }
    return acc
  }, {} as { [key: string]: typeof internStudents })

  return (
    <div>
      <Layout>
        <h1>Members</h1>

        <h2 className="mt-5">Alumni</h2>
        <ol className="mt-3">
          {alumni.map((member, index) => (
            <li key={index} className="list-disc">
              {member.name} ({member.type} {member.year})
            </li>
          ))}
        </ol>

        <h2 className="mt-5">Current Students</h2>
        <ol className="mt-3">
          {currentStudents.map((member, index) => (
            <li key={index} className="list-disc">
              {member.name} ({member.type})
            </li>
          ))}
        </ol>

        <h2 className="mt-5">Intern Students</h2>
        <ol className="mt-3">
          {Object.keys(groupedStudents).map((group, index) => (
            <li key={index} className="mt-3">
              <h3 className="text-lg font-bold">{group}</h3>
              <ol className="mt-1">
                {groupedStudents[group].map((student, index) => (
                  <li key={index} className="list-disc">
                    {student.name} ({student.topic})
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>

        <h2 className="mt-5">Capstone Design Advisor</h2>
        <ol className="mt-3">
          {capstoneDesignProjects.map((project, index) => (
            <li key={index} className="list-disc">
              {project.projectName} (
              {project.studentNames &&
                project.studentNames.map((name, index) => (
                  <span key={index}>{name + ", "}</span>
                ))}
              {project.year})
            </li>
          ))}
        </ol>

        <h2 className="mt-5">Collaborator Students</h2>
        <ol className="mt-3">
          {collaborationStudents.map((student, index) => (
            <li key={index} className="list-disc">
              {student.name} ({student.university} ({student.year}/
              {student.month}))
            </li>
          ))}
        </ol>
      </Layout>
    </div>
  )
}

export default Members
