function power2(param: string | number): number {
  if (typeof param === "string") {
    return Number(param) * Number(param);
  }
  return param * param;
}

console.log(power2(10));
console.log(power2("9"));
