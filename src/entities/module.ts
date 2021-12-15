import { Lecture } from './lecture'

export class Module {
  readonly lectures: Lecture[] = []
  private readonly name: string
  constructor (name: string) {
    this.name = name
  }

  add (lecture: Lecture): void {
    this.lectures.push(lecture)
  }
}
