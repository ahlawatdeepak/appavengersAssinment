import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
  } from '@chakra-ui/react'

  import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { useState } from "react";
 
  const Binding=["Paper Book", "Hard Cover" ,"Others"]
const Language=["English","Hindi","Marathi","Tamil","Spanish","Franch"]




export function Sidebar({FilterData}){
  
       return(
        <>
              <Box className="SidebarMainbox">
                    <Heading size="md">Refine your Search</Heading>

                     {/*Slider---------------------  */}
                <Box   w="100%" mt="30px" mb="20px">
                  <Text fontSize='lg'> Price Range: $300-$5000 </Text>
              


                  <RangeSlider
                        
                         mt="14px"
                         w="80%"
                         min={100} max={5000}
                        aria-label={['min', 'max']}
                        colorScheme='red'
                        defaultValue={[100, 5000]}
                        onChangeEnd={(val) => console.log(val)}
                   >
                        <RangeSliderTrack  h="6px" bg='red.100'>
                            <RangeSliderFilledTrack  bg='tomato'/>
                        </RangeSliderTrack>
                        <RangeSliderThumb boxSize={6} index={0} />
                        <RangeSliderThumb boxSize={6} index={1} />
                        </RangeSlider>
                </Box>

                {/*Slider---------------------  */}
                  
                  <Box className="Binding"> 
                     <Text fontSize='lg' mb="10px"> Binding </Text>
                        <Stack ml="30px" spacing={5} direction='column'>
                              {Binding.map((el,i)=>{
                                return(
                                    <>
                                      <Checkbox key={i} size='md'isInvalid="false" colorScheme='red' >{el}</Checkbox>
                                    </>
                                )
                              })}
                      </Stack>
                  </Box>


                  <Box className="Binding"> 
                     <Text fontSize='lg' mb="10px"> Language </Text>
                     <CheckboxGroup  onChange={(e)=>FilterData(e)}  >
                        <Stack ml="30px" spacing={5} direction='column'>
                              {Language.map((el,i)=>{
                                return(
                                    <>
                                      <Checkbox key={i} isInvalid="false" size='md' colorScheme='red' value={el}>{el}</Checkbox>
                                    </>
                                )
                              })}
                      </Stack>
                      </CheckboxGroup>
                  </Box>

              </Box>
        </>
       )
       
}