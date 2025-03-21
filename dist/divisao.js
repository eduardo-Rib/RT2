"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculo_1 = __importDefault(require("./calculo"));
class Divisao extends calculo_1.default {
    calcular(number1, number2) {
        if (number2 === 0) {
            throw new Error("Divisão por zero não é permitida.");
        }
        return number1 / number2;
    }
}
exports.default = Divisao;
