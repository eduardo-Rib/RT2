import Soma from "./soma";
import Subtracao from "./subtracao";
import Multiplicacao from "./multiplicacao";
import Divisao from "./divisao";
import Potenciacao from "./potenciacao";
import Radiciacao from "./radiciacao";
import Bhaskara from "./baskara";
import readline from "readline-sync";

let continua = true

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
    
    const operacao = readline.questionInt("Digite o número da operação desejada: ");

    if (operacao >= 1 && operacao <= 6) {
        const num1 = readline.questionFloat("Digite o primeiro número: ");
        const num2 = readline.questionFloat("Digite o segundo número: ");

        let calculo;
        switch (operacao) {
            case 1:
                calculo = new Soma();
                break;
            case 2:
                calculo = new Subtracao();
                break;
            case 3:
                calculo = new Multiplicacao();
                break;
            case 4:
                calculo = new Divisao();
                break;
            case 5:
                calculo = new Potenciacao();
                break;
            case 6:
                calculo = new Radiciacao();
                break;
        }

        if (calculo) {
            console.clear();
            console.log(`Resultado: ${calculo.calcular(num1, num2)}`);
        }
    } else if (operacao === 7) {
        const a = readline.questionFloat("Digite o coeficiente a: ");
        const b = readline.questionFloat("Digite o coeficiente b: ");
        const c = readline.questionFloat("Digite o coeficiente c: ");
        const bhaskara = new Bhaskara();
        console.clear();
        console.log(`\nResultado: ${bhaskara.calcular(a, b, c)}`);
    } else if (operacao == 8){
        continua = false
    } else {
        console.clear();
        console.log("Operação inválida.");
    }

}while (continua === true)

console.clear();
console.log("Programa encerrado.");