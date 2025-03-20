"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const soma_1 = __importDefault(require("./soma"));
const subtracao_1 = __importDefault(require("./subtracao"));
const multiplicacao_1 = __importDefault(require("./multiplicacao"));
const divisao_1 = __importDefault(require("./divisao"));
const potenciacao_1 = __importDefault(require("./potenciacao"));
const radiciacao_1 = __importDefault(require("./radiciacao"));
const baskara_1 = __importDefault(require("./baskara"));
const readline_sync_1 = __importDefault(require("readline-sync"));
let continua = true;
do {
    console.log("\nEscolha a operação:");
    console.log("1 - Soma");
    console.log("2 - Subtração");
    console.log("3 - Multiplicação");
    console.log("4 - Divisão");
    console.log("5 - Potenciação");
    console.log("6 - Radiciação");
    console.log("7 - Bhaskara");
    console.log("8 - Sair");
    const operacao = readline_sync_1.default.questionInt("Digite o número da operação desejada: ");
    if (operacao >= 1 && operacao <= 6) {
        const num1 = readline_sync_1.default.questionFloat("Digite o primeiro número: ");
        const num2 = readline_sync_1.default.questionFloat("Digite o segundo número: ");
        let calculo;
        switch (operacao) {
            case 1:
                calculo = new soma_1.default();
                break;
            case 2:
                calculo = new subtracao_1.default();
                break;
            case 3:
                calculo = new multiplicacao_1.default();
                break;
            case 4:
                calculo = new divisao_1.default();
                break;
            case 5:
                calculo = new potenciacao_1.default();
                break;
            case 6:
                calculo = new radiciacao_1.default();
                break;
        }
        if (calculo) {
            console.clear();
            console.log(`Resultado: ${calculo.calcular(num1, num2)}`);
        }
    }
    else if (operacao === 7) {
        const a = readline_sync_1.default.questionFloat("Digite o coeficiente a: ");
        const b = readline_sync_1.default.questionFloat("Digite o coeficiente b: ");
        const c = readline_sync_1.default.questionFloat("Digite o coeficiente c: ");
        const bhaskara = new baskara_1.default();
        console.clear();
        console.log(`\nResultado: ${bhaskara.calcular(a, b, c)}`);
    }
    else if (operacao == 8) {
        continua = false;
    }
    else {
        console.clear();
        console.log("Operação inválida.");
    }
} while (continua === true);
console.clear();
console.log("Programa encerrado.");
