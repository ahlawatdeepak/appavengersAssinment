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
    Box,
    Text,
    Heading,
    Image,
    Icon,
    useToast,
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import { CartOrders, DeleteCartItem } from '../Store/action'

    
export function CartPage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
     const {cartData}=useSelector(store=>store.list)
    const [total,setTotal]=useState(0)
    const dispatch=useDispatch()
    const toast = useToast()


//  calculate the total ammount of cart -----------------------------------------------------------------------------------------------------------

  useEffect(()=>{
    let sum=0
      for(let i of cartData){
        console.log(i)
        if(i.orders>0){
          sum+= ((i.orders+1)*i.price)
        }
        else{
          sum+=i.price
        }
      }
    setTotal(sum)
  },[cartData])



// handle the add item in cart -----------------------------------------------------------------------------------------------------------
  const Addtotal=(s,i)=>{
    let res={i,s}
    dispatch(CartOrders(res))
  }
 


  //  handle the cart delete -----------------------------------------------------------------------------------------------------------
  const handleDelete=(i)=>{
        dispatch(DeleteCartItem(i))

        toast({
          title: 'Item Deleted Successfully.',
          description: "Thank you",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
      
  }


  
    return (
      <>
        <Button  colorScheme='red' variant='solid' onClick={onOpen}>Cart</Button>
  
        <Modal size="5xl" closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader bg="red" color="white">My Shopping Cart </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                 
                  <Box  h="300px" overflow="scroll" w="97%" m="auto" >
                       {cartData.length==0 ? 
                       <Box  w="90%" textAlign="center" h="30%" m="auto" mt="10%">
                         <Text  fontSize='md'>Your Shopping Cart is currently empty. To add Books in your Shopping Cart, start by searching or browsing through our book store. When a book interests you, click on Add to Cart button. Books in Shopping Cart always reflect the most recent price, displayed on their product pages.</Text> 
                         <Text mt="10px"> Plese{' '}<Link color='blue' href='/'>Click here</Link> {" "}to continue Shopping</Text>
                       </Box>
                        
                      :  <CartMap  deletehandle={handleDelete} Addtotal={Addtotal} data={cartData}/> }
                  </Box>
                 

               
            </ModalBody>
  
            <ModalFooter>
            { cartData.length==0 ? " " : <Box className='CartFooter' >
                       <Box className='cartTotal'>
                            <Box w="50%">
                                <Text fontSize='md'>Total Gross</Text>
                                <Text fontSize='md'>Dilivery Charge</Text>
                                <Text fontSize='md'>Amount Payable</Text>
                            </Box>
                            <Box >
                                <Text fontSize='md'>: {total}</Text>
                                <Text fontSize='md'>: 0</Text>
                                <Text fontSize='md'>: ${total}</Text>
                            </Box>
                        </Box>
                        <Box display="flex"  justifyContent="space-around">
                            <Button colorScheme="red"> <Link href='/'>Continue Shopping</Link></Button>
                            <Button colorScheme="red">Place Order</Button>
                        </Box>
                 </Box>}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }




// Show all cart data -----------------------------------------------------------------------------------------------------------
  function CartMap({ deletehandle,data,Addtotal}){
    

       
        
      return(
        <>
           {data && data.map((el,i)=>{

                return(
                    <>
                        <Box key={el.id} className='cartMap' alignItems="center">
                            <Heading size="sm">{i+1}</Heading>
                            <Image h="80%" src="https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/185/9780593236185.jpg" alt={el.title}/>
                            <Heading size="sm">{el.title}</Heading>
                             <Box  display="flex" h="40px"  justifyContent="space-evenly" alignItems="center">

                                       <Button isDisabled={el.orders===0} onClick={()=>Addtotal("s",i)} h="70%" mr="10px">  <Icon  as={MinusIcon} /> </Button>

                                        <Button h="90%" w="70%" textAlign="center" size="sm" border="1px solid black">{el.orders+1}</Button>
                                        
                                      <Button isDisabled={el.orders==el.quantity} onClick={()=>Addtotal("a",i)} h="70%" ml="10px">  <Icon as={AddIcon} /> </Button>    
                             </Box>

                             <Heading size="sm">Price: ${el.price}</Heading>
                             
                             <Button onClick={()=>deletehandle(i)} colorScheme="red">Delete</Button>

                        </Box>
                    </>
                )
           })}
          
        </>
      )
  }