import { Center, Text } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
const FooterSection = styled.div`
  height: auto;
  color: white;
  background-color: #4158d0;
  background-image: linear-gradient(to right, #fc5c7d, #6a82fb);
  width: 100%;
`;
function Footer() {
  return (
    <FooterSection>
      <Center>Created using React & Chakra UI &copy; Wendy Ng | 2022</Center>
    </FooterSection>
  );
}
export default Footer;
