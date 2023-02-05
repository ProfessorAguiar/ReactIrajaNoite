import LogoJS from '../assets/javascript.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from './NavBar.module.css'
import { Link } from 'react-router-dom';
function NavBar() {
  return (
      <Navbar bg="dark" variant="dark" className={style.barra}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={LogoJS}
              width="30"
              height="30"
              className="d-inline-block align-top"
              style={{marginRight:40}}
            />
            Projeto React
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav><Link to={"/"} className={style.links}>Home</Link></Nav>
            <Nav><Link to={"/tarefas"} className={style.links}>Tarefas</Link></Nav>
            <Nav><Link to={"/contato"} className={style.links}>Contato</Link></Nav>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar