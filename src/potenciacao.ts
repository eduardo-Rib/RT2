import Calculo from "./calculo";
export default class Potenciacao extends Calculo {
    public calcular(number1: number, number2: number): number {
        return Math.pow(number1, number2);
    }
}