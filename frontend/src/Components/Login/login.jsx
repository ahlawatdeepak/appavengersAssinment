  
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Button,
    Link,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LoginApi } from '../Store/action'




// Login Component modal ----------------------------------------------------------------------------

export  function Login() {
    let { isOpen, onOpen, onClose } = useDisclosure()
    const [loginInfo,setLoginInfo]=useState({email:"",password:""}) 
    const data=useSelector(store=>store.list)
    const dispatch=useDispatch()
    
   

    const handleChange=(e)=>{
         const {name,value}=e.target
         setLoginInfo({
            ...loginInfo,
            [name]:value
         })
    }
  
   
 
     const handleLogin=()=>{
         
         if(!loginInfo.email || !loginInfo.password){
              alert("plese provide valid information")
              return
         }

        dispatch(LoginApi(loginInfo))
       
     }

  
     
    
    
    return (
      <>
       
        <Button colorScheme='red' variant='solid' onClick={onOpen}>Log in</Button>
        
  
        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Log in to  your account
                
                 {data.auth ? 
                  
                   <Alert
                   status='success'
                   variant='subtle'
                   flexDirection='column'
                   alignItems='center'
                   justifyContent='center'
                   textAlign='center'
                   height='200px'
                 >
                   <AlertIcon boxSize='40px' mr={0} />
                   <AlertTitle mt={4} mb={1} fontSize='lg'>
                    Log in Successfully!
                   </AlertTitle>
                   <AlertDescription maxWidth='sm'>
                     Thanks for Log in. Hope you enjoy our books.
                   </AlertDescription>
                 </Alert>
                
                   : " "}
                 
              

            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input onChange={handleChange} name="email" type="email" placeholder='Enter your email' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input onChange={handleChange} name="password" type="password" placeholder='Enter your Password' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={handleLogin} colorScheme='blue' mr={3}>
                Log in
              </Button>
              <Link href='/signup'><Button onClick={onClose}>Sign up</Button></Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }