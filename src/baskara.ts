import Calculo from "./calculo";
export default class Bhaskara {
    public calcular(a: number, b: number, c: number): [number, number] | string {
        const delta = b * b - 4 * a * c;
        if (delta < 0) {
            return "Sem raízes reais";
        }
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return [x1, x2];
    }
}