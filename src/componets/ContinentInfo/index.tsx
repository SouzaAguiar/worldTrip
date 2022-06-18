import { Flex } from "@chakra-ui/react";
import { ContinentInfoItem } from "./item";

type City = {
  city: string;
  image: string;
  country: string;
  flagCode: string;
};
interface ContinentInfoProps {
  continent: {
    body: string;
    countries: string;
    citys: City[];
    languegues: string;
  };
}

export const ContinentInfo = ({ continent }: ContinentInfoProps) => {
  return (
    <Flex justify="space-between" w={["343px", "490px"]} h="99px">
      <ContinentInfoItem value={continent.countries} title="paises" />

      <ContinentInfoItem value={continent.languegues} title="Linguas" />

      <ContinentInfoItem
        value={String(continent.citys.length)}
        title="Cidades +100"
        moreinfo="Os 100 destinos mais visitados"
      />
    </Flex>
  );
};
