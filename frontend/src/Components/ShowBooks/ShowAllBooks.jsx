import { Box, Button, Heading, Image, Text } from "@chakra-ui/react"
import { QuickViewofBook } from "./QuckView"
 
 

// Show all books Cart  get props and show them in grid order ---------------------------------------------------------

export const ShowAllBooks=({bookdata})=>{

    
   

    return(
        <>
          <Box  className="MainOuterDiv">
            {/* MAP through all props -------------------------------------------------------------------------------------------  */}
               {bookdata && bookdata.map((el,i)=>{
                  
                  return(
                    <> 
                      { <Box key={el.id} className="BooksDiv">
                          
                           <Image m="auto" h="50%" w="90%" mt="10px" src="https://www.bookswagon.com/images/bannerimages/84_inr.jpg?v=1.4"  alt={el.author}/>
                            
                            <QuickViewofBook key={el.id} {...el}/>

                           <Heading mt="10px" size='sm'>{el.title}</Heading>
                            
                            <Text mt="10px">{el.author}</Text>
                            
                            <Heading mt="10px" color="red" size='sm'>Price : ${el.price}</Heading>
                       </Box>}

                    </>
                  )
               })}
             
          </Box> 
        </>
    )
}