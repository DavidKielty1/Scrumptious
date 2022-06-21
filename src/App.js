import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>Scrumptious</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    margin: 0rem 1rem;
    padding: 1rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 4rem 0rem;
  }

  svg {
    font-size: 2rem;
    @media (max-width: 768px) {
      font-size: 1.65rem;
    }
  }
`;
export default App;
