import AnswerModel from "./answer";

export default class QuestionModel {
  #id: number;
  #statement: string;
  #answers: AnswerModel[];
  #acertou: boolean;

  constructor(
    id: number,
    statement: string,
    answers: AnswerModel[],
    acertou: boolean
  ) {
    this.#id = id;
    this.#statement = statement;
    this.#answers = answers;
    this.#acertou = acertou;
  }

  get id() {
    return this.#id;
  }
  get statement() {
    return this.#statement;
  }
  get answers() {
    return this.#answers;
  }
  get acertou() {
    return this.#acertou;
  }
  get respondida() {
    for (let answer of this.#answers) {
      if (answer.revelada) return true;
    }
    return false;
  }
}
