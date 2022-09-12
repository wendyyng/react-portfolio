import React from 'react'
import { useMediaQuery, Image, Container, Flex, Stack, Text, Box, Link, Wrap} from '@chakra-ui/react'
import Aos from "aos"
import "aos/dist/aos.css";
import { Center, chakra } from '@chakra-ui/react';



function Projects() {

  const projects = [
    {
      title: "FriendMe",
      stack: "Ruby on Rails, ERB, Semantic UI, Bootstrap, HTML, CSS, Javascript, Google Maps API, PostgreSQL",
      description: "FriendMe is a social media platform where users can join groups, register for events and make friends with other users.",
      imageUrl: "https://user-images.githubusercontent.com/71687298/188759181-74097d81-816a-40b0-8e8e-69fd80246a6e.png",
      githubLink: "https://github.com/wendyyng/social_media_app",
      liveLink: "https://friendme-app.herokuapp.com/"
    },
    {
      title: "Delish",
      stack: "Ruby on Rails, ERB, Bootstrap, HTML, CSS, PostgreSQL",
      description: "Delish is a homemade meal web app for home cooks to create meals and customers to search and order meals - collaborated project, team of 5.",
      imageUrl: "https://user-images.githubusercontent.com/71687298/189031637-3f7faac4-a811-4df8-a47e-ec2d4f9a5895.png",
      githubLink: "https://github.com/wendyyng/Homemade_Meals_APP",
      liveLink: "https://homemade-meal-app.herokuapp.com/"
    },
    {
      title: "Biddr",
      stack: "Ruby on Rails, React.js, Bootstrap, HTML, CSS, Javascript, PostgreSQL",
      description: "Biddr is an auctions app that allows users to create auctions and place bids. Users are able to see the current highest price and if the reserve price has been met. ",
      imageUrl: "https://user-images.githubusercontent.com/71687298/189024155-c57b1dac-2285-4218-9474-b3f121d581a7.png",
      githubLink: "https://github.com/wendyyng/Biddr",
      liveLink: ""
    },
    {
      title: "Super Team Picker",
      stack: "NodeJS, Express, Bootstrap, Knex.js, PosgreSQL",
      description: "Super Team Picker allows users to create cohorts and randomly generate teams based on selected methods: team count/ number per team and quantity ",
      imageUrl: "https://user-images.githubusercontent.com/71687298/189564121-3d26a20b-71b6-426d-bab1-170894f84f8c.png",
      githubLink: "https://github.com/wendyyng/Super_Team_Picker",
      liveLink: ""
    },
    {
      title: "Hangman",
      stack: "Javascript, jQuery, Bootstrap, HTML, CSS",
      description: "A front end only word guessing game. Players can play by clicking on the letters on the page or pressing the keyboard keys.",
      imageUrl: "https://user-images.githubusercontent.com/71687298/189029661-a7ea0e84-8092-4c86-9431-a702a0f0e3a9.png",
      githubLink: "https://github.com/wendyyng/Hangman",
      liveLink: "https://wendyyng.github.io/Hangman/"
    },
    {
      title: "CutieCats Search",
      stack: "React.js, JSX, JavaScript, HTML, CSS",
      description: "A React app that generates cat cards with the names and emails fetched from the API. Users can search the cats by names using the search bar.",
      imageUrl: "https://user-images.githubusercontent.com/71687298/189562835-6921ed7f-1388-438b-ac81-79f767e0dcd6.png",
      githubLink: "https://github.com/wendyyng/cutiecats_search",
      liveLink: "http://cutiecats-search.vercel.app/"
    },
  ]

  return (
   <Stack       
   _dark={{
    bg: "#3e3e3e",
  }}
  bg="#eeeee4">
    <Center>
       <Text fontSize="4xl" fontWeight="bold" mt={20}>Projects</Text>
    </Center>
    <Flex alignItems="center"
    justifyContent="center"
    > 
      {/* bg="#edf3f8" */}
    <Wrap

      m={10}
      w="100"
      p="10"
      rounded="lg"
      alignItems="center"
      justify='center'
    >
    {projects.map(project => {
        return(
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
      <Flex alignItems='center' justifyContent="center">
      <Box mt={4}>
            {project.liveLink ?  <Link 
            href={project.liveLink} isExternal
             color="gray.100"
              bgGradient='linear(to-l, #7928CA, #FF0080)'
              px={5}
              py={3}
              fontWeight="semibold"
              rounded="lg"
              _hover={{
                bgGradient: "linear(to-r, green.200, pink.500)",
              }}
            >
              View Live
            </Link> : ""}
           
            <Link
              href={project.githubLink} isExternal
              bgGradient='linear(to-r, green.200, pink.500)'
              color="gray.100"
              px={5}
              py={3}
              mx={2}
              fontWeight="semibold"
              rounded="lg"
              _hover={{
                bgGradient:'linear(to-l, #7928CA, #FF0080)',
              }}
            >
              See Code
            </Link>
          </Box>
          </Flex>

    
    </Box>
  </Box>

       
      </>
        )
    })}
    </Wrap>

  </Flex>
  </Stack>
  )
}

export default Projects