interface MyFunction {
  (param1: string, param2: number[], param3: (a: number) => boolean): void;
}

const myFunction: MyFunction = function (param1, param2, param3) {
  return;
};

myFunction("Valore", [1, 2, 3], (a) => a > 3);
