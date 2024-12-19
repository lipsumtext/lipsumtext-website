import Hamburger from "hamburger-react"
import './HamburgerMenu.styles.css'

const MenuItself = ({ setMenuOpen }) => {
    const pages = {
        'About Us': '#',
        'Our Team': '#',
        'Projects': '#',
        'Contact Us': '#'
    }

    return <div className="menu-itself">
        <ul className="pages">
            {Object.entries(pages).map(([page, ref]) => (
                <a href={ref} onClick={() => setMenuOpen(false)}>
                    <li 
                        style={{
                            animation: `fadeFromBottom 0.5s ease 0.${Object.keys(pages).indexOf(page)}s 1 normal backwards`
                        }}
                    >
                        {page}
                    </li>   
                </a>
            ))}
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
        {menuOpen && <MenuItself setMenuOpen={setMenuOpen}/>}
    </>
}