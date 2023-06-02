import React from 'react'
import {Box ,Heading, Image, Container, Stack, Text} from '@chakra-ui/react'
import MyCarousel from "./MyCarousel"
import img5 from "../assets/5.png"

const Home = () => {

  return <Box>

      <MyCarousel />

      <Container maxW={"container.xl"} minH={"100vh"} p={"16"}>
        <Heading m={'auto'} textTransform={'uppercase'} p={"2"} w={"fit-content"} borderBottom={'2px solid'}>Services</Heading>
        <Stack
        h={'full'}
        p={'4'}
        alignItems={'center'}
        direction={['column', 'row']}
        >
        <Image src={img5} h={["40", "400"]} filter={'hue-rotate(-130deg)'} />
        <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '16']} textAlign={'center'} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aspernatur, qui eligendi quisquam voluptate nemo accusamus aliquid mollitia. Reprehenderit accusantium dicta atque corporis id dolor quis iste, quam ut? Nemo iste quaerat a odit minima repellendus placeat deserunt molestiae officiis, dignissimos excepturi. Incidunt nisi odio cupiditate pariatur illo? Animi tempore molestias nesciunt ullam excepturi impedit sed optio dolorum ratione ad asperiores consequuntur deserunt fugiat, exercitationem nobis est id error laborum quisquam eaque commodi necessitatibus? Reiciendis error eveniet reprehenderit expedita delectus.</Text>
        </Stack>
      </Container>

      </Box>; 
  }



export default Home