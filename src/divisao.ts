import Calculo from "./calculo";
export default class Divisao extends Calculo {
    public calcular(number1: number, number2: number): number {
        if (number2 === 0) {
            throw new Error("Divisão por zero não é permitida.");
        }
        return number1 / number2;
    }
}