import React from 'react'
import { Box, Button, HStack, Heading, Stack, VStack, Input, Text } from '@chakra-ui/react'
import { AiFillGithub, AiFillInstagram, AiFillRedditCircle, AiOutlineSend } from "react-icons/ai"

const Footer = () => {
    return <Box bg={'blackAlpha.900'} minH={'40'} p={"16"} color={"white"}>

        <Stack direction={["column", "row"]}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'} >
                <Heading size={"md"} textTransform={'uppercase'} textAlign={['center', 'left']}>
                    Subscribe to get latest updates
                </Heading>
                <HStack
                    borderBottom={'2px solid white'}
                    py={'2'}
                >
                    <Input placeholder='Enter Email Here...'
                        border={'none'}
                        borderRadius={'none'}
                        outline={'none'}
                        focusBorderColor={'none'}
                    />
                    <Button
                        p={'0'}
                        colorScheme={'purple'}
                        variant={'ghost'}
                        borderRadius={'0 20px 20px 0'}
                    >
                        <AiOutlineSend size={20} />
                    </Button>
                </HStack>
            </VStack>

            <VStack
                w={'full'}
                borderLeft={['none', '1px solid white']}
                borderRight={['none', '1px solid white']}
            >
                <Heading size={"md"} textTransform={'uppercase'} textAlign={'center'}>
                    Video Hub
                </Heading>
                <Text>All right received</Text>
            </VStack>

            <VStack
                w={'full'}
            >
                <Heading size={"md"} textTransform={'uppercase'}>
                    Social Media
                </Heading>
                <Button variant={'link'} colorScheme={'white'} >
                    <a href="https://github.com/AgentKaliLinux" target={'blank'}>
                    <AiFillGithub size={'20px'} />
                    </a>
                </Button>
                <Button variant={'link'} colorScheme={'white'} >
                    <a href="https://www.instagram.com/jaun_codes/" target={'blank'}>
                    <AiFillInstagram size={'20px'} />
                    </a>
                </Button>
                <Button variant={'link'} colorScheme={'white'} >
                    <a href="https://www.reddit.com/user/Jaun_Raza" target={'blank'}>
                    <AiFillRedditCircle size={'20px'} />
                    </a>
                </Button>
            </VStack>
        </Stack>
    </Box>
}

export default Footer