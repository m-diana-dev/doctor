import {Theme} from "./styles/Theme.jsx";
import {useState} from "react";
import {Header} from "./layout/header/Header.jsx";
import {Menu} from "./layout/sections/menu/Menu.jsx";
import {MainBlock} from "./layout/sections/main-block/MainBlock.jsx";
import {Services} from "./layout/sections/services/Services.jsx";
import {Doctors} from "./layout/sections/doctors/Doctors.jsx";
import {Appointment} from "./layout/sections/appointment/Appointment.jsx";
import {About} from "./layout/sections/about/About.jsx";
import {Price} from "./layout/sections/price/Price.jsx";
import {Reviews} from "./layout/sections/reviews/Reviews.jsx";
import {Map} from "./layout/sections/map/Map.jsx";


function App() {
    const menuItems = [
        {title: 'О клинике', dropdown: false},
        {title: 'Услуги', dropdown: true},
        {title: 'Врачи', dropdown: false},
        {title: 'Цены', dropdown: false},
        {title: 'Отзывы', dropdown: false},
        {title: 'Контакты', dropdown: false}
    ]
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
                <Services/>
                <Doctors/>
                <Appointment/>
                <About/>
                <Price/>
                <Reviews/>
                <Map/>
            </Theme>
        </>
    )
}

export default App
