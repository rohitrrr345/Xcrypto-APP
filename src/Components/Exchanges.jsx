import React from 'react'
import { useEffect, useState } from "react";
import {server} from '../main'
import axios from "axios";
import { Container, HStack, Heading, Img, Text, VStack } from '@chakra-ui/react';
import Loader from './Loader';
import ErrorCmp from './ErrorCmp';


const Exchanges = () => {
    const[exchanges,setexchanges]=useState([]);
    const[loading,setloading]=useState(true);
    const[error,seterror]=useState(false);
    useEffect(() => {
        const fetchExchanges = async () => {
          try {
            const { data } = await axios.get(`${server}/exchanges`);
            setexchanges(data)
            setloading(false)
          } catch (error) {
            seterror(true);
          }
        };
        fetchExchanges();
      }, []);
 
      if(error){
        return <ErrorCmp/>
      }
  return (
   <>
     <Container maxWidth='container.xl' >
      { loading?(<Loader/>):(<HStack wrap={"wrap"} justifyContent={"space-evenly"} >
           { exchanges.map((i) => (
             <Item rank={i.trust_score_rank}
               url={i.url}
               key={i.id}
               image={i.image}
               name={i.name}
             />
            ))}
       
        </HStack>)}

     </Container>
   </>
  )
}
const Item=({image,rank,url,name})=>(//respecctful identities are the most interseting ones that may or may not do well for a cost 
    <a href={url} target={"blank"}>
   <VStack w={52} shadow={'lg'}
   m={4} p={4} borderRadius={'2xl'}
   transition={'all 0.8s'}
   css={{
    "&:hover": {
      transform: "scale(1.2)",
    },
  }}
    >
    <Img src={image} w={10} h={10} borderRadius={'xl'} />
    <Heading>
     #{rank}
    </Heading>
    <Text>
   {name}
    </Text>

   </VStack>
    </a>
  );

export default Exchanges
