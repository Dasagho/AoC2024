import { open } from "node:fs/promises";

const FILE_PATH = "./day1/input";

async function main() {
  const arr1: number[] = [];
  const arr2: number[] = [];

  const data = await open(FILE_PATH);
  for await (const line of data.readLines()) {
    const [first, second] = line.split("   ");
    arr1.push(Number(first));
    arr2.push(Number(second));
  }

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  const result = arr1.reduce((prev, current, index) => {
    return prev + Math.abs(current - arr2[index]);
  }, 0);

  console.log(`Final result: ${result}`);
}

main();
