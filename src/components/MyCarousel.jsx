import {Box, Heading, Image} from '@chakra-ui/react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"

const headingOptions = {
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:"4",  
    size:"4xl"
}

const MyCarousel = ()=>{
    return <Carousel
    autoPlay
      infiniteLoop
      interval={"1000"}
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      >
        <Box
        w={'full'}
        h={'100vh'}
        >
          <Image src={img1} w={'full'} h={'full'} objectFit={'cover'}  />
          <Heading backgroundColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
            Watch The Future
          </Heading>
        </Box>
        <Box
        w={'full'}
        h={'100vh'}
        >
          <Image src={img2} w={'full'} h={'full'} objectFit={'cover'} />
          <Heading backgroundColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
            Future Is Gaming
          </Heading>
        </Box>
        <Box
        w={'full'}
        h={'100vh'}
        >
          <Image src={img3} w={'full'} h={'full'} objectFit={'cover'} />
          <Heading backgroundColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
            Gaming On Console
          </Heading>
        </Box>
        <Box
        w={'full'}
        h={'100vh'}
        >
          <Image src={img4} w={'full'} h={'full'} objectFit={'cover'} />
          <Heading backgroundColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
            Night Life Is Cool
          </Heading>
        </Box>
      </Carousel>
  }

export default MyCarousel