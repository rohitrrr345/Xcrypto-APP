import React from 'react'
import { useEffect, useState } from "react";
import {server} from '../main'
import axios from "axios";
import { Button, Container, HStack, Radio,RadioGroup } from '@chakra-ui/react';//Methods are the main events that locked it mena
import Loader from './Loader';
import ErrorCmp from './ErrorCmp';
import Mem from './Mem';

const Coins = () => {
    const[coins,setCoins]=useState([]);
    const[loading,setloading]=useState(true);
    const[error,seterror]=useState(false);
    const[currency,setcurrency]=useState("inr");
    const currencySymbol= currency==="inr"? "₹" :currency==="eur"?"€": "$";
    const[page,setPage]=useState(1)
    const btn=new Array(132).fill(1);
    const changepage=(page)=>{
        setPage(page);
        setloading(true);
    };
    useEffect(() => {
        const fetchCoins = async () => {
          try {
            const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
            setCoins(data)
            setloading(false)
          } catch (error) {
            seterror(true);
          }
        };
        fetchCoins();
      }, [currency,page]);
 
      if(error){
        return <ErrorCmp/>
      }
  return (
   <>
   <RadioGroup value={currency} onChange={setcurrency} p={5}>
    <HStack>
        <Radio value={'inr'}>INR</Radio>
        <Radio value={'usd'} >USD</Radio>
        <Radio value={'eur'}>EUR</Radio>
    </HStack>
   </RadioGroup>
     <Container maxWidth='container.xl' >
      { loading?(<Loader/>):(<HStack wrap={"wrap"} justifyContent={"space-evenly"} >
           { coins.map((i) => (
             <Mem 
               price={i.current_price}
               id={i.id}
               key={i.id}
               img={i.image}
               name={i.name}
               symbol={i.symbol}
               currencySymbol={currencySymbol}
             />
            ))}
       
        </HStack>)}
       <HStack overflowX={'auto'} p={8}>
        {btn.map((item,index)=>(
         <Button key={index}
         bgColor={'blackAlpha.800'}
         color={'white'}
         onClick={()=>changepage(index+1)}
         >
     { index+1}
         </Button>
        ))}
       </HStack>

     </Container>
   </>
  )
}
export default Coins
