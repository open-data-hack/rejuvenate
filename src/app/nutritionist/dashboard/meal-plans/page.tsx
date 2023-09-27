'use client'

import DashboardSideBar from "@/components/dashboard-sidebar"
import {Td, Box, Button, Flex, Heading, Table, TableContainer, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { format } from 'date-fns'
export default function DashBoard(){
    const today=new Date().getTime()
  return (
        <Box className="min-h-full h-full px-4 mt-6">
          
          <Flex align={'center'} justify={'space-between'}>
<Flex align={'center' } gap={6}>

          <Heading size={'lg'} className="text-primaryGreen">Meal Plans</Heading> <Text className="bg-primaryGreen text-white rounded-full py-1 px-4 " fontSize={'sm'} fontWeight={'semibold'}>
{format(today,'E, d MMM yyyy')}
          </Text>
</Flex>
<Button className="bg-primaryGreen text-primaryBeige">Create Meal Plan</Button>
          </Flex>
          
<TableContainer my={6} >
    <Table variant={'striped'}>
        <Thead bg={'white'} >
            <Tr >

            <Th >Time</Th>
            <Th >Meal Name</Th>
            <Th >Details</Th>
            <Th></Th>
            <Th></Th>
            </Tr>
        </Thead>
        <Tbody>
            <Tr bg={'white'} rounded={'md'} my={4} > 

        <Td>Time</Td>
        <Td>Time</Td>
        <Td>Time</Td>
        <Td>Time</Td>
        
            </Tr>
            <Tr bg={'white'} rounded={'md'} my={4} > 

        <Td>Time</Td>
        <Td>Time</Td>
        <Td>Time</Td>
        <Td>
            <Flex gap={2}>

            <Button size={'sm'} variant={'outline'} rounded={'full'} className="text-primaryGreen">View</Button><Button size={'sm'} variant={'outline'} rounded={'full'} className="text-primaryGreen">Edit</Button>
            </Flex>
            </Td>
        
            </Tr>
          
        </Tbody>
    </Table>
</TableContainer>
        </Box>
    )
}