import { AuthFail, AuthSuccess, CartData, DeleyteItem, Error, FetchData, Loading, Orders, SignupSuceess } from "./Auth.types"
import axios from "axios"




// Signup post and get the response --------------------------------------------------------------------------------------

export const SignupApi=(creds)=>async(dispatch)=>{
      
     try {
          
         let res=await axios.post(` https://fierce-puce-lapel.cyclic.app/user`,creds)
          console.log(res)
          dispatch({
             type:SignupSuceess,
          })
     } catch (error) {
        dispatch({
            type:AuthFail
        })
     }
      
}



// Login user and get response --------------------------------------------------------------------------------------
export const LoginApi=(creds)=>async(dispatch)=>{
    // console.log(creds)
   dispatch({
      type:Loading,
   })
   try {
        
       let res=await axios.post(` https://fierce-puce-lapel.cyclic.app/user/login`,creds)
      //   console.log(res)
        if(res){
            alert("Login in successfull")
        }
        dispatch({
           type:AuthSuccess,
        })
   } catch (error) {
      // console.log(error)
       alert("Check your email or password")
       dispatch({
          type:AuthFail
       })
   }
    
}



// Fetch the all book data in Url --------------------------------------------------------------------------------------


export const FetchBookData=()=>async(dispatch)=>{
        try {
              let res=await axios.get(` https://fierce-puce-lapel.cyclic.app/book`)
              dispatch({
                type:FetchData,
                payload:res.data.data
              })
        } catch (error) {
            dispatch({
               type:Error
            })
        }
    
 }



//  Add the Item in the Cart --------------------------------------------------------------------------------------

export const AddtoCart=(creds)=>(dispatch)=>{
   
  dispatch({
      type:CartData,
      payload:creds
  })
   
}

// Cart Orders add or sub --------------------------------------------------------------------------------------

export const  CartOrders=(creds)=>(dispatch)=>{
   //  console.log(creds)
  
    dispatch({
        type:Orders,
         payload:creds
    })
    
 }


//  Delete the Item in the Cart --------------------------------------------------------------------------------------

 
export const  DeleteCartItem=(creds)=>(dispatch)=>{
   //  console.log(creds)
  
    dispatch({
        type:DeleyteItem,
         payload:creds
    })
    
 }