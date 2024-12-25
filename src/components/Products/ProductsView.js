import { View, Text } from "react-native-web";
import ProductItems from "./ProductItems";
import ProductData from "./ProductData";

const ProductsView = () => {
  const productsList = () => {
    Products.map((product) => {
      return (
        <View key={product.id}>
          <Text>{product.name}</Text>
          <Text>{product.price}</Text>
        </View>
      );
    });
  };
  return (
    <View>
      <ProductItems />
      {productsList}
    </View>
  );
};

export default ProductsView;
