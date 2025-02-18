import { THEME } from "./Constant";


export const themeChange = () => {
    console.log("Theme change Called");
    return {
        type:THEME
    }
    
}