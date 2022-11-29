import React, {useState } from 'react'
import { useMediaQuery, Image, Container, Flex, Stack, Text, Box, VStack } from '@chakra-ui/react'
import styled from 'styled-components';

const AboutSection = styled.div`
   #about-container{
    display: flex;
    flex-direction: column;
   } 
    @media only screen and (min-width: 950px) {
        #about-container{
            flex-direction: row
            
        }
    }
}
`
function About() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");
  return (
    <Stack py={20}>
        <AboutSection >
            <Flex id="about-container">
            <Flex alignItems='center' justifyContent="center" mb={8}>
            <Image 
                borderRadius='full'
                boxSize="300px" src='https://avatars.githubusercontent.com/u/71687298?v=4' />
            </Flex>
            <Box>
            <Container>
                <Text fontSize="3xl" fontWeight="bold">About Me</Text>
                <Text fontSize="5x1">Hi, I am Wendy Ng, a web developer based in Vancouver BC, Canada. 
                Having recently completed the full-stack web development program at CodeCore College, 
                I am now looking for a full-time position in web development.
                Prior to this program, I have worked in international relations and accounting. 
                {/* During my time at my previous company as an accountant, 
                I had the opportunity to work closely with a software engineer to develop the in-house accounting software. */}
                {/* I had heard people saying "coding is the new literacy", and thought "why not?", and started my journey of learning programming.
                After self-studying for a few months, I figured out I liked programming more than accounting! */}
                {/* Fortunately, I was accepted into a government funded program called "Youth in Tech", and received full financial support to enrol in the
                CodeCore Web Development program. */}
                I really love the 'aha' moments in programming and am passionate about making efficient, beautiful and user-friendly web applications.
                </Text>
                <br />

                <VStack spacing="3px" align="start">
                <Text fontSize="3xl" fontWeight="bold">Education</Text>
                <Text fontSize="5x1">Diploma, Web Development - CodeCore College</Text>
                <Text fontSize="5x1">Bachelor of Arts, Economics - University of Calgary</Text>
                {/* <Text fontSize="5x1">Post-Graduate Diploma, Accounting - University of British Columbia</Text> */}

                </VStack>
            </Container>
            </Box>
            </Flex>
        </AboutSection>
    </Stack>
  )
}

export default About
