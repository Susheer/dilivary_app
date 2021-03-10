import React from "react";
import { icons, images, SIZES, COLORS, FONTS } from "../../../constants";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
export default ({ item }) => (
  <TouchableOpacity
    activeOpacity={1}
    style={{ marginBottom: SIZES.padding * 2 }}
    onPress={
      () => {}
      // navigation.navigate("Restaurant", {
      //   item,
      //   currentLocation,
      // })
    }
  >
    {/* Image */}
    <View
      style={{
        marginBottom: SIZES.padding,
      }}
    >
      <Image
        source={item.photo}
        resizeMode="cover"
        style={{
          width: "100%",
          height: 180,
          borderRadius: SIZES.radius,
        }}
      />

      <View
        style={{
          position: "absolute",
          bottom: 0,
          height: 50,
          width: SIZES.width * 0.3,
          backgroundColor: COLORS.white,
          borderTopRightRadius: SIZES.radius,
          borderBottomLeftRadius: SIZES.radius,
          alignItems: "center",
          justifyContent: "center",
          ...styles.shadow,
        }}
      >
        <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
      </View>
    </View>

    {/* Restaurant Info */}
    <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

    <View
      style={{
        marginTop: SIZES.padding,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {/* Rating */}
      <Image
        source={icons.star}
        style={{
          height: 10,
          width: 10,
          tintColor: COLORS.primary,
          marginRight: 10,
        }}
      />
      <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

      {/* Categories */}
      <View
        style={{
          flexDirection: "row",
          marginLeft: 10,
        }}
      >
        {item.categories.map((categoryId) => {
          return (
            <View style={{ flexDirection: "row" }} key={categoryId}>
              <Text style={{ ...FONTS.body3 }}>
                {getCategoryNameById(categoryId)}
              </Text>
              <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
            </View>
          );
        })}

        {/* Price */}
        {[1, 2, 3].map((priceRating) => (
          <Text
            key={priceRating}
            style={{
              ...FONTS.body3,
              color:
                priceRating <= item.priceRating
                  ? COLORS.black
                  : COLORS.darkgray,
            }}
          >
            $
          </Text>
        ))}
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});
