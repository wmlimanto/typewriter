//take a sentence and display it as an animation

const sentence = "hello there from lighthouse labs";

let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay += 50);
}

process.stdout.write('\n');