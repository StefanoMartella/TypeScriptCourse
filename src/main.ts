function add(first: number, second: number): number;
function add(first: number, second: number, third: number): number;
function add(first: number, second: number, third?: number): number {
  if (third !== undefined) {
    return first + second + third;
  }
  return first + second;
}

add(1, 2);
add(1, 2, 4);
