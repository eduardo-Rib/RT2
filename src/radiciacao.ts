import Calculo from "./calculo";
export default class Radiciacao extends Calculo {
    public calcular(number1: number, number2: number): number {
        if (number1 < 0) {
            throw new Error("Não é possível calcular a raiz de um número negativo.");
        }
        return Math.pow(number1, 1 / number2);
    }
}