import React from "react";
import {
  Image,
  Card,
  CardBody,
  CardFooter,
  Center,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

import { experience } from "../data/experience.data";

const Experience = () => {
  return (
    <Flex
      w="100%"
      _dark={{
        bg: "#2c1c3c",
      }}
      bg="#dee1ed"
      justifyContent="center"
      pb={20}
      mb={0}
      rounded="lg"
    >
      <Stack>
        <Center>
          <Text fontSize="4xl" fontWeight="bold" m={20}>
            Experience
          </Text>
        </Center>
        <SimpleGrid spacing={5}>
          {experience.map((exp, index) => {
            return (
              <Card
                key={index}
                data-aos="fade-up"
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="filled"
                maxW="950"
                size="sm"
                shadow="lg"
                bg="white"
                rounded="lg"
                p={4}
                _dark={{
                  bg: "gray.800",
                }}
              >
                <Image
                  //   borderRadius="full"
                  boxSize="200px"
                  objectFit="cover"
                  // maxW={{ base: '100%', sm: '200px' }}
                  src={exp.company_logo}
                  alt="company-logo"
                />

                <Stack>
                  <CardBody p={4} pb={0}>
                    <Heading size="md" pb={1}>
                      {exp.position_title}
                    </Heading>
                    <Text pb={1}>{exp.company}</Text>
                    <Text pb={2}>{exp.date}</Text>
                    <UnorderedList mb={2}>
                      {exp.description.map((item) => {
                        return <ListItem>{item}</ListItem>;
                      })}
                    </UnorderedList>
                    <Text as="b">Skills: {exp.skills}</Text>
                  </CardBody>
                  <CardFooter p={1}>
                    {exp.github_link && (
                      <Link
                        href={exp.github_link}
                        isExternal
                        color="gray.100"
                        bgGradient="linear(to-l, #7928CA, #FF0080)"
                        px={5}
                        py={3}
                        fontWeight="semibold"
                        rounded="md"
                        _hover={{
                          bgGradient: "linear(to-r, green.200, pink.500)",
                        }}
                        _dark={{
                          bg: "purple.700",
                        }}
                      >
                        GitHub Repo
                      </Link>
                    )}
                  </CardFooter>
                </Stack>
              </Card>
            );
          })}
        </SimpleGrid>
      </Stack>
    </Flex>
  );
};

export default Experience;
