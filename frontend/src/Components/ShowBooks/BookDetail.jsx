import { Box, chakra, Container, Stack, Text, Image, Flex, VStack, Button, Heading, SimpleGrid, StackDivider, useColorModeValue, List, ListItem, useToast,} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navar/Navbar';
import { AddtoCart, FetchBookData } from '../Store/action';


  
  export default function BookDetailsPage() {
   const {BookData,cartData}=useSelector(store=>store.list)
   const dispatch=useDispatch()
   const toast = useToast()
    const {id}=useParams()


  //  Handle Item in cart if item already exist then show a error toast or if not exist then add and show a success toast --------------------------------------------------------------------------------------

    const handleAdd=()=>{
     
        if(cartData.includes(BookData[id])){
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
        dispatch(AddtoCart(BookData[id]))
        
     }



     
    return (
        <>
         
          <Navbar/>

      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                'https://www.bookswagon.com/images/bannerimages/84_inr.jpg?v=1.4'
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
               {BookData[id].title}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                ${BookData[id].price}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                   {BookData[id].summary}
                </Text>
                <Text fontSize={'lg'}>
                {BookData[id].summary}
                </Text>
              </VStack>
             

             {/* External  Details of Book-------------------------------- */}
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>
  
                <List spacing={2}>
                <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Book Name:
                    </Text>{' '}
                    {BookData[id].title}
                  </ListItem>
                 <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                     Author:
                    </Text>{' '}
                    {BookData[id].author}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                     Language:
                    </Text>{' '}
                    {BookData[id].language}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                     Price:
                    </Text>{' '}
                    ${BookData[id].price}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                   Publisher:
                    </Text>{' '}
                    {BookData[id].publisher}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Released Date:
                    </Text>{' '}
                    {BookData[id].released_date}
                  </ListItem>
                 
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Describtion: 
                    </Text>{' '}
                    {BookData[id].summary}
                  </ListItem>
                </List>
              </Box>
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}  onClick={handleAdd} >
              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
             
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>


  <Footer/>
      </>
    );
  }