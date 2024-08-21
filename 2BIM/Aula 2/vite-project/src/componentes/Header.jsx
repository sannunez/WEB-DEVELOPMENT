import { Link } from "react-router-dom";

function Header() {
    return (
        <>
        <header>
            <h1>Meu Site</h1>
            <nav>
                <ul>
                    <li><Link to="">Home</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/servicos">Serviços</Link></li>
                    <li><Link to="/contatos">Contato</Link></li>
                </ul>
            </nav>
            </header>       
        </>
      );
}

export default Header;