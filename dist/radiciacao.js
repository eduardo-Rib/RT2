"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculo_1 = __importDefault(require("./calculo"));
class Radiciacao extends calculo_1.default {
    calcular(number1, number2) {
        if (number1 < 0) {
            throw new Error("Não é possível calcular a raiz de um número negativo.");
        }
        return Math.pow(number1, 1 / number2);
    }
}
exports.default = Radiciacao;
