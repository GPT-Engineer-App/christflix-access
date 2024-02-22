import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaPlay, FaHeart, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  // Sample data for movie listings
  const movies = [
    { title: "Movie Title 1", description: "This is the description for movie 1." },
    { title: "Movie Title 2", description: "This is the description for movie 2." },
    // Add more movies as needed...
  ];

  return (
    <Box>
      {/* Navbar */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="blue.500" color="white">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            filmuxs
          </Heading>
        </Flex>
        <Flex align="center">
          <Link px="2rem">Home</Link>
          <Link px="2rem">Browse</Link>
          <Link px="2rem">About</Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Container maxW="container.xl" centerContent py={10}>
        <VStack spacing={5} textAlign="center">
          <Heading as="h2" size="2xl">
            Welcome to filmuxs
          </Heading>
          <Text fontSize="xl">Enjoy the latest movies and support Christ with every purchase!</Text>
          <Button size="lg" leftIcon={<FaPlay />} colorScheme="red">
            Watch Now
          </Button>
        </VStack>
        <Image src="https://images.unsplash.com/photo-1561722798-9a732d141027?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBzY3JlZW58ZW58MHx8fHwxNzA4NjE3OTIyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Cinema Screen" mt={10} boxSize="sm" objectFit="cover" borderRadius="lg" />
      </Container>

      {/* Movies List */}
      <Container maxW="container.xl" py={10}>
        <Heading as="h3" size="xl" mb={6}>
          Browse Movies
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {movies.map((movie, index) => (
            <Box key={index} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlcnxlbnwwfHx8fDE3MDg2MTc5MjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt={`${movie.title} Poster`} />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Button size="sm" leftIcon={<FaHeart />} colorScheme="pink" variant="outline">
                    Favorite
                  </Button>
                  <Button size="sm" leftIcon={<FaInfoCircle />} colorScheme="blue" variant="outline" ml={2}>
                    Details
                  </Button>
                </Box>
                <Heading mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                  {movie.title}
                </Heading>
                <Text mt={2} fontSize="sm" color="gray.500">
                  {movie.description}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box bg="blue.500" color="white" py={4}>
        <Flex align="center" justify="center">
          <Text>&copy; {new Date().getFullYear()} filmuxs. All rights reserved.</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
