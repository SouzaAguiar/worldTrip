import { Flex, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { Citys } from "../../componets/Citys";
import { ContinentBanner } from "../../componets/ContinentBanner";
import { ContinentInfo } from "../../componets/ContinentInfo";
import Header from "../../componets/header";
import { api } from "../../services/api";

type City = {
  city: string;
  image: string;
  country: string;
  flagCode: string;
};

type Continent = {
  id: number;
  title: string;
  description: string;
  image: string;
  body: string;
  countries: string;
  languegues: string;
  citys: City[];
};

interface Continentprops {
  continent: Continent;
}
const continent = ({ continent }: Continentprops) => {
  return (
    <>
      <Head>
        <title>{continent.title} | woldTrip</title>
      </Head>
      <Header />
      <ContinentBanner image={continent.image} title={continent.title} />
      <Flex
        justify="center"
        align="center"
        maxW="1160"
        mx="auto"
        mt={[6, 20]}
        flexDir="column"
      >
        <Flex
          flexDir={["column", "row"]}
          justify="space-between"
          align="center"
          w="100%"
        >
          <Text h={48} w={["343px", "600px"]} fontSize={["sm", "2xl"]}>
            {continent.body}
          </Text>
          <ContinentInfo continent={continent} />
        </Flex>
        <Citys citys={continent.citys} mt={[8, 20]} mb={[4, 8]} />
      </Flex>
    </>
  );
};

export default continent;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: continents } = await api.get<Continent[]>("/continents");

  return {
    paths: continents.map((continent) => ({
      params: { id: String(continent.id) },
    })),
    fallback: false,
  };
};
interface Params extends ParsedUrlQuery {
  id: string;
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: continents } = await api.get<Continent[]>("/continents");
  const { id } = params as Params;

  const continent = continents.find((continent) => continent.id === Number(id));

  return {
    props: {
      continent,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  };
};
