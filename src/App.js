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
