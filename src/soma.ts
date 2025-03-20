import Calculo from "./calculo";
export default class Soma extends Calculo {
    public calcular(number1: number, number2: number): number {
        return number1 + number2;
    }
}