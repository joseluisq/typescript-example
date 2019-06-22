/** Math API interface */
export interface IMath {
  factorial (n: number): number
}

/** Calculator class API */
export class Calculator implements IMath {

  /** Calculate factorial of one number */
  factorial (n: number) {
    let i = 1
    let total = 1

    while (i <= n) {
      total *= i
      i += 1
    }

    return total
  }

}
