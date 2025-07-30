import ReactLogo from "../assets/react.svg"

export default function Header() {
  return (
  <header>
    <img src={ReactLogo} alt="ReactLogo" />
    <nav>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>
  );
};