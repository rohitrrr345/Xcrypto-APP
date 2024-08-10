import { Badge, Box, Container, HStack, Image, Img, Radio, RadioGroup, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack,Progress, Button } from '@chakra-ui/react';
import React from 'react';
import { useParams } from "react-router-dom";
import Loader from './Loader';
import { useEffect, useState } from "react";
import axios from 'axios';
import { server } from '../main';
import ErrorCmp from './ErrorCmp';
import Coins from './Coins';


import Chart from './Chart'
const CoinDetails = () => {
 

    const[cnt,setcnt]=useState({});
    const[loading,setloading]=useState(true);
    const[error,seterror]=useState(false);
    const[currency,setcurrency]=useState("inr");
    const currencySymbol= currency==="inr"? "₹" :currency==="eur"?"€": "$";
    const params =useParams();
    const[days,setdays]=useState("24hr")
    const[chartarr,setchartarr]=useState([])
const btns=["24h","7d","14d","30d","60d","200d","1y","max"];
const svitch=(key)=>{
  switch (key) {
    case "24h":
      setdays("24h")
      setloading(true);
      break;
      case "7d":
      setdays("24h")
      setloading(true);
      break;
      case "14d":
      setdays("24h")
      setloading(true);
      break;
      case "30d":
      setdays("24h")
      setloading(true);
      break;
      case "60d":
      setdays("24h")
      setloading(true);
      break;
      case "200d":
      setdays("365d")
      setloading(true);
      break;
      case "max":
        setdays("max")
        setloading(true);
        break;
    default:
      setdays("24h")
      setloading(true);
      break;
  }
}
    useEffect(() => {
     
        const fetchCoin = async() => {
          
          try { 
            const a = await axios.get(`${server}/coins/${params.id}`);
            const another=await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);
            setcnt(a);
            setchartarr(another.data.prices)
            setloading(false);
          } catch (error) { 
            seterror(true);
            setloading(false);
          }
        };
        fetchCoin();
      }, [params.id,currency,days]);
      if(error) return <ErrorCmp/>;
    
  return (
    <Container maxW={'container.xl'} >
     {loading?(<Loader/> ):(<>
     <Box width={'full'} borderWidth={'1'}>
    <Chart arr={chartarr} currency={currencySymbol}days={days}/>
     </Box>
     <HStack overflow={'auto'}>
     { btns.map((i) =>(
        <Button key={i} onClick={()=>svitch(i)}>
          {i}
        </Button>
      ))}
     </HStack>
     <RadioGroup value={currency} onChange={setcurrency} p={5}>
    <HStack>
        <Radio value={'inr'}>INR</Radio>
        <Radio value={'usd'} >USD</Radio>
        <Radio value={'eur'}>EUR</Radio>
      
    </HStack>
   </RadioGroup>
     
   <VStack>
    <Text fontSize={'small'} alignself={'center'} opacity={'0.7'}>
     Last updated on {Date(cnt.data.market_data.last_updated).split('G')[0]}
    </Text>
    <Image src={cnt.data.image.large} w={'16'} h={'16'}/>

    <Stat>
              <StatLabel>{cnt.data.name}</StatLabel>
              <StatNumber>
                {currencySymbol}
                {cnt.data.market_data.current_price[currency]}
              </StatNumber>
              <StatHelpText>
                <StatArrow
                  type={
                    cnt.data.market_data.price_change_percentage_24h > 0
                      ? "increase"
                      : "decrease"
                  }
                />
                {cnt.data.market_data.price_change_percentage_24h}%
              </StatHelpText>
            </Stat>
            <Badge
              fontSize={"2xl"}
              bgColor={"blackAlpha.800"}
              color={"white"}
            >{`#${cnt.market_cap_rank}`}</Badge>

            <CustomBar
              high={`${currencySymbol}${cnt.data.market_data.high_24h[currency]}`}
              low={`${currencySymbol}${cnt.data.market_data.low_24h[currency]}`}
            />

            <Box w={"full"} p="4">
              <Item title={"Max Supply"} value={cnt.data.market_data.max_supply} />
              <Item
                title={"Circulating Supply"}
                value={cnt.data.market_data.circulating_supply}
              />
              <Item
                title={"Market Cap"}
                value={`${currencySymbol}${cnt.data.market_data.market_cap[currency]}`}
              />
              <Item
                title={"All Time Low"}
                value={`${currencySymbol}${cnt.data.market_data.atl[currency]}`}
              />
              <Item
                title={"All Time High"}
                value={`${currencySymbol}${cnt.data.market_data.ath[currency]}`}
              />
            </Box>

   </VStack>

   
   
     </>)}
    </Container>
  )
}
const Item = ({ title, value }) => (
  <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
    <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>
      {title}
    </Text>
    <Text>{value}</Text>
  </HStack>
);

const CustomBar = ({ high, low }) => (
    <VStack w={"full"}>
      <Progress value={50} colorScheme={"teal"} w={"full"} />
      <HStack justifyContent={"space-between"} w={"full"}>
        <Badge children={low} colorScheme={"red"} />
        <Text fontSize={"sm"}>24H Range</Text>
        <Badge children={high} colorScheme={"green"} />
      </HStack>
    </VStack>
  );
  

export default CoinDetails;