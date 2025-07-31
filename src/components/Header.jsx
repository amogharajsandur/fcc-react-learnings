import ReactLogo from "../assets/react.svg"

export default function Header() {
    return (
        <header>
            <nav>
                <img src={ReactLogo} alt="React Logo" />
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}