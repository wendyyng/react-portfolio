import { Box, Grid, Text, GridItem, Image, Center, Flex } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';


const SkillsSection = styled.div`
    width: 100%;
    margin-top: 0 !important;
    .skills_grid {
        grid-template-columns: repeat(6, 1fr);
    }
    
    #skills_grid_item {
        transition: transform .2s !important;
        cursor: pointer;
    }
    #skills_grid_item:hover {
        transform: scale(1.2) !important;
    }
    
    /* Custom, iPhone Retina */
    @media only screen and (min-width: 320px) {
        .skills_grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 2em;
        }
    }
    
    /* Extra Small Devices, Phones */
    @media only screen and (min-width: 480px) {
        .skills_grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 3em;
        }
    }
    
    /* Small Devices, Tablets */
    @media only screen and (min-width: 768px) {
        .skills_grid {
        grid-template-columns: repeat(4, 1fr);
        gap:5em;
        }
    }
    
    /* Medium Devices, Desktops */
    @media only screen and (min-width: 992px) {
        .skills_grid {
        grid-template-columns: repeat(6, 1fr);
        }
    }
    
    /* Large Devices, Wide Screens */
    @media only screen and (min-width: 1200px) {
        .skills_grid {
        grid-template-columns: repeat(6, 1fr);
        }
    }
    `

const Technologies = [
    {
        name: "JavaScript",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },

    {
        name: "Ruby on Rails",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg"
    },
    {
        name: "PostgreSQL",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
    },
    {
        name: "React",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
        name: "NodeJs",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
        name: "ExpressJs",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    },
    {
        name: "HTML5",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
        name: "CSS3",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
        name: "SASS",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
    },
    {
        name: "Bootstrap",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
    },
    {
        name: "jQuery",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg"
    },
    {
        name: "Git",
        imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
]

const Skills = () => {
  return (
    <SkillsSection>
      <Box py="36" bg='#e6f4f7' rounded="lg" _dark={{
    bg: "#284b63",
  }}>
        <Text
          fontWeight="bold"
          textAlign="center"
          mb={16}
          fontSize="4xl"
        >
          Skills
        </Text>

        <Center>
          <Grid className="skills_grid" ml="2">
            {Technologies.map((tech) => {
                return(
                    <GridItem id={uuidv4()} data-aos="fade-down">
                        <Flex justifyContent="center" alignItems="center" direction="column">
                    <Image id='skills_grid_item'
                w={["10","12","14","16"]}
                mb="2"
                src={tech.imgUrl}
              />
              <Text >{tech.name}</Text>

                        </Flex>
            </GridItem>
                )
            })}
            
          </Grid>
        </Center>
      </Box>
      
    </SkillsSection>
  );
};

export default Skills;