import "../style/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Wild Séries</h1>
      <ul className="bar">
        <li>Catégories</li>
        <li>Acteurs</li>
        <li>Mes favoris</li>
      </ul>
    </nav>
  );
};

export default Navbar;
