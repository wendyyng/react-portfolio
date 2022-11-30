import React, { useState } from "react";
import {
  useMediaQuery,
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Center,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Button,
  Box,
  VStack,
} from "@chakra-ui/react";
import styled from "styled-components";
import { experience } from "../experience.data";

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
    >
      <Stack
      //   data-aos="fade-down"
      >
        <Center>
          <Text fontSize="4xl" fontWeight="bold" m={20}>
            Experience
          </Text>
        </Center>
        {experience.map((exp) => {
          return (
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="filled"
              maxW="850"
              size="sm"
              shadow="lg"
              bg="white"
              p={4}
              _dark={{
                bg: "gray.800",
              }}
            >
              <Image
                //   borderRadius="full"
                boxSize="200px"
                // objectFit='cover'
                // maxW={{ base: '100%', sm: '200px' }}
                src={exp.company_logo}
                alt="company-logo"
              />

              <Stack>
                <CardBody p={5} pb={0}>
                  <Heading size="md" pb={1}>
                    {exp.position_title}
                  </Heading>
                  <Text pb={1}>{exp.company}</Text>
                  <Text pb={2}>{exp.date}</Text>
                  <UnorderedList>
                    {exp.description.map((item) => {
                      return <ListItem>{item}</ListItem>;
                    })}
                  </UnorderedList>
                </CardBody>

                <CardFooter py={5}>
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
                </CardFooter>
              </Stack>
            </Card>
          );
        })}
      </Stack>
    </Flex>
  );
};

export default Experience;
