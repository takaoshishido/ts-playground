import chalk from "chalk";
import figlet from "figlet";
import readlinePromises from "readline/promises";
import rawData from "./data/questions.test.json";

type Color = "red" | "green" | "yellow" | "white";

interface Question {
  word: string;
  hint: string;
}

interface UserInterface {
  // 回答者の入力を受け取る
  input(): Promise<string>;
  // ターミナル画面のクリア
  clear(): void;
  // 実行時以降の入力を受け付けないようにする
  destroy(): void;
  // メッセージを出力する
  output(message: string, color?: string): void;
  // 解答状況を大きく表示する
  outputAnswer(message: string): void;
}

class Quiz {
  questions: Question[];
  constructor(questions: Question[]) {
    this.questions = questions;
  }
  hasNext(): boolean {
    return this.questions.length > 0;
  }
  getNext(): Question {
    // 0以上、配列の長さ以下のランダムな整数を生成
    const idx = Math.floor(Math.random() * this.questions.length);
    // idx を使って、questions配列から1つの問題を削除
    const [question] = this.questions.splice(idx, 1);
    return question;
  }
  lefts(): number {
    return this.questions.length;
  }
}

const questions: Question[] = rawData;
const quiz = new Quiz(questions);

// readlinePromisesインターフェイスのインスタンスを作成
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
    // Bigフォントを使用して、アスキーアートのメッセージを表示
    console.log(figlet.textSync(message, { font: "Big" }), "\n");
  },
};

// 確認用関数
async function testQuestion() {
  CLI.clear();
  const userInput = await CLI.input();
  console.log(userInput);
  CLI.outputAnswer("generic");
  console.log(chalk.green("正解!!"));
  CLI.destroy();
}

testQuestion();
