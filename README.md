## Configurando projeto

### 1. Instalar o Node.js e o TypeScript
Caso ainda não tenha o Node.js instalado, baixe e instale a versão mais recente em:

🔗 https://nodejs.org

Depois, instale o TypeScript globalmente com o comando:

```
npm install -g typescript 
```

Verifique a instalação:

```
tsc -v
```
### 2. Criar o projeto
Crie uma pasta para o projeto e entre nela

Inicialize um projeto Node.js:
```
npm init -y
```
Agora, inicialize o TypeScript para gerar o arquivo tsconfig.json:

```
tsc --init
```

### 3. Configurar a pasta dist
Abra o tsconfig.json e altere estas opções:

```json
"outDir": "./dist",
"rootDir": "./src",
"module": "NodeNext",
"moduleResolution": "NodeNext"
```
Explicação:

* "outDir": "./dist" → Define a pasta onde os arquivos JavaScript compilados serão salvos.

* "rootDir": "./src" → Define a pasta onde os arquivos TypeScript estão localizados.

* "module": "ESNext" → Usa a sintaxe moderna de módulos ES.


### 5. Compilar o código TypeScript
Para compilar e gerar os arquivos .js dentro da pasta dist:

```
tsc
```
Isso criará dist/index.js.

### 6. Rodar o código
Agora, execute o código compilado no Node.js:
```
node dist/main.js
```

### 7, Instalar Readline-sync

Digite o seguinte comando:

```
npm install readline-sync
```

Instale as definições de tipo para readline-sync:

```
npm install --save-dev @types/readline-sync
```