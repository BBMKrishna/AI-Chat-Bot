import readlineSync from "readline-sync";
import { askGemini } from "./gemini";

async function main() {
  console.log("Ask Anything Agent CLI is Ready!");
  console.log("Type 'exit' to quit\n");

  while (true) {
    const input = readlineSync.question("Waiting for You to reply: ");
    if (input.toLowerCase() === "exit") {
        console.log("👋 Goodbye!");
        break
    };

    const reply = await askGemini(input);
    console.log(`🧠AI Agent: ${reply}\n`);
  }
}

main();
