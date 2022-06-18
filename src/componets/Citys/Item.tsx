import { Box, Flex, Heading, Image, Text, FlexProps } from "@chakra-ui/react";

interface City extends FlexProps {
  city: {
    city: string;
    image: string;
    country: string;
    flagCode: string;
  };
}

export const City = ({ city, ...rest }: City) => {
  return (
    <Flex
      w={64}
      h="279px"
      flexDir="column"
      borderRadius={4}
      overflow="hidden"
      bg="#ffff"
      border="1px"
      borderColor="yellow.300"
      {...rest}
    >
      <Image src={city.image} alt={city.city} w="100%" h="173px" />
      <Flex align="center" w="100%" px={6} flex="1">
        <Box>
          <Heading
            fontSize="xl"
            lineHeight="base"
            fontWeight="semibold"
            color="gray.700"
          >
            {city.city}
          </Heading>
          <Text fontSize="md" lineHeight="tall" color="gray.500">
            {city.country}
          </Text>
        </Box>
        <Image
          src={`https://countryflagsapi.com/svg/${city.flagCode}`}
          alt={city.country}
          w={8}
          h={8}
          borderRadius="50%"
          objectFit="cover"
          ml="auto"
        />
      </Flex>
    </Flex>
  );
};
