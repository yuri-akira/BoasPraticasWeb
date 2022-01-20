import { Module } from './module'
import { moveInArray } from './utils'

export class Course {
  private readonly modules: Module[] = []
  public reference: string
  public description: string

  constructor (reference: string, description: string) {
    this.reference = reference
    this.description = description
  }

  add (module: Module): void {
    if (!this.includesModuleWithSameName(module)) {
      this.modules.push(module)
    }
  }

  private includesModuleWithSameName (module: Module): boolean {
    return this.modules.find(mod => mod.name === module.name) !== undefined
  }

  includes (module: Module): boolean {
    return this.modules.includes(module)
  }

  position (module: Module): number {
    const moduleInCourse = this.modules.find(mod => mod.name === module.name)
    if (moduleInCourse === undefined) {
      return undefined
    }
    return this.modules.indexOf(moduleInCourse) + 1
  }

  move (lecture: Module, to: number): void {
    if (to > this.modules.length || to < 1) {
      return
    }
    const from = this.position(lecture)
    moveInArray(this.modules, from - 1, to - 1)
  }

  get numberOfModules (): number {
    return this.modules.length
  }
}
