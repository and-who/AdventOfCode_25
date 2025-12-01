import { readRelative, readLines } from '../common/fileImporter';

const main = (): void => {
  const input = readRelative(__dirname, 'input.txt');
  const lines = readLines(input);

  let part1 = 0;
  let part2 = 0;

  const dialNumbers = 100;

  let dial = 50;

  lines.forEach((line) => {
    console.log(`Turn: ${dial} do ${line}`);
    let delta = parseInt(line.slice(1));
    let newDial = dial;

    if (line.startsWith('L')) {
      delta = delta * -1;
    } 

    const steps = Math.abs(delta);
    let t0: number;
    if (delta >= 0) {
      t0 = dial === 0 ? dialNumbers : (dialNumbers - dial);
    } else {
      t0 = dial === 0 ? dialNumbers : dial;
    }
    const hits = steps >= t0 ? 1 + Math.floor((steps - t0) / dialNumbers) : 0;
    if (hits > 0) {
      part2 += hits;
      console.log(`\t*** Passing 0: ${part2} (times ${hits})`);
    }

    newDial = (dial + delta);


    dial = ((newDial % dialNumbers) + dialNumbers) % dialNumbers;
    if(dial === 0) {
      part1++;
      console.log(`\t### Ends at Zeros: ${part1}`)
    }
    console.log(`TurnResult: ${delta} --> ${dial}`);
    console.log('----');

  });



  console.log('Part 1:', part1);
  console.log('Part 2:', part2);
};

main();
