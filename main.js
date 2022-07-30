class PoppinBottles {
  constructor(dollars) {
    this.bottles = Math.floor(dollars / 2);
    this.caps = Math.floor(dollars / 2);
    this.totalBottles = Math.floor(dollars / 2);
    this.earnedFromBottleRecycle = 0;
    this.earnedFromCapRecycle = 0;
  }

  exchange() {
    const bottles = this.bottles;
    const caps = this.caps;
    this.totalBottles += this.getBottlesFromEmptyBottles(bottles) + this.getBottlesFromCaps(caps);
    this.bottles = bottles % 2 + this.getBottlesFromEmptyBottles(bottles) + this.getBottlesFromCaps(caps);
    this.caps = caps % 4 + this.getBottlesFromEmptyBottles(bottles) + this.getBottlesFromCaps(caps);
    this.earnedFromBottleRecycle += this.getBottlesFromEmptyBottles(bottles);
    this.earnedFromCapRecycle += this.getBottlesFromCaps(caps);
  }

  getBottlesFromEmptyBottles(bottles) {
    return Math.floor(bottles / 2);
  }

  getBottlesFromCaps(caps) {
    return Math.floor(caps / 4);
  }
}

const exchangeBottles = (poppinBottles) => {
  while (poppinBottles.bottles > 1 || poppinBottles.caps > 3) {
    poppinBottles.exchange();
  }

  return poppinBottles;
};

const displayResult = (poppinBottles) => {
  console.log(`
TOTAL BOTTLES: ${poppinBottles.totalBottles}
REMAINING BOTTLES: ${poppinBottles.bottles}
REMAINING CAPS: ${poppinBottles.caps}
TOTAL EARNED:
  BOTTLES: ${poppinBottles.earnedFromBottleRecycle}
  CAPS: ${poppinBottles.earnedFromCapRecycle}
`);
};

const poppinBottles = (argv) => {
  if (!argv || Number.isNaN(Number(argv))) {
    return;
  }
  const bottles = new PoppinBottles(Number(argv));
  exchangeBottles(bottles);
  displayResult(bottles);

  return bottles;
};

const argv = process.argv[2];
poppinBottles(argv);


module.exports = poppinBottles;
