import { Flex, Grid, useBreakpointValue } from "@chakra-ui/react";
import { TravelItem } from "./TravelItem";

export const TravelTypes = () => {
  const isWideversion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex mt={20} justify="center">
      <Grid gap={6} templateColumns={["repeat(2, 1fr)", "repeat(5, 1fr)"]}>
        <TravelItem
          icon={isWideversion ? "cocktail" : "Ellipse"}
          text="Vida noturna"
          alt="Taça de bebida"
        />

        <TravelItem
          icon={isWideversion ? "surf" : "Ellipse"}
          text="Praia"
          alt="Prancha fincada na areaia com sol ao fundo"
        />
        <TravelItem
          icon={isWideversion ? "building" : "Ellipse"}
          text="Moderno"
          alt="Torre"
        />
        <TravelItem
          icon={isWideversion ? "museum" : "Ellipse"}
          text="Clássico"
          alt="Museu"
        />
        <TravelItem
          icon={isWideversion ? "earth" : "Ellipse"}
          text="e mais..."
          alt="Terra"
        />
      </Grid>
    </Flex>
  );
};
