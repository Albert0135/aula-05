# Configurando o React com Reactstrap

## Objetivos

- Configurar o projeto React para usar o Reactstrap.
- Começar a usar componentes Reactstrap no aplicativo.
- Fazer o commit das alterações no repositório.

---

## Passo 1: Instalar Reactstrap e Bootstrap

Abra o terminal na raiz do projeto React e execute o seguinte comando para instalar o Reactstrap e o Bootstrap:

```npm install reactstrap bootstrap```

Em seguida, importe o Bootstrap no arquivo principal do projeto (index.js ou App.js):

```import 'bootstrap/dist/css/bootstrap.min.css';```

---

## Passo 2: Adicionar uma Barra de Navegação

Abra o arquivo `App.js` na pasta `src` e substitua o conteúdo dentro do componente `<header>` para incluir uma barra de navegação. Use o código abaixo:

```javascript
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div className="App">
              <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            <div>Aluno: Albert França</div>
          </div>
        </Navbar>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
```

O código define um componente React chamado `App`, que cria uma interface com uma barra de navegação simples utilizando a biblioteca **reactstrap** e estilos personalizados. Abaixo estão os principais pontos:

---

## **1. Barra de Navegação (Navbar)**

A barra de navegação usa o componente `<Navbar>` do **reactstrap**, que é baseado no **Bootstrap**, com as seguintes características:

- **Tema escuro** (`dark`) e **cor primária** (`color="primary"`).
- Contém:
  - Um **título clicável** (`NavbarBrand`) com o texto **"Ristorante Con Fusion"**, que redireciona para a página inicial (`href="/"`).
  - Um texto adicional: **"Aluno: Albert França"**, exibido dentro do navbar.

---

## **2. Estrutura e Estilização**

- A barra de navegação está dentro de um container responsivo (`<div className="container">`), o que garante que ela se ajuste bem a diferentes tamanhos de tela.
- Todo o conteúdo do componente é envolvido por uma `<div className="App">`, que usa estilos definidos no arquivo CSS importado (`App.css`).

---

## **3. Área de Cabeçalho (`<header>`)**

- Um `<header>` vazio com a classe `App-header` é reservado para futuras funcionalidades ou conteúdos adicionais.

---

## **4. Importações e Exportação**

- **Importações:**
  - O arquivo de imagem `logo.svg` e o arquivo de estilos `App.css`.
  - Componentes do **reactstrap** (`Navbar` e `NavbarBrand`).

- **Exportação:**
  - O componente `App` é exportado para ser usado em outros arquivos do projeto.

---

## **Funcionamento Geral**

- Ao rodar, o aplicativo renderiza:
  - Uma barra de navegação simples com:
    - O nome do restaurante fictício: **"Ristorante Con Fusion"**.
    - Uma identificação: **"Aluno: Albert França"**.
- A estrutura é modular e utiliza o estilo responsivo e pré-configurado do **Bootstrap**.
- O código pode ser facilmente expandido para incluir menus, botões ou outras funcionalidades.

## Resultado do Codigo

![alt text](<Captura de tela 2024-11-21 203602.png>)
