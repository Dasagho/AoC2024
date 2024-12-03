import { open } from "node:fs/promises";

const FILE_PATH = "./day2/input";

async function main() {
  const data = await open(FILE_PATH);
  let safeReports = 0;
  // for await (const line of data.readLines()) {
  //   safeReports += analyzeReport(line.split(" ").map((el) => Number(el)));
  // }

  const array = [
    [7, 6, 4, 2, 1],
    [1, 2, 7, 8, 9],
    [9, 7, 6, 2, 1],
    [1, 3, 2, 4, 5],
    [8, 6, 4, 4, 1],
    [1, 3, 6, 7, 9],
  ];

  array.forEach((arr) => {
    console.log(arr, analyzeReport(arr));
  });

  console.log(`Safe report count: ${safeReports}`);
}

function analyzeReport(report: number[]): number {
  let isIncreasing = false;
  let isDecreasing = false;
  let unsafeLevel = 0;

  for (let i = 1; i < report.length; i++) {
    const prevLevel = report[i - 1];
    const level = report[i];
    const levelDiff = Math.abs(prevLevel - level);

    if (prevLevel < level) isIncreasing = true;
    if (prevLevel > level) isDecreasing = true;
    if ((isDecreasing && isIncreasing) || levelDiff < 1 || levelDiff > 3) {
      isDecreasing = false;
      isIncreasing = false;
      report.splice(i, 1);
      i--;
      unsafeLevel++;
    }
    if (unsafeLevel > 1) return 0;
  }

  return 1;
}

main();
