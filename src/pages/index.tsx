import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Banner from "../componets/Banner";
import Header from "../componets/header";
import { Slider } from "../componets/Slider";
import { TravelTypes } from "../componets/TravelTypes";
import { api } from "../services/api";

type Continent = {
  id: number;
  title: string;
  description: string;
  image: string;
};

interface HomeProps {
  continents: Continent[];
}

const Home = ({ continents }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Home | woldTrip</title>
      </Head>
      <Header />
      <Flex align="center" flexDir="column">
        <Banner />
        <TravelTypes />
        <Divider borderColor="gray.700" w={["60px", "90px"]} mt={[8, 16]} />
        <Heading
          as="h2"
          color="gray.700"
          fontWeight={"medium"}
          mt={[6, 12]}
          fontSize={["2xl", "4xl"]}
          lineHeight={[7, "3.375rem"]}
          textAlign="center"
        >
          Vamos nessa?
          <br /> Então escolha seu continente
        </Heading>
        <Slider continents={continents} />
      </Flex>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: continents } = await api.get("/continents");

  return {
    props: {
      continents,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  };
};

export default Home;
