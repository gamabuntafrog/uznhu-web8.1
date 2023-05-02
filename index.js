function Accounting(code, fullName, salary, childrensCount, expirience) {
  return {
    code,
    fullName,
    salary,
    childrensCount,
    expirience,
    getInfo() {
      const info = {
        code: this.code,
        fullName: this.fullName,
        salary: this.salary,
        childrensCount: this.childrensCount,
        expirience: this.expirience,
      };

      alert(JSON.stringify(info));
    },
  };
}

const buch1 = new Accounting(
  319,
  "Kyrylenko Yaroslav Yaroslavovich",
  10000,
  0,
  30
);

console.log(buch1.getInfo());

function DAI(code, fullNameOfOwner, mark, carNumber, color) {
  return {
    code,
    fullNameOfOwner,
    mark,
    carNumber,
    color,
    getInfo() {
      const info = {
        code: this.code,
        fullNameOfOwner: this.fullNameOfOwner,
        mark: this.mark,
        carNumber: this.carNumber,
        color: this.color,
      };

      alert(JSON.stringify(info));
    },
  };
}

const dai1 = new DAI(
  428,
  "Yaroslav Kyrylenko Yaroslavovich",
  "BMW",
  "AO4838AK",
  "green"
);

console.log(dai1.getInfo());

function Enterpise(code, title, workersCount, branch, adresses) {
  return {
    code,
    title,
    workersCount,
    branch,
    adresses,
    getInfo() {
      const info = {
        code: this.code,
        title: this.title,
        workersCount: this.workersCount,
        branch: this.branch,
        adresses: this.adresses,
      };

      alert(JSON.stringify(info));
    },
  };
}

const enterpise1 = new Enterpise(3932, "Flex", 32, "Metalurgy", [
  "Fskdj kdsjff sdkjsdk",
  "Fkdsjfjsfd FKsdkj FKdsd j139",
]);

console.log(enterpise1.getInfo());
