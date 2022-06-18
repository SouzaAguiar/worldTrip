import { Flex, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from "react-icons/ri";

const Header = () => {
  const { asPath } = useRouter();
  const ishome = asPath === "/";
  return (
    <Flex
      as={"header"}
      h={[12, 24]}
      w="100%"
      justify="center"
      align={"center"}
      position="relative"
    >
      {!ishome && (
        <Link href="/">
          <a>
            <Icon
              as={RiArrowLeftSLine}
              position="absolute"
              fontSize={["3xl", "5xl"]}
              color="gray.700"
              left={[4, 32]}
              bottom="25%"
            />
          </a>
        </Link>
      )}
      <Image w={[20, 44]} alt="worldtrip logo" src="/images/logo.svg" />
    </Flex>
  );
};

export default Header;
