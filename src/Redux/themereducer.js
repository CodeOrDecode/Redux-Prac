import { produce } from "immer";
import { DARKTHEME, LIGHTTHEME } from "./action";

export const themereducer = (state={theme:"no theme"},{type,payload})=>{
    switch(type){

        case DARKTHEME:{
            return produce(state,(original)=>{
                original.theme = payload;
            })
        }
        case LIGHTTHEME:{
            return produce(state,(original)=>{
                original.theme = payload;
            })
        }
        default:{
            return state;
        }
    }

}