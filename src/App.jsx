import { useState } from "react"
import { BaseContainer } from "./components/BaseContainer/BaseContainer"
import { HamburgerMenu } from "./components/HamburgerMenu/HamburgerMenu"
import { Greeter } from "./pages/Greeter/Greeter"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  console.log(menuOpen)

  return (
    <>
      <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <BaseContainer>
        <Greeter />
      </BaseContainer>
    </>
  )
}

export default App
