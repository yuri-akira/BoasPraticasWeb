import { Course, Module, Lecture } from '../../src/entities'

describe('Course', () => {
  it('should be able to add lectures to modules', () => {
    const module = new Module('Fundamentals')

    const lecture: Lecture = {
      description: 'Branching'
    }

    module.add(lecture)
    expect(module.lectures.length).toBe(1)
    expect(module.lectures.includes(lecture)).toBeTruthy()
  })

  it('should be able to add modules to courses', () => {
    const course = new Course('azure-devops',
      'Continuous Delivery and DevOps with Azure DevOps: Source Control with Git')
    const module = new Module('Fundamentals')

    const lecture: Lecture = {
      description: 'Branching'
    }

    module.add(lecture)
    course.add(module)

    expect(course.modules.length).toBe(1)
    expect(course.modules.includes(module)).toBeTruthy()
  })
})
