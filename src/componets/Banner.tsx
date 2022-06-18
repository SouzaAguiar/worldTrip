import {
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

const Banner: React.FC = () => {
  const isWideversion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      h={["163", "368px"]}
      w="100%"
      px={[4, 16]}
      bgImage="url('/images/Background.png')"
      bgSize="cover"
      bgPos="center"
    >
      <Flex w="100%" justify="space-between" align="center" position="relative">
        <div>
          <Heading
            fontSize={["xl", "4xl"]}
            lineHeight={[7, 10]}
            fontWeight="semibold"
            color="gray.100"
            w={["238px", "426px"]}
          >
            5 Continentes,
            <br /> infinitas possibilidades.
          </Heading>
          <Text
            fontSize={["sm", "xl"]}
            fontWeight="normal"
            color="gray.300"
            w={["95%", "524px"]}
            mt={[2, 5]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </div>
        {isWideversion && (
          <Image
            src="/images/Airplane.svg"
            alt="Avião voando entre nuvens"
            w="417.px"
            h="270.26px"
            transform="rotate(3deg)"
            position="absolute"
            bottom={-4}
            right={0}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default Banner;
