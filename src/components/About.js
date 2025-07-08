import React from "react";
import {
  Image,
  Container,
  Flex,
  Stack,
  Text,
  Link,
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
              src="https://user-images.githubusercontent.com/71687298/204715951-2c26f338-42c2-47f8-889d-b7087ebf90e0.jpg"
            />
          </Flex>
          <Box>
            <Container>
              <Text fontSize="3xl" fontWeight="bold">
                About Me
              </Text>
              <Text fontSize="5x1">
                Hi, I’m Wendy Ng — a full stack software developer passionate about building clean, user-friendly web applications.
                I love those “aha” moments in programming and enjoy turning complex problems into elegant, maintainable solutions that align with real user needs.
                I’m currently a Full Stack Developer at CXS Analytics, where I contribute to
                <Link href="https://www.mynext.my/" isExternal color="teal.500" fontWeight="bold">
                  MyNext
                </Link>{' '}, a national career development platform serving over 200,000 users.
                Previously, I worked at {' '}
                  <Link href="https://www.placespeak.com/" isExternal color="teal.500" fontWeight="bold">
                    PlaceSpeak
                  </Link>
                  , a civic tech SaaS platform for geo-targeted public engagement. 
                I led key frontend projects including a full homepage redesign, UX improvements, and interactive features for clients such as Elections Yukon, Environment and Climate Change Canada, and the Public Health Association of BC.
                I’m open to opportunities where I can grow as a developer, collaborate with great teams, and contribute to meaningful, impactful products.
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
                  Post-Graduate Diploma, Business - University of British Columbia
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
