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

Após esta alteração, seu aplicativo exibirá uma barra de navegação simples usando componentes do Reactstrap.

![alt text](<Captura de tela 2024-11-21 203602.png>)
