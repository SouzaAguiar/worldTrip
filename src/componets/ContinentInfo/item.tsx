import {
  Flex,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

interface ContinentInfoProps {
  title: string;
  value: string;
  moreinfo?: string;
}

export const ContinentInfoItem = ({
  title,
  value,
  moreinfo = "",
}: ContinentInfoProps) => {
  return (
    <Flex flexDir="column" align="center">
      <Text
        fontSize={["2xl", "5xl"]}
        lineHeight={["27px", "72px"]}
        fontWeight="600"
        color="yellow.400"
      >
        {value}
      </Text>
      {moreinfo ? (
        <Popover>
          <PopoverTrigger>
            <Text fontSize={["xl", "2xl"]} lineHeight="taller" fontWeight="600">
              {title}
              <Icon as={RiInformationLine} color="gray.500" ml={1} />
            </Text>
          </PopoverTrigger>
          <PopoverContent color="yellow.400">
            <PopoverArrow color="gray.700" />
            <PopoverCloseButton />
            <PopoverBody fontSize="lg" color="gray.700">
              {moreinfo}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      ) : (
        <Text fontSize={["xl", "2xl"]} lineHeight="taller" fontWeight="600">
          {title}
        </Text>
      )}
    </Flex>
  );
};
