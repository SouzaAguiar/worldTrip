import { Heading, Flex, Text } from "@chakra-ui/react";
interface ContinentBannerprops {
  title: string;
  image: string;
}
export const ContinentBanner = ({ title, image }: ContinentBannerprops) => {
  return (
    <>
      <Flex
        w="100%"
        bgImage={`url(${image})`}
        bgSize="cover"
        bgPos="center"
        h={["150px", "500px"]}
        pl={36}
        pb={14}
        align={["center", "end"]}
      >
        <Heading color={"gray.100"} fontSize={["2xl", "5xl"]}>
          {title}
        </Heading>
      </Flex>
    </>
  );
};
