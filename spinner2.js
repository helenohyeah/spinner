const spinner = () => {
  const spinner = [
    '\r|   ',
    '\r/   ',
    '\r-   ',
    '\r\\   ',
    '\r|   ',
    '\r/   ',
    '\r-   ',
    '\r\\   ',
    '\r|   \n',
  ];
  let timer = 100;
  let i = 0;

  while (timer < 1701) {
    setTimeout(() => {
      process.stdout.write(`${spinner[i]}`);
      i++;
    }, timer);
    timer += 200;
  }
};

spinner();