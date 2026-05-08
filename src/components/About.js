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
    <Stack py={20} pb={5}>
      <AboutSection>
        <Flex id="about-container">
          <Flex alignItems="center" justifyContent="center" mb={8}>
            <Image
              borderRadius="full"
              boxSize="300px"
              src="/profile-picture.png"
              alt="Wendy Ng"
            />
          </Flex>
          <Box>
            <Container>
              <Text fontSize="3xl" fontWeight="bold">
                About Me
              </Text>
              <Text fontSize="5x1">
                Hi, I’m Wendy Ng — a full-stack software developer who enjoys turning complex problems into clean, user-friendly web applications.
                  <br /><br />
                  I have built and maintained the MyNext platform — 
                  a system that connects students, universities, and companies to empower talent development and career readiness, 
                  supporting over 200,000 users.
                  I have also worked at PlaceSpeak, where I led frontend projects like homepage redesign and custom features for government clients across Canada.
                  <br /><br />
                  I’m open to new opportunities where I can grow and make an impact through great code and collaboration.
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
                <Text fontSize="5x1">
                  Post-Graduate Diploma, Business - University of British Columbia, Canada
                </Text>
              </VStack>
            </Container>
          </Box>
        </Flex>
      </AboutSection>
    </Stack>
  );
}

export default About;
