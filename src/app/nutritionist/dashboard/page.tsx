'use client'

import DashBoardHeader from "@/components/dashboard-header"
import DashboardSideBar from "@/components/dashboard-sidebar"
import { Box, Flex, Heading, Text } from "@chakra-ui/react"

export default function DashBoard(){

    return (
        <Box className="min-h-full h-full px-4 mt-6">
<Heading size={'lg'} className="text-primaryGreen">Activity</Heading>
<Flex align={'center'} justify={'center'} minH={150} bg={'white'} my={3}>

            <Text className="text-primaryGray">No Activity Yet</Text>
</Flex>
        </Box>
    )
}