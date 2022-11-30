import React from "react";
import {
  Box,
  Grid,
  Text,
  GridItem,
  Image,
  Center,
  Flex,
} from "@chakra-ui/react";
import styled from "styled-components";

import { skills } from "../skills.data";

const SkillsSection = styled.div`
  width: 100%;
  margin-top: 0 !important;
  .skills_grid {
    grid-template-columns: repeat(6, 1fr);
  }

  #skills_grid_item {
    transition: transform 0.2s !important;
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
      gap: 5em;
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
`;

const Skills = () => {
  return (
    <SkillsSection>
      <Box
        py={5}
        pb={20}
        bg="#e6f4f7"
        rounded="lg"
        _dark={{
          bg: "#284b63",
        }}
      >
        <Text
          fontWeight="bold"
          textAlign="center"
          mt={20}
          mb={20}
          fontSize="4xl"
        >
          Skills
        </Text>

        <Center>
          <Grid className="skills_grid" ml="2">
            {skills.map((skill, index) => {
              return (
                <GridItem key={index} data-aos="flip-up">
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                  >
                    <Image
                      id="skills_grid_item"
                      w={["10", "12", "14", "16"]}
                      mb="2"
                      src={skill.imgUrl}
                    />
                    <Text>{skill.name}</Text>
                  </Flex>
                </GridItem>
              );
            })}
          </Grid>
        </Center>
      </Box>
    </SkillsSection>
  );
};

export default Skills;
