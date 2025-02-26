import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/UseGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap = new Map<string, IconType>([
    ["pc", FaWindows],
    ["playstation", FaPlaystation],
    ["xbox", FaXbox],
    ["mac", FaApple],
    ["linux", FaLinux],
    ["android", FaAndroid],
    ["nintendo", SiNintendo],
    ["ios", MdPhoneIphone],
    ["web", BsGlobe],
  ]);
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          as={iconMap.get(platform.slug)}
          color="gray.500"
          key={platform.id}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
