import readlinePromises from "readline/promises";

import chalk from "chalk";
import figlet from "figlet";

import UserInterface from "../interfaces/UserInterface";

const rl = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const CLI: UserInterface = {
  async input() {
    const input = await rl.question("文字または単語を推測してください: ");
    return input.replaceAll(" ", "").toLowerCase();
  },
  clear() {
    console.clear();
  },
  destroy() {
    rl.close();
  },
  output(message: string, color: Color = "white") {
    console.log(chalk[color](message), "\n");
  },
  outputAnswer(message: string) {
    console.log(figlet.textSync(message, { font: "Big" }), "\n");
  },
};

export default CLI;
