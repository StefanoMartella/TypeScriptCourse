let a: any = 1;
const b = "somevalue";
const c = true;
a = false;
const e: number[] = [1, 2, 4];
const f: any[] = ["1", "2", "3"];
f.push(4);
const g: [number, number, string] = [1, 3, "3"];

const h: (a: number, b: number[]) => number[] = function (
  param1: number,
  param2: number[]
): number[] {
  return [...param2, param1];
};

console.log(b);
console.log(c);
console.log(a);
console.log(e);
console.log(g);
console.log(h);
