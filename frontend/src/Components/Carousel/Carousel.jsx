import {Carousel} from "react-carousel-minimal"
import { Box } from '@chakra-ui/react'

export default function ImageCarousal({data}){

   
     

    const CaptionStyle={
        fontSize: '2em',
        fontWeight: 'bold',
    }


    return(
        <>

        <Box className="ImageCarouselBox">
                 
                 <Carousel 
                    data={data}
                    time={2000}
                    width="100%"
                    height="400px"
                    captionStyle={CaptionStyle}
                    // radius="7px"
                    automatic={true}
                    captionPosition="bottom"
                    dots={true}
                    pauseIconColor="white"
                //   slideBackgroundColor="blue"
                    slideImageFit="cover"
                    style={{
                        textAlign:'center',
                        // maxWidth:"140%",
                        width:"100%",
                        minHeight:"400px",
                    }}
                   />

        </Box>
        
        
        </>
    )
}