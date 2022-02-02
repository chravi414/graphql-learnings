const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 >= num2 ? num1 - num2 : num2 - num1;
};

export { add as default, subtract };
