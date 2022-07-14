import { Box, Button, Heading, Input, Stack, Text} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import { PinInput, PinInputField,Select, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider, } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'


const Form = () => {
    const [loading, setLoading] = useState(false);
    const [otp, setOtp]= useState("")
    const[select, setSelect]=useState("");
  return (
    <div>
        <Box>
            <Heading>Form</Heading>
            <br />
        </Box>
        <Box>
            <Input type="email" placeholder='email'/>
           
        </Box>
        <br/>
        <Box>
            <Input type="password" placeholder='password'/>
        </Box>
        <br/>
        <Box>
            <Button colorScheme='red' onClick={() =>{
                setLoading(true);
                setTimeout(() =>{
                    setLoading(false);
                },2000)
            }} isLoading={loading}>Sign Up</Button>
        </Box>
        <br/>
        <Box>
            <PinInput value={otp}  onChange={(value)=> setOtp(value)}  otp>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
            </PinInput>
        </Box>
        <br/>
        <Box>
            <Text>{otp}</Text>
        </Box>
        <Box>
        <Select  placeholder='Select option'>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
        </Select>
        </Box>
        <br />
        <Box>
                    <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Actions
            </MenuButton>
            <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
            </Menu>
        </Box>
    </div>
  )
}

export default Form