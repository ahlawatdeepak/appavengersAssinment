

import { AuthFail, AuthSuccess, CartData, DeleyteItem, Error, FetchData, Loading, LogOut, Orders, SignupSuceess } from "./Auth.types"


// InitalState for all store --------------------------------------------------------------------------------------

const initalState={
      signup:false,
      auth:false,
      autherror:false,
      loading:false,
      error:false,
      cartData:[],
      BookData:[],
     
}


// Reducer for Store --------------------------------------------------------------------------------------

export const AuthReducer=(state=initalState,{type,payload})=>{
        
     switch (type){
         
        case AuthSuccess :{
            return{
                ...state,
                signup:false,
                auth:true,
                autherror:false,
               
            }
        }
        case AuthFail :{
            return {
                ...state,
                signup:false,
                auth:false,
                autherror:true,
            }
        }
        case Loading :{
            return{
                ...state,
                loading:true,
                error:false
            }
        }

        case Error :{
            return {
                ...state,
                loading:false,
                error:true,
                
            }
        }

        case LogOut:{
              return{
                ...state,
                signup:false,
                 auth:false,
                 autherror:false,
                 loading:false,
                 error:false,
              }
        }
        
        case SignupSuceess :{
            return{
                ...state,
                signup:true,
                autherror:false,
               
            }
        }
        case CartData:{
       
            return{
                ...state,
                cartData:[...state.cartData,payload]

            }
        }
      case FetchData:{
          return{
            ...state,
            BookData:payload
          }
      }

    case Orders:{
        // console.log(payload)
        let index=payload.i
        let ans=state.cartData[index].orders
        if(payload.s=="a"){
            ans=ans+1
        }
        else{
            ans=ans-1
        }
        
        const newStore=state.cartData.map((obj,a)=>
             a==index ? {...obj,orders:ans} : obj
        )
        
        // console.log(newStore)

        return{
            ...state,
            cartData:newStore,
        }
    }

    case DeleyteItem:{
         state.cartData.splice(payload,1)
          console.log(state.cartData)
         return{
            ...state,
             cartData:state.cartData
         }
    }


        default : {
            return state
        }

     }
      
}