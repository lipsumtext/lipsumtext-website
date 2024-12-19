import Hamburger from "hamburger-react"
import './HamburgerMenu.styles.css'

const MenuItself = () => {
    return <div className="menu-itself">
        <ul className="pages">
            <li>
                <a href=''>
                    About Us
                </a>
            </li>
            <li>
                <a href=''>
                    Our Team
                </a>
            </li>
            <li>
                <a href=''>
                    Projects
                </a>
            </li>
            <li>
                <a href=''>
                    Contact Us
                </a>
            </li>
        </ul>
    </div>
}

export const HamburgerMenu = ({ menuOpen, setMenuOpen }) => {
    return <>
        <div className="hamburger-container">
            <Hamburger 
                color="white"
                toggled={menuOpen}
                toggle={setMenuOpen}
            />
        </div>
        {menuOpen && <MenuItself />}
    </>
}