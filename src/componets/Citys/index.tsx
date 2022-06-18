import {
  Box,
  Heading,
  BoxProps,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";

import { City } from "./Item";
type City = {
  city: string;
  image: string;
  country: string;
  flagCode: string;
};

interface CityProps extends BoxProps {
  citys: City[];
}
export const Citys = ({ citys, ...rest }: CityProps) => {
  const isWideversion = useBreakpointValue({
    base: true,
    lg: false,
  });
  return (
    <Box maxW="1160Px" w={["300px", "1160px"]} {...rest}>
      <Heading mb={[5, 10]} fontSize={["2xl", "4xl"]}>
        Cidades +100
      </Heading>
      <Flex
        flexDir={["column", "row"]}
        w="100%"
        align="center"
        justifyContent="space-between"
      >
        {citys.map((city) => (
          <City key={city.city} city={city} mb={isWideversion ? 5 : 0} />
        ))}
      </Flex>
    </Box>
  );
};
