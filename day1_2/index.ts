import { open } from "node:fs/promises";

const FILE_PATH = "./day1_2/input";

async function main() {
  const arr1: number[] = [];
  const arr2: number[] = [];
  const map: Record<number, number> = {};

  const data = await open(FILE_PATH);
  for await (const line of data.readLines()) {
    const [first, second] = line.split("   ");
    arr1.push(Number(first));
    arr2.push(Number(second));
  }

  arr1.forEach((num1) => {
    const repetitions = arr2.filter((num2) => num1 === num2).length;
    if (repetitions <= 0) return;
    if (Object.keys(map).includes(num1.toString()))
      map[num1] += num1 * repetitions;
    else map[num1] = num1 * repetitions;
  });

  const result = Object.keys(map).reduce((prev, actual) => {
    return prev + map[Number(actual)];
  }, 0);

  console.log(`Final result: ${result}`);
}

main();
