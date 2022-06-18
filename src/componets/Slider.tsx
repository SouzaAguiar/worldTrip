import { Flex, Heading, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Link from "next/link";

type Continent = {
  id: number;
  title: string;
  description: string;
  image: string;
};

interface SliderProps {
  continents: Continent[];
}

export const Slider = ({ continents }: SliderProps) => {
  return (
    <Flex w="100%" maxW="1240px" h={["250px", "450px"]} mb={10} mt={12}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        style={{ width: "100%", height: "100%" }}
        autoplay={{ delay: 5000 }}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.title}>
            <Flex
              bgImage={`url(${continent.image})`}
              bgSize="cover"
              w="100%"
              h="100%"
              flexDir="column"
              justify="center"
              align="center"
            >
              <Link href={`/continents/${continent.id}`}>
                <a>
                  <Heading
                    as="h1"
                    fontSize={["2xl", "5xl"]}
                    fontWeight="bold"
                    color="gray.100"
                  >
                    {continent.title}
                  </Heading>
                  <Text
                    fontSize={["sm", "2xl"]}
                    fontWeight="bold"
                    mt={[3, 4]}
                    color="gray.300"
                  >
                    {continent.description}
                  </Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};
