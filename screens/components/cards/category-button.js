export default () => (
  <View style={{ flexDirection: "row" }} key={categoryId}>
    <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
    <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
  </View>
);
