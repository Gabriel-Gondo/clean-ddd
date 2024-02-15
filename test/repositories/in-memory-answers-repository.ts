import { AnswersRepository } from '@/domain/forum/aplication/repositories/anwswers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

export class InMemoryAnswersRepository implements AnswersRepository {
  public items: Answer[] = []

  async create(question: Answer) {
    this.items.push(question)
  }
}
