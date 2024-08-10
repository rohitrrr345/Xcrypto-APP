import {
  Container,
  HStack,
  Heading,
  Image,
  Img,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import "../App.css"
import img from "../assets/bitcoin.jpg";

const Home = () => {
  return (
    <div bgcolor={"blackAlpha.300"} className="home">
      <HStack minHeight={"90vh"}
        maxW={"Hstack.xl"}
        bgColor={"blackAlpha.300"}
        p={50}
        justifyContent={"space-between"}
      >
        <VStack color={"black"} w={"50%"}>
          <Heading size={"4xl"}>
            WELCOME TO THE CRYPTO APP TRACK ALL DETAILS ABOUT CRYPTO
            <Text size={"xl"}>
             Bitcoin Etherium and many more....
          </Text>
          </Heading>
         
        </VStack>
        <VStack w={"50%"}>
          <Image src={img} w={"300"} h={"300"} borderRadius={"full"} />
        </VStack>
      </HStack>
      <VStack justifyContent={"center"} alignItems={"center"} width={"100%"} h={'200'}  bgColor={"blackAlpha.900"} >
        <Heading color={'white'}>About Me</Heading>
        <Img src="https://media.licdn.com/dms/image/D5603AQFOomhCqzRE4A/profile-displayphoto-shrink_400_400/0/1722943324341?e=1728518400&v=beta&t=4opXQHhuzlrrxMjNfNiedn3qTXGQgjW1iavvtypcPXA" w={50} h={50} rounded={"50%"} />

        <Text color={'white'}  fontSize={'xl'} fontWeight={'bold'}>
         Rohit Singh Thakur <br />
        </Text>
        <Text color={'white'}  fontSize={'lg'} fontWeight={'bold'}>
        Passionate MERN developer Problem solver and Web 3 enthusiast <br />
        </Text>


      </VStack>
    </div>
  );
};

export default Home;
