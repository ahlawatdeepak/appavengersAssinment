import Navbar from "./Navar/Navbar";
import { Box, Button, Flex, Heading, Image, Input, InputGroup, InputRightElement, Stack, useStatStyles } from "@chakra-ui/react";
import ImageCarousal from "./Carousel/Carousel";
import { bookdata, Icondata, Imagedata } from "./Datas/Alldata";
import { ShowAllBooks } from "./ShowBooks/ShowAllBooks";
import Footer from "./Footer/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FetchBookData } from "./Store/action";
import { useDispatch, useSelector } from "react-redux";



export default function Home(){
    const BookData=useSelector(store=>store.list.BookData)
    const [data,setData]=useState(BookData)
    const dispatch=useDispatch()
    const [text,setText]=useState()

    useEffect(()=>{
          dispatch(FetchBookData())
    },[])
     



    const handleSearch=(el)=>{
            setText(el.target.value)
    }

    const SearchFilter=()=>{
        console.log(text)
         let res=BookData.filter((el)=>
              el.title==text || el.author==text || el.publisher==text
         )
         console.log(res)
         setData(res)
    }
    
// console.log(data,BookData)
    return(
        <>
           <Navbar search={handleSearch} sFilter={SearchFilter}/>

            
          {/* Image of trending books -------------------------------------- */}
        
          <Box w="100%" h="100px" >
              <Image h="100%" w="100%" src='https://www.bookswagon.com/images/promotionimages/web/1_alltimefavourite.jpg?v=1.6' alt='Specially curated books for you ' />
          </Box>
             
             {/* Books carousel ---------------------------------------------- */}
           
            <ImageCarousal data={Imagedata}/>  
            

            {/* ICON Images ------------------------------------------------ */}
             
             <Box className="AwardDiv">

                  {Icondata && Icondata.map((el)=>{
                      
                      return(
                        <>
                           <Box >
                                  <Link to="/filter"> <Image h="80%" w="100%" src={el.image} alt={el.caption}/></Link>
                                    <Heading as='h5' size='sm'>{el.caption}</Heading>
                           </Box>
                        
                        </>
                      )
                  })}

             </Box>


             {/* Show All Books ------------------------------------------------------------- */}

            {data.length>0 ? <ShowAllBooks bookdata={data}/> : <ShowAllBooks bookdata={BookData}/>}  
  
               {/* Footer Components ------------------------------------------------- */}
               <Footer/>
        
        </>
    )
}