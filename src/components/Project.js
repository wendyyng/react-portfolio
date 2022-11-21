import React, { useEffect } from "react";
import {
  useMediaQuery,
  Image,
  Container,
  Flex,
  Stack,
  Text,
  Box,
  Link,
  Wrap,
  Center,
  chakra,
} from "@chakra-ui/react";
import { projects } from "../projects.data";

function Projects() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");

  return (
    <Stack
      data-aos="fade-down"
      _dark={{
        bg: "#3e3e3e",
      }}
      bg="#eeeee4"
    >
      <Center>
        <Text fontSize="4xl" fontWeight="bold" mt={20}>
          Projects
        </Text>
      </Center>
      <Flex alignItems="center" justifyContent="center">
        {/* bg="#edf3f8" */}
        <Wrap
          m={10}
          w="100"
          p="10"
          rounded="lg"
          alignItems="center"
          justify="center"
        >
          {projects.map((project) => {
            return (
              <>
                <Box
                  my="5"
                  w="sm"
                  mx="20"
                  bg="white"
                  _dark={{
                    bg: "gray.800",
                  }}
                  shadow="lg"
                  rounded="lg"
                  overflow="hidden"
                >
                  <Image
                    w="full"
                    h={56}
                    fit="cover"
                    objectPosition="top"
                    src={project.imageUrl}
                    alt="screenshot"
                  />

                  <Box py={4} px={6}>
                    <chakra.h1
                      fontSize="xl"
                      fontWeight="bold"
                      color="gray.800"
                      _dark={{
                        color: "white",
                      }}
                    >
                      {project.title}
                    </chakra.h1>

                    <chakra.p
                      fontWeight="bold"
                      py={2}
                      color="gray.700"
                      _dark={{
                        color: "gray.400",
                      }}
                    >
                      {project.description}
                    </chakra.p>
                    <chakra.p
                      py={2}
                      color="gray.700"
                      _dark={{
                        color: "gray.400",
                      }}
                    >
                      Stack: {project.stack}
                    </chakra.p>
                    <Flex alignItems="center" justifyContent="center">
                      <Box mt={3} mb="2">
                        {project.liveLink ? (
                          <Link
                            href={project.liveLink}
                            isExternal
                            color="gray.100"
                            bgGradient="linear(to-l, #7928CA, #FF0080)"
                            px={5}
                            py={3}
                            fontWeight="semibold"
                            rounded="lg"
                            _hover={{
                              bgGradient: "linear(to-r, green.200, pink.500)",
                            }}
                            _dark={{
                              bg: "purple.700",
                            }}
                          >
                            View Live
                          </Link>
                        ) : (
                          ""
                        )}

                        <Link
                          href={project.githubLink}
                          isExternal
                          bgGradient="linear(to-r, blue.500, purple.400)"
                          color="gray.100"
                          px={5}
                          py={3}
                          mx={2}
                          fontWeight="semibold"
                          rounded="lg"
                          _hover={{
                            bgGradient: "linear(to-r, blue.200, pink.300)",
                          }}
                          _dark={{
                            bg: "#284b63",
                          }}
                        >
                          See Code
                        </Link>
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              </>
            );
          })}
        </Wrap>
      </Flex>
    </Stack>
  );
}

export default Projects;
