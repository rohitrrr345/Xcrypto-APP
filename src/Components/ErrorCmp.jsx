import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

const Error = () => {
  return (
    
    <HStack h={'90vh'} justifyContent={'center'} shadow={'lg'}>
        <Text color={'red'} size={'2xl'}>
           Error while fetching the data!!
        </Text>
    </HStack>
  )
}

export default Error