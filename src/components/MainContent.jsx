import ReactLogo from "../assets/react.svg"

export default function MainContent() {
    return (
        <main>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created bh Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            {/* <img src={ReactLogo} alt="React Logo" /> */}
        </main>
    )
}