import { View } from "react-native";
import React from "react";
import { Box, Image, AspectRatio, Text, Link } from "native-base";

const Card = (props) => {
  const { product } = props;
  return (
    <Box
      rounded={"lg"}
      borderWidth={1}
      borderColor={"gray.200"}
      margin={5}
      backgroundColor="white"
    >
      <AspectRatio w={"100%"} ratio={5 / 2}>
        <Image
          alt="no_image"
          roundedTopLeft={"lg"}
          roundedTopRight={"lg"}
          borderWidth={1}
          borderColor={"gray.200"}
          source={{
            uri: product.thumbnail,
          }}
          resizeMode={"contain"}
        />
      </AspectRatio>

      <Box padding={3}>
        <Text fontFamily={"heading"}>{product.category}</Text>
        <Text fontFamily={"heading"} fontSize={20} fontWeight={"bold"}>
          {product.title}
        </Text>
        <Text fontFamily={"heading"} color="gray.300">
          {product.description}
        </Text>
        <Box flexDirection={"row"} justifyContent="space-between">
          <Link color={"cyan.900"}>+ Add to cart</Link>
          <Text fontFamily={"heading"} fontSize={18} fontWeight={"medium"}>
            ${product.price}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
