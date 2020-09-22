setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   '); 
}, 700);

// ... fill in the rest yourself ...
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\   '); 
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1700);

setTimeout(() => {
  process.stdout.write('\n');
}, 1900);

// const spinner = () => {
//   const loader = ["|", "/", "-", "\\"];
//   let timer = 100;
//   let showLoader = true;
//   let loaderCount = 0;
//   while (showLoader === true) {
//     for (let i = 0; i < loader.length; i++) {
//       setTimeout(() => {
//         if (i === loader.length - 1 && loaderCount === 3) process.stdout.write(`\r${loader[i]}\n`);
//         process.stdout.write(`\r${loader[i]}`);
//       }, timer);
//       timer += 200;
//     }
//     loaderCount++;
//     if (loaderCount === 3) showLoader = false;
//   }
// }

// spinner();