import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import {Text, Stack, Link } from '@chakra-ui/react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Contact() {
    return (
        <Stack spacing={3}>
        <Text fontSize='4xl'>Contact Me!</Text>
        <HStack spacing="24">
            <Link href='https://www.linkedin.com/in/wendyywng/' isExternal>
                <Icon as={FaLinkedin} boxSize="50" color="pink.500"/>
            </Link>
            <Link href='https://github.com/wendyyng' isExternal>
                <Icon as={FaGithub} boxSize="50" color="pink.500"/>
            </Link>
        </HStack>
        </Stack>
    )
}

export default Contact