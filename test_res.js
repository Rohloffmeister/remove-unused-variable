const test = (a, b, c) => {
  console.log(a, c);
};

const test1 = ({ a, c }) => {
  console.log(a, c);
};

const test2 = ({ a, b, c, d }, ccc) => {
  console.log(ccc);

};

test2();
test1({ a: 123 });

test(a);