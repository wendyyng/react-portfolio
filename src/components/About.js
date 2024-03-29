import React from "react";
import {
  Image,
  Container,
  Flex,
  Stack,
  Text,
  Box,
  VStack,
} from "@chakra-ui/react";
import styled from "styled-components";

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
`;

function About() {
  return (
    <Stack py={20}>
      <AboutSection>
        <Flex id="about-container">
          <Flex alignItems="center" justifyContent="center" mb={8}>
            <Image
              borderRadius="full"
              boxSize="300px"
              src="https://user-images.githubusercontent.com/71687298/204715951-2c26f338-42c2-47f8-889d-b7087ebf90e0.jpg"
            />
          </Flex>
          <Box>
            <Container>
              <Text fontSize="3xl" fontWeight="bold">
                About Me
              </Text>
              <Text fontSize="5x1">
                Hi, I am Wendy Ng, a full-stack developer based in Vancouver BC,
                Canada. Having completed the full-stack web development program
                at CodeCore College, I am now looking for a full-time position
                in web development. Prior to this program, I have worked in
                higher education and accounting. I really love the 'aha'
                moments in programming and am passionate about making efficient,
                beautiful and user-friendly web applications.
              </Text>
              <br />

              <VStack spacing="3px" align="start">
                <Text fontSize="3xl" fontWeight="bold">
                  Education
                </Text>
                <Text fontSize="5x1">
                  Diploma, Web Development - CodeCore College
                </Text>
                <Text fontSize="5x1">
                  Bachelor of Arts, Economics - University of Calgary
                </Text>
                {/* <Text fontSize="5x1">Post-Graduate Diploma, Accounting - University of British Columbia</Text> */}
              </VStack>
            </Container>
          </Box>
        </Flex>
      </AboutSection>
    </Stack>
  );
}

export default About;
