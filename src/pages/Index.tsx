import { Box, Button, Flex, Heading, Image, Text, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaGithub, FaSlack, FaGoogle, FaMicrosoft, FaApple } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="black" color="white" textAlign="center" py={20}>
        <Heading as="h1" size="2xl" mb={4}>Everything App for your teams</Heading>
        <Text fontSize="lg" mb={6}>Help your team collaborate, communicate, and coordinate effectively with our all-in-one platform.</Text>
        <Button colorScheme="orange" size="lg">Get Started</Button>
      </Box>

      {/* Productivity Section */}
      <Box py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={10}>Unmatched productivity</Heading>
        <Flex justify="center" mb={10}>
          <Image src="/images/productivity.png" alt="Productivity" />
        </Flex>
        <Flex justify="space-around">
          <VStack>
            <Image src="/images/feature1.png" alt="Feature 1" />
            <Text>Feature 1: Time tracking</Text>
          </VStack>
          <VStack>
            <Image src="/images/feature2.png" alt="Feature 2" />
            <Text>Feature 2: Project management</Text>
          </VStack>
          <VStack>
            <Image src="/images/feature3.png" alt="Feature 3" />
            <Text>Feature 3: Notifications</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Collaboration Section */}
      <Box py={20} textAlign="center" bg="gray.50">
        <Heading as="h2" size="xl" mb={10}>Work together. Like in the office.</Heading>
        <Text fontSize="lg" mb={6}>Collaborate with remote teams as if you were in the same room. Enjoy real-time communication within your workspace without additional software hassle.</Text>
        <HStack justify="center" spacing={6}>
          <Icon as={FaSlack} boxSize={10} />
          <Icon as={FaGoogle} boxSize={10} />
          <Icon as={FaMicrosoft} boxSize={10} />
          <Icon as={FaApple} boxSize={10} />
        </HStack>
      </Box>

      {/* GitHub Sync Section */}
      <Box py={20} textAlign="center" bg="black" color="white">
        <Heading as="h2" size="xl" mb={10}>Sync with GitHub. Both ways.</Heading>
        <Flex justify="space-around">
          <VStack>
            <Text>Two-way synchronization</Text>
            <Text>Milestone migration</Text>
          </VStack>
          <VStack>
            <Text>Private tasks</Text>
            <Text>Track progress</Text>
          </VStack>
          <VStack>
            <Text>Multiple repositories</Text>
            <Text>Advanced filtering</Text>
          </VStack>
        </Flex>
      </Box>

      {/* MetaBrain Section */}
      <Box py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={10}>Huly MetaBrain</Heading>
        <Text fontSize="lg" mb={6}>Huly offers a wide range of features to create and manage your project efficiently. With a suite of collaboration and editing tools built-in.</Text>
        <Flex justify="space-around">
          <VStack>
            <Text>Real-time collaboration</Text>
            <Text>Document sharing</Text>
          </VStack>
          <VStack>
            <Text>Task management</Text>
            <Text>Note-taking</Text>
          </VStack>
          <VStack>
            <Text>Assigning action items</Text>
            <Text>Meeting notes</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Join Section */}
      <Box py={20} textAlign="center" bg="black" color="white">
        <Heading as="h2" size="xl" mb={10}>Join the Movement</Heading>
        <Button colorScheme="orange" size="lg">Get Started</Button>
      </Box>
    </Box>
  );
};

export default Index;