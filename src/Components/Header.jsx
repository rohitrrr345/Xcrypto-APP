import { Box, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
   
        <HStack justifyContent={'space-between'} bgColor='blackAlpha.900' p={'7'}  pos={'sticky'}  paddingRight={'12'} w={"100%"} >
        <Box>
        <Button variant='ghost' colorScheme='teal'>
           XCRYPTOS
           </Button> 
        </Box>
        <Box >
           <Button variant='ghost' colorScheme='teal'>
           <Link to="/">Home</Link>
           </Button>
           <Button  variant='ghost' colorScheme='teal'>
           <Link to="/Exchanges">Exchanges</Link>
           </Button>
           <Button  variant='ghost' colorScheme='teal'>
           <Link to="/Coins">Coins</Link>
           </Button>
        </Box>
        </HStack>
    
  )
}

export default Header