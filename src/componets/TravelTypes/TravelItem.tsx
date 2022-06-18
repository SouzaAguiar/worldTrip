import { Flex, Image, Text } from "@chakra-ui/react";

interface TravelItemProps {
  icon: "building" | "cocktail" | "earth" | "surf" | "museum" | "Ellipse";
  text: string;
  alt?: string;
}

export const TravelItem = ({ text, icon, alt }: TravelItemProps) => {
  return (
    <Flex flexDir={["row", "column"]} justify="center" align="center">
      <Image src={`/images/${icon}.svg`} alt={alt} mb={[0, 6]} mr={[6, 0]} />
      <Text
        fontWeight="600"
        fontSize={["md", "xl"]}
        lineHeight="base"
        align="center"
        color="gray.700"
      >
        {text}
      </Text>
    </Flex>
  );
};
