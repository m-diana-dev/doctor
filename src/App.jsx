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
import {Footer} from "./layout/footer/Footer.jsx";
import {Sale} from "./layout/modals/sale/Sale.jsx";
import {Callback} from "./layout/modals/callback/Callback.jsx";


function App() {
    // Массив пунктов меню для всего сайта, title - заголовок, link - якорь для прокрутки к определенному блоку
    const menuItems = [
        {title: 'О клинике', dropdown: false, link: '#about'},
        {title: 'Услуги', dropdown: true, link: '#services'},
        {title: 'Врачи', dropdown: false, link: '#doctors'},
        {title: 'Цены', dropdown: false, link: '#price'},
        {title: 'Отзывы', dropdown: false, link: '#reviews'},
        {title: 'Контакты', dropdown: false, link: '#contacts'}
    ]

    // Сосотояние для мобильного меню сайта, используем хук useState из React
    // Когда состояние false меня закрыто, когда true - открыто
    const [openMenu, setOpenMenu] = useState(false)

    // Функция обратного вызова (callback-функция) для изменения состояния Меню
    const isMenuOpenCallback = (isMenuOpen) => {
        setOpenMenu(isMenuOpen)
    }

    // Сосотояние для Модяльного окна со скидкой, используем хук useState из React
    // Когда состояние false - закрыто, когда true - открыто
    const [openSale, setOpenSale] = useState(true)

    // Функция обратного вызова (callback-функция) для изменения состояния Модяльного окна со скидкой
    const isSaleOpenCallback = (isSaleOpen) => {
        setOpenSale(isSaleOpen)
    }

    // Сосотояние для Модяльного окна с формой, используем хук useState из React
    // Когда состояние false - закрыто, когда true - открыто
    const [openForm, setOpenForm] = useState(false);


    // Функция обратного вызова (callback-функция) для изменения состояния Модяльного окна с формой
    const isFormOpenCallback = (isFormOpen) => {
        setOpenForm(isFormOpen);
    };

    //Рендерим, отрисовываетм страницы сайта. Они обурнуты в Theme - компонент, который содержит ThemeProvider, GlobalStyle из styled-components, в котором определены основные стили сайта
    return (
        <>
            <Theme isMenuOpen={openMenu || openSale || openForm}>
                <Sale isSaleOpenCallback={isSaleOpenCallback} openSale={openSale}/>
                <Callback openForm={openForm} isFormOpenCallback={isFormOpenCallback}/>
                <Header isMenuOpenCallback={isMenuOpenCallback} openMenu={openMenu} menuItems={menuItems}
                        isFormOpenCallback={isFormOpenCallback} openForm={openForm}/>
                <Menu menuItems={menuItems}/>
                <MainBlock/>
                <Services/>
                <Doctors/>
                <Appointment/>
                <About/>
                <Price/>
                <Reviews/>
                <Map/>
                <Footer menuItems={menuItems}/>
            </Theme>
        </>
    )
}

export default App
