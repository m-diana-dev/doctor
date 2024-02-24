
//reducer - принимает старый state (состояние) и action и возвращает обновленный state. В нашем случает обновляем двнные в модальном окне услуг
export const servicesModalReducer = (state, action) => {
    switch (action.type) {
        case "SERVICES/SET-DATA-MODAL":
            return {...state, title: action.title, list: action.list}

        case "SERVICES/TOGGLE-DATA-MODAL":
            return {...state, open: action.isOpen}

        default:
            return state
    }
}


//action creator - фабричная функция для создания action
export const setDataServicesModalAC = (title, list) => ({type: 'SERVICES/SET-DATA-MODAL', title, list})
export const toggleServicesModalAC = (isOpen) => ({type: 'SERVICES/TOGGLE-DATA-MODAL', isOpen})