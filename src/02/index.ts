import { readRelative, readLines } from '../common/fileImporter';

const main = (): void => {
  const input = readRelative(__dirname, 'input.txt');
  const lines = readLines(input);

  let part1 = 0;
  let part2 = 0;

  const ranges = lines[0].split(',').map((range) => {
    return range.split('-');
    
  });

  // Part 1
  ranges.forEach((range) => {
    const [min, max] = range.map(Number);

    let testHalfNumberMax = 10**(Math.ceil(range[1].length / 2));

    console.log(range, { testHalfNumberMax }, {min, max});
    for (let i = 1; i <= testHalfNumberMax; i++) {
      const testNumber = Number(`${i}${i}`);
      if (testNumber >= min && testNumber <= max) {
        console.log(`${i}${i} is valid`);
        part1 += testNumber;
      }
    }    
  });

  console.log('-------- Part 2 -------');
  // Part 2
  ranges.forEach((range) => {
    const [min, max] = range.map(Number);

    let maxDigits = Math.ceil(range[1].length / 2);
    let testHalfNumberMax = 10**(maxDigits);

    const invalidIdsMap = new Map<number, number>();

    console.log(range, { testHalfNumberMax, maxDigits }, {min, max});
    for (let i = 1; i <= testHalfNumberMax; i++) {
      for (let j = 2; j <= maxDigits+1; j++) {
        const testNumberString = i.toString().repeat(j);
        const testNumber = Number(testNumberString);
        if (testNumber >= min && testNumber <= max) {
          invalidIdsMap.set(testNumber, testNumber);
        }

      }
    }   
    
    invalidIdsMap.forEach((value, key) => {
      console.log(`${key} is invalid`);
      part2 += key;
    });
  });

  console.log('Part 1:', part1);
  console.log('Part 2:', part2);
};

main();
