import Question from "../interfaces/Question";

export default class Stage {
  answer: string;
  leftAttempts: number = 5;
  question: Question;
  constructor(question: Question) {
    this.question = question;
    this.answer = new Array(question.word.length).fill("_").join("");
  }

  updateAnswer(userInput: string = ""): void {
    if (!userInput) return;

    const regex = new RegExp(userInput, "g");
    const answerArray = this.answer.split("");

    let matches: RegExpExecArray | null;

    while ((matches = regex.exec(this.question.word))) {
      const foundIdx = matches.index;
      answerArray.splice(foundIdx, userInput.length, ...userInput);

      this.answer = answerArray.join("");
    }
  }

  isTooLong(userInput: string): boolean {
    return userInput.length > this.question.word.length;
  }

  isIncludes(userInput: string): boolean {
    return this.question.word.includes(userInput);
  }

  isCorrect(): boolean {
    return this.answer === this.question.word;
  }

  decrementAttempts(): number {
    return --this.leftAttempts;
  }

  isGameOver(): boolean {
    return this.leftAttempts === 0;
  }
}
