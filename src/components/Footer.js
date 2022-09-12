import {Center, Text } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';

function Footer() {

    const Footer = styled.div`
    height: 5rem;
    color: white;
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    width: 100%;
    height: 3rem;
    `

  return (
    <Footer>
    <Center pt={['2', '2', '3', '3']}>Created using React & Chakra UI &copy; Wendy Ng | 2022
    </Center>
    </Footer>
  )
}

export default Footer