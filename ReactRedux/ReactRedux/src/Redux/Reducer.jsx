import { BUY_CHOCO } from "./Constant";
import { BUY_TOYS } from "./Constant";

let initialValue = {
    numOfChoco : 20,
    numOfToys : 30
}

const ChocoReducer = (state = initialValue , action) => {
    switch(action.type){
        case BUY_CHOCO: 
        console.log('ChocoReducer Called');
        return{
            ...state,
            numOfChoco:state.numOfChoco - 1
        }
        case BUY_TOYS: 
        console.log('ChocoReducer Called');
        return{
            ...state,
            numOfToys:state.numOfToys - 1
        }
        default:return state
    }
}

export default ChocoReducer
