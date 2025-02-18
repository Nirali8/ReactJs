import { THEME } from "./Constant";

let initialValue = {
    theme:"light"
}

const themeReducer = (state = initialValue , action) => {
    switch(action.type){
        case THEME: 
        console.log('themeReducer Called');
        return{
            ...state,
            theme: state.theme === "light" ? "dark" : "light"
        }
        default:return state
    }
}

export default themeReducer
