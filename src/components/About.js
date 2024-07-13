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
                Hi, I'm Wendy Ng, a dedicated software developer actively seeking new opportunities. 
                I love the 'aha' moments in programming and am deeply passionate about 
                crafting efficient, elegant, and user-friendly web applications. 
                With experience as a Frontend Developer at PlaceSpeak, 
                I led significant projects such as homepage redesigns, client-requested feature implementations, 
                and UI/UX improvements. 
                Currently, I am eager to secure a full-time position in software development 
                where I can continue to expand my skills and contribute meaningfully.
              </Text>
              <br />

              <VStack spacing="3px" align="start">
                <Text fontSize="3xl" fontWeight="bold">
                  Education
                </Text>
                <Text fontSize="5x1">
                  Diploma, Web Development - CodeCore College, Canada
                </Text>
                <Text fontSize="5x1">
                  Bachelor of Arts, Economics - University of Calgary, Canada
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
