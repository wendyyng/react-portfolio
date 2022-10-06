import React, { useEffect } from 'react'
import { useMediaQuery, Image, Container, Flex, Stack, Text, Box, Link, Wrap} from '@chakra-ui/react'
import { Center, chakra } from '@chakra-ui/react';

function Projects() {

  const projects = [
    {
      title: "#ThankYouFrontlineWorkers Project",
      stack: "PHP, MySQL, HTML, CSS, Bootstrap",
      description: "A responsive website to collect thank you messages from the community to express gratitude for the frontline workers.",
      imageUrl: "https://user-images.githubusercontent.com/71687298/194402137-476d8e2e-899c-48cb-ab4f-e3b64790bfcc.png",
      githubLink: "https://github.com/wendyyng/php_thank_you",
      liveLink: ""
    },

    {
      title: "FriendMe",
      stack: "Ruby on Rails, ERB, Semantic UI, Bootstrap, HTML, CSS, Javascript, Google Maps API, PostgreSQL",
      description: "FriendMe is a social media platform where users can join groups, register for events and make friends with other users.",
      imageUrl: "https://user-images.githubusercontent.com/71687298/188759181-74097d81-816a-40b0-8e8e-69fd80246a6e.png",
      githubLink: "https://github.com/wendyyng/social_media_app",
      liveLink: "https://www.youtube.com/watch?v=XcQoe7GQQP4"
    },
    {
      title: "Delish",
      stack: "Ruby on Rails, ERB, Bootstrap, HTML, CSS, PostgreSQL",
      description: "Delish is a homemade meal web app for home cooks to create meals and customers to search and order meals - collaborative project, a team of 5.",
      imageUrl: "https://user-images.githubusercontent.com/71687298/189031637-3f7faac4-a811-4df8-a47e-ec2d4f9a5895.png",
      githubLink: "https://github.com/wendyyng/Homemade_Meals_APP",
      liveLink: "https://homemade-meal-app.herokuapp.com/"
    },
    {
      title: "Biddr",
      stack: "Ruby on Rails, React.js, Bootstrap, HTML, CSS, Javascript, PostgreSQL",
      description: "Biddr is an auction app that allows users to create auctions and place bids. Users can see the current highest price and if the reserve price is met.",
      imageUrl: "https://user-images.githubusercontent.com/71687298/191143883-075b08b0-6837-4e37-9ad3-aee3e1cd08ce.png",
      githubLink: "https://github.com/wendyyng/Biddr",
      liveLink: "https://youtu.be/96SQJTRQIVI"
    },
    {
      title: "Super Team Picker",
      stack: "NodeJS, Express, Bootstrap, Knex.js, PosgreSQL",
      description: "Super Team Picker allows users to create cohorts and randomly generate teams based on selected methods: team count/ number per team.",
      imageUrl: "https://user-images.githubusercontent.com/71687298/189564121-3d26a20b-71b6-426d-bab1-170894f84f8c.png",
      githubLink: "https://github.com/wendyyng/Super_Team_Picker",
      liveLink: "https://youtu.be/XdJQSqc3XBE"
    },
    {
      title: "Hangman",
      stack: "Javascript, jQuery, Bootstrap, HTML, CSS",
      description: "A frontend-only word guessing game. Players can play by clicking on the letters on the page or pressing the keyboard keys.",
      imageUrl: "https://user-images.githubusercontent.com/71687298/189029661-a7ea0e84-8092-4c86-9431-a702a0f0e3a9.png",
      githubLink: "https://github.com/wendyyng/Hangman",
      liveLink: "https://wendyyng.github.io/Hangman/"
    },
    {
      title: "CutieCats Search",
      stack: "React.js, JSX, JavaScript, HTML, CSS",
      description: "A React app that generates cat cards with the names and emails fetched from the API. Users can search the cats by name using the search bar.",
      imageUrl: "https://user-images.githubusercontent.com/71687298/189562835-6921ed7f-1388-438b-ac81-79f767e0dcd6.png",
      githubLink: "https://github.com/wendyyng/cutiecats_search",
      liveLink: "http://cutiecats-search.vercel.app/"
    },
        {
      title: "Portfolio Website",
      stack: "React.js, Chakra UI, JavaScript, HTML, CSS",
      description: "This fully responsive portfolio website was built with React and Chakra UI. Click the sun/moon icon at the top-right corner to toggle between dark and light mode.",
      imageUrl: "https://user-images.githubusercontent.com/71687298/190548542-9d68ccc2-69b0-442f-b206-aa4f5d872374.png",
      githubLink: "https://github.com/wendyyng/react-portfolio",
      liveLink: "https://wendy-ng.vercel.app/"
    },

    // {
    //   title: "Calculator",
    //   stack: "JavaScript, HTML, CSS",
    //   description: "An on-screen calculator app with basic arithmetic operations (divide, multiple, add, subtract) developed using HTML, CSS and Javascript.",
    //   imageUrl: "https://user-images.githubusercontent.com/71687298/191097977-f38484bc-f47f-4edd-8bcd-0fd52c0c2ffc.png",
    //   githubLink: "https://github.com/wendyyng/calculator-odin-project",
    //   liveLink: "https://wendyyng.github.io/calculator-odin-project/"
    // },
    // {
    //   title: "My First Portfolio Website",
    //   stack: "HTML, CSS",
    //   description: "My firts portfolio website that I built using plain HTML and CSS",
    //   imageUrl: "https://user-images.githubusercontent.com/71687298/189043433-bdfbf414-0317-44a7-83be-bd40def3d215.png",
    //   githubLink: "https://github.com/wendyyng/calculator-odin-project",
    //   liveLink: "https://wendyyng.github.io/calculator-odin-project/"
    // },
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

      <Box data-aos="fade-down"
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
              _dark={{
                bg: "purple.700",
              }}
            >
              View Live
            </Link> : ""}
           
            <Link
              href={project.githubLink} isExternal
              bgGradient='linear(to-r, blue.500, purple.400)'
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
        )
    })}
    </Wrap>

  </Flex>
  </Stack>
  )
}

export default Projects