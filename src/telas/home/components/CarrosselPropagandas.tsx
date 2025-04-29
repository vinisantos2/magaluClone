import { useState } from "react";
import Carousel from "react-native-reanimated-carousel";



import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { CORES } from "../../../constants/Cores";

const { width } = Dimensions.get("window");

const banners = [
  { id: "1", image: "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Promoção 1" },
  { id: "2", image: "https://images.pexels.com/photos/1087727/pexels-photo-1087727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Promoção 2" },
  { id: "3", image: "https://images.pexels.com/photos/1639930/pexels-photo-1639930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Promoção 3" },
];

export default function CarrosselPropagandas() {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item }) => {
    if (!item) {
      return null;  // Safeguard in case of undefined item
    }
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={banners}
        renderItem={renderItem}
        width={width}  // Carousel width should match screen width
        height={200}  // Height of the carousel
        loop
        autoPlay
        autoPlayInterval={3000}
        // Interval for autoplay
        onSnapToItem={(index) => setActiveIndex(index)}  // Update active index
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
    backgroundColor: CORES.CINZA
  },
  card: {
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",  // Centering text
    paddingHorizontal: 10,  // Adding padding for readability
  },
});
