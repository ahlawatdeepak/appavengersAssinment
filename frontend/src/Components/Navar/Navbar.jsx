import { Box, Button, Flex, Heading, Image, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,

  } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { Login } from "../Login/login";
import { CartPage } from "../Cart/cart";



export default function Navbar({search,sFilter}){
    

   


    return(
        <>
          
          <Box className="NavbarMainBox">
               
                    <Box w="20%" h="100%" >
                      <Link to="/">  <Image className="NavImg" borderRadius="7px"  src='https://d2g9wbak88g7ch.cloudfront.net/staticimages/logo-new.png' alt='Books Wagon' /></Link>
                    </Box>

                    <Box className="SearchNav">
                        <InputGroup>
                                <Input  
                                borderColor="red"
                                  onChange={(e)=>search(e)}
                                    // pr='4.5rem'
                                    type="text"
                                    placeholder='Search Books'
                                />
                                <InputRightElement width='3rem'>
                                    <Button onClick={sFilter} colorScheme='red'>
                                    <Icon borderColor="red" as={SearchIcon} />
                                    </Button>
                                </InputRightElement>
                        </InputGroup> 
                    </Box>
            
                    <Box h="50%" m="auto" >

                            <Stack className="SignBox"  direction='row' spacing={10}>
                                  <Link to="/signup"><Button colorScheme='red' variant='solid'>
                                       Sign up
                                    </Button></Link> 
                                      
                                      <Login/>
                                    <CartPage/>
                            </Stack>
                    </Box> 
          
          </Box>

     {/* Navbar Books Div--------------------------------------------  */}
     <Box h="80px"></Box>
          <Box w="100%" bgColor="red" >
                    <Flex className="MenuBox" >
                    <Menu>
                            <MenuButton  colorScheme='darkred' as={Button} rightIcon={<ChevronDownIcon />}>
                                Books
                            </MenuButton>
                            <MenuList mt="9px">
                              <Link to="/filter"><MenuItem>Art & Photography</MenuItem></Link>
                                 <Link to="/filter"><MenuItem>Biographic</MenuItem></Link>
                                 <Link to="/filter"><MenuItem>Memories</MenuItem></Link>
                                 <Link to="/filter"><MenuItem>Dictionaries</MenuItem></Link>
                                 <Link to="/filter"><MenuItem>Lierature</MenuItem></Link>
                                 <Link to="/filter"><MenuItem>English</MenuItem></Link>
                                 <Link to="/filter"><MenuItem>Fiction</MenuItem></Link>
                                 <Link to="/filter"><MenuItem>Reference</MenuItem></Link>
                                 <Link to="/filter"><MenuItem>History</MenuItem></Link>
                                 <Link to="/filter"><MenuItem>Society</MenuItem></Link>
                                 <Link to="/filter"><MenuItem>Business</MenuItem></Link>
                                 <Link to="/filter"><MenuItem>Law</MenuItem></Link>
                            
                            
                            </MenuList>
                    </Menu>
                    
                            <Button  colorScheme='darkred' >New Arrivals</Button>
                            <Button colorScheme='darkred' >Box Sets</Button>
                            <Button colorScheme='darkred' >Best Sellers</Button>
                            <Button colorScheme='darkred' >Fictions Books</Button>
                            

            
                    </Flex>
           </Box>
          
     

        </>
    )
}