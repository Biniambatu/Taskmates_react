import { Button, HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <div>
      <HStack>
        <Image src={logo} boxSize='50px'></Image>
        <Text>TaskMate</Text>
      </HStack>
        
    </div>
  )
}

export default Header