import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/UseGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((gener) => (
        <ListItem key={gener.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(gener.image_background)}
            />
            <Text fontSize="lg">{gener.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
