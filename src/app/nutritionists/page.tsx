'use client'

import Icon from "@/components/Icon"
import { Avatar, Box, Button, Flex, Heading, Text } from "@chakra-ui/react"

export default function NutritionistPage(){
    return (
<Box className="bg-primaryYellowTrans" h={'100vh'} px={6} overflowY={'auto'} pb={8}>
    <Box  maxW={'1300'} mx={'auto'}>

<Heading size={'lg'} my={4} bg={'white'} py={4} px={3} rounded={'md'}>Find Nutritionist from around the world</Heading>
<Flex gap={6} wrap={'wrap'}>


<Box bg={'white'} rounded={'md'} px={4} py={5} flex={1} minW={500} >
    <Flex align={'start'} gap={4} mb={5}>

<Avatar size={'lg'} src="/images/f-user-47.jpg"/> 
<Box>
<Heading className="text-primaryGreen" as={'h3'} mb={2} size={'md'}>Michelle Sanchez</Heading>
<Text as={Flex} gap={1} className="text-secondaryGray"><Icon name="location_on" size={20}/> Mexico</Text>
</Box>
<Button ml={'auto'} className="bg-primaryYellow text-primaryGreen" gap={2} rounded={'full'} size={'md'}><Icon size={24} name="book"/> Book an Appointment</Button>
    </Flex>
    <Box>
        <Heading mb={3} as={'h4'} size={'md'} className="text-primaryGreen" >About Michelle</Heading>
        <Text pb={4} className="text-primaryGray">
        Michelle is a passionate nutritionist dedicated to helping individuals achieve their health and wellness goals through proper nutrition. With a Bachelor's degree in Nutrition and years of experience in the field, she possesses a deep understanding of the vital role that food plays in our lives.
        </Text>
    </Box>

</Box>
<Box bg={'white'} rounded={'md'} px={4} py={5} flex={1} minW={500}>
    <Flex align={'start'} gap={4} mb={5}>

<Avatar size={'lg'} src="/images/m-user-30.jpg"/> 
<Box>
<Heading className="text-primaryGreen" as={'h3'} mb={2} size={'md'}>Chris Eze</Heading>
<Text as={Flex} gap={1} className="text-secondaryGray"><Icon name="location_on" size={20}/> Nigeria</Text>
</Box>
<Button ml={'auto'} className="bg-primaryYellow text-primaryGreen" gap={2} rounded={'full'} size={'md'}><Icon size={24} name="book"/> Book an Appointment</Button>
    </Flex>
    <Box>
        <Heading mb={3} as={'h4'} size={'md'} className="text-primaryGreen" >About Chris</Heading>
        <Text pb={4} className="text-primaryGray">
        Chris is a seasoned nutritionist with a strong commitment to improving lives through the power of nutrition. Armed with a Master's degree in Nutritional Science and a wealth of expertise, he brings a holistic perspective to the table.  </Text>
    </Box>

</Box>
<Box bg={'white'} rounded={'md'} px={4} py={5} flex={1} minW={500}>
    <Flex align={'start'} gap={4} mb={5}>

<Avatar size={'lg'} src="/images/f-user-53.jpg"/> 
<Box>
<Heading className="text-primaryGreen" as={'h3'} mb={2} size={'md'}>Rachel Brooke</Heading>
<Text as={Flex} gap={1} className="text-secondaryGray"><Icon name="location_on" size={20}/> United States</Text>
</Box>
<Button ml={'auto'} className="bg-primaryYellow text-primaryGreen" gap={2} rounded={'full'} size={'md'}><Icon size={24} name="book"/> Book an Appointment</Button>
    </Flex>
    <Box>
        <Heading mb={3} as={'h4'} size={'md'} className="text-primaryGreen" >About Rachel</Heading>
        <Text pb={4} className="text-primaryGray">
        Rachel is a dedicated nutritionist on a mission to inspire healthier living through balanced eating. Armed with a Bachelor's degree in Nutrition and years of practical experience, she possesses a deep-rooted passion for helping individuals unlock their full wellness potential.  </Text>
    </Box>

</Box>
<Box bg={'white'} rounded={'md'} px={4} py={5} flex={1} minW={500}>
    <Flex align={'start'} gap={4} mb={5}>

<Avatar size={'lg'} src="/images/f-user-26.jpg"/> 
<Box>
<Heading className="text-primaryGreen" as={'h3'} mb={2} size={'md'}>Anna Will</Heading>
<Text as={Flex} gap={1} className="text-secondaryGray"><Icon name="location_on" size={20}/> United States</Text>
</Box>
<Button ml={'auto'} className="bg-primaryYellow text-primaryGreen" gap={2} rounded={'full'} size={'md'}><Icon size={24} name="book"/> Book an Appointment</Button>
    </Flex>
    <Box>
        <Heading mb={3} as={'h4'} size={'md'} className="text-primaryGreen" >About Anna</Heading>
        <Text pb={4} className="text-primaryGray">
        Anna is a highly skilled nutritionist with a strong commitment to promoting wellness through informed dietary choices. Holding a Master's degree in Nutritional Science and a wealth of experience, she brings a comprehensive understanding of the intricate relationship between nutrition and health. 
        </Text>
    </Box>

</Box>
</Flex>
    </Box>
</Box>
    )
}