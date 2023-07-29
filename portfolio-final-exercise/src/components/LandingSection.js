import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

// const greeting = "Irawan here, apakabar?";
const bio1 = "Irawan's web portfolio";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#34495f"
  >
    {/* The UI for the landing section */}
    <VStack spacing={16}>
      <VStack spacing={4}>
        <Avatar src="https://irawan.io/images/irawan.png" size="2xl" name="Irawan" />
        <Heading as="p" size="lg" noOfLines={1}>{greeting}</Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" noOfLines={1}>{bio1}</Heading>
      </VStack>
    </VStack>
    {/* The UI for the landing section */}
  </FullScreenSection>
);

export default LandingSection;