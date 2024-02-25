//reducer - принимает старый state (состояние) и action и возвращает обновленный state. В нашем случает обновляем двнные в модальном окне докторов
export const doctorsReducer = (state, action) => {
    switch (action.type) {
        case "DOCTORS/SET-DATA-MODAL":
            return {
                ...state,
                img: action.img,
                name: action.name,
                position: action.position,
                experience: action.experience,
                specialization: action.specialization
            }

        case "DOCTORS/TOGGLE-DATA-MODAL":
            return {...state, open: action.isOpen}

        default:
            return state
    }
}


//action creator - фабричная функция для создания action
export const setDataDoctorsModalAC = (name, img, position, experience, specialization) => ({
    type: 'DOCTORS/SET-DATA-MODAL',
    name,
    img,
    position,
    experience,
    specialization
})
export const toggleDoctorsModalAC = (isOpen) => ({type: 'DOCTORS/TOGGLE-DATA-MODAL', isOpen})