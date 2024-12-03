import { open } from "node:fs/promises";

const FILE_PATH = "./day2/input";

async function main() {
  const data = await open(FILE_PATH);
  let safeReports = 0;
  for await (const line of data.readLines()) {
    safeReports += analyzeReport(line.split(" ").map((el) => Number(el)));
  }

  console.log(`Safe report count: ${safeReports}`);
}

function analyzeReport(report: number[]): number {
  let isIncreasing = false;
  let isDecreasing = false;

  for (let i = 1; i < report.length; i++) {
    const prevLevel = report[i - 1];
    const level = report[i];
    const levelDiff = Math.abs(prevLevel - level);

    if (prevLevel <= level) isIncreasing = true;
    if (prevLevel >= level) isDecreasing = true;
    if (levelDiff < 1 || levelDiff > 3 || (isDecreasing && isIncreasing))
      return 0;
  }
  return 1;
}

main();
