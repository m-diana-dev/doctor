import {Theme} from "./styles/Theme.jsx";
import {useReducer, useState} from "react";
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
import {ServicesModal} from "./layout/modals/services/ServicesModal.jsx";
import {servicesModalReducer, toggleServicesModalAC} from "./state/services-modal-reducer.jsx";


function App() {
    // Массив пунктов меню для всего сайта, title - заголовок, link - якорь для прокрутки к определенному блоку
    const menuItems = [
        {id: 1, title: 'О клинике', link: '#about'},
        {id: 2, title: 'Услуги', link: '#services'},
        {id: 3, title: 'Врачи', link: '#doctors'},
        {id: 4, title: 'Цены', link: '#price'},
        {id: 5, title: 'Отзывы', link: '#reviews'},
        {id: 6, title: 'Контакты', link: '#contacts'}
    ]

    // Сосотояние для мобильного меню сайта, используем хук useState из React
    // Когда состояние false меня закрыто, когда true - открыто
    const [openMenu, setOpenMenu] = useState(false)

    // Функция обратного вызова (callback-функция) для изменения состояния Меню
    const isMenuOpenCallback = (isMenuOpen) => {
        setOpenMenu(isMenuOpen)
    }

    // Сосотояние для Модального окна со скидкой, используем хук useState из React
    // Когда состояние false - закрыто, когда true - открыто
    const [openSale, setOpenSale] = useState(true)

    // Функция обратного вызова (callback-функция) для изменения состояния Модяльного окна со скидкой
    const isSaleOpenCallback = (isSaleOpen) => {
        setOpenSale(isSaleOpen)
    }

    // Сосотояние для Модального окна с формой, используем хук useState из React
    // Когда состояние false - закрыто, когда true - открыто
    const [openForm, setOpenForm] = useState(false);


    // Функция обратного вызова (callback-функция) для изменения состояния Модяльного окна с формой
    const isFormOpenCallback = (isFormOpen) => {
        setOpenForm(isFormOpen);
    };

    // Сосотояние для Модального окна с формой, используем хук useState из React
    // Когда состояние false - закрыто, когда true - открыто
    // const [openServices, setOpenServices] = useState(false);

    // Сосотояние для Модального окна услуг, используем хук useReducer из React
    const [servicesModalData, dispatchServicesModalData] = useReducer(servicesModalReducer, {
        open: false,
        title: '',
        list: []
    });

    // Функция обратного вызова (callback-функция) для изменения состояния Модяльного окна с формой
    const isServicesOpenCallback = (isServicesOpen) => {
        dispatchServicesModalData(toggleServicesModalAC(isServicesOpen));
    };

    //Рендерим, отрисовываетм страницы сайта. Они обурнуты в Theme - компонент, который содержит ThemeProvider, GlobalStyle из styled-components, в котором определены основные стили сайта
    return (
        <>
            <Theme isMenuOpen={openMenu || openSale || openForm || servicesModalData.open}>
                <Sale isSaleOpenCallback={isSaleOpenCallback} openSale={openSale}/>
                <Callback openForm={openForm} isFormOpenCallback={isFormOpenCallback}/>
                <ServicesModal title={servicesModalData.title} list={servicesModalData.list} openServices={servicesModalData.open}
                               isServicesOpenCallback={isServicesOpenCallback}/>
                <Header isMenuOpenCallback={isMenuOpenCallback} openMenu={openMenu} menuItems={menuItems}
                        isFormOpenCallback={isFormOpenCallback} openForm={openForm}/>
                <Menu menuItems={menuItems}/>
                <MainBlock/>
                <Services openServices={servicesModalData.open} isServicesOpenCallback={isServicesOpenCallback}
                          dispatch={dispatchServicesModalData}/>
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
