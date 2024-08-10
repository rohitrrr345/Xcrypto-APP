import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
const Mem=({id,img,symbol,price,name,currencySymbol="₹"})=>(
   <Link to={`/coin/${id}`}>
    <VStack w={52} shadow={'lg'}
    m={4} p={4} borderRadius={'2xl'}
    transition={'all 0.8s'}
    css={{
     "&:hover": {
       transform: "scale(1.2)",
     },
   }}
     >
     <Image src={img} w={10} h={10} borderRadius={'xl'} />
     <Heading>
      {symbol}
     </Heading>
     <Text>
    {name}
     </Text>
 <Text>
     {price? `${currencySymbol}${price}`:"NA"}
 </Text>
    </VStack></Link>
    
   );
   export default Mem;
 
 