import {Theme} from "./styles/Theme.jsx";
import {useState} from "react";
import {Header} from "./layout/header/Header.jsx";
import {Menu} from "./layout/sections/menu/Menu.jsx";
import {MainBlock} from "./layout/sections/main-block/MainBlock.jsx";


function App() {
    const menuItems = ['О клинике', 'Услуги', 'Врачи', 'Цены', 'Отзывы', 'Контакты']
    const [openMenu, setOpenMenu] = useState(false)
    const isMenuOpenCallback = (isMenuOpen) => {
        setOpenMenu(isMenuOpen)
    }

    return (
        <>
            <Theme isMenuOpen={openMenu}>
                <Header isMenuOpenCallback={isMenuOpenCallback} openMenu={openMenu} menuItems={menuItems}/>
                <Menu menuItems={menuItems}/>
                <MainBlock/>
            </Theme>
        </>
    )
}

export default App
