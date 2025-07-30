/*
Challenge: Starting from scratch, build and render the
HTML for our section project. Check the Google slide for
what you're trying to build.
We'll be adding more styling to it later.
Hints:
* The React logo is a file in the project tree, so you can
access it by using 'src="react-logo.png"' in your image
element
* You can also set the 'width' attribute of the image element
just like in HTML. In the slide, I have it set to 40px

Content:
Fun facts about React
• Was first released in 2013
• Was originally created by Jordan Walke
• Has well over 100K stars on GitHub
• Is maintained by Meta
• Powers thousands of enterprise apps, including
mobile apps
*/

import "./index.css"
import ReactLogo from "./assets/react.svg"

function App() {
  return (
    <>
      <img src={ReactLogo} alt="React Logo" />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </>
  )
}

export default App