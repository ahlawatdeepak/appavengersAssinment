import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Box,
    Image,
    Heading,
    useToast,
   
  } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AddtoCart } from '../Store/action'



const OverlayTwo = () => (
  <ModalOverlay
    bg='none'
    backdropFilter='auto'
    backdropInvert='80%'
    backdropBlur='2px'
  />
)


// Quick view of selected book -------------------------------------------------------------------------------------------------------------------------

export function QuickViewofBook(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(  <OverlayTwo />)
    const dispatch=useDispatch()
    const data=useSelector(store=>store.list)
    const toast = useToast()


//  Handle Item in cart if item already exist then show a error toast or if not exist then add and show a success toast --------------------------------------------------------------------------------------
    const handleAdd=()=>{
     
       if(data.cartData.includes(props)){
        toast({
          title: 'Item already exist in Cart',
          description: "you can added more quanity there",
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
          return  
       }
       else{
          toast({
            title: 'Item Added to cart.',
            description: "This Item is Added to your cart",
            status: 'success',
            duration: 2000,
            isClosable: true,
         })
       }
       dispatch(AddtoCart(props))
       
    }
   

    return (
      <>
        <Button mt="10px" colorScheme='red' className="QuickView"
          onClick={() => {
            setOverlay(<OverlayTwo />)
          
            onOpen()
          }}
        >
          QUICK VIEW
        </Button>
        <Modal key={props.id} isCentered isOpen={isOpen} size="3xl" onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Quick View of {props.title} Book</ModalHeader>
            <ModalCloseButton />
            <ModalBody>

                 <Box className='ModalBookMain'>
                        
                 <Box className='BoxImage'>
                       <Image w="100%" h="70%" src='https://www.bookswagon.com/images/bannerimages/84_inr.jpg?v=1.4' alt='Dan Abramov' />
                       <Box className='CartAddBox'>
                              
                              <Button onClick={handleAdd} display="block"   m="auto" mt="10px" colorScheme="red">Add To Cart</Button>
                              <Button display="block"   m="auto" mt="10px" colorScheme="red">Add To Wishlist</Button>
                       </Box>
                 </Box>
                        
                    <Box className='DetailBox'>
                         <Heading mt="10px" color="red" size='md'>Price: ${props.price}</Heading>
                         <Heading mt="10px" size='md'>Title: {props.title}</Heading>
                          
                         <Text mt="10px" fontSize='lg'>By: {props.author} | Released: {props.released_date}</Text>
                         <Text maxHeight="40%" overflow="hidden" fontSize='lg' w="80%"  m="auto" mt="15px">{props.summary}</Text>
                    
                  <Link to={`/details/${props.id}`} ><Button m="auto" mt="10px" w="70%"  color="red" bgColor="white" border="1px solid red" >VIEW PRODUCT DETAIL </Button></Link>
                    
                    </Box>

                 </Box>       
            </ModalBody>
            <ModalFooter>
           
          </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }





