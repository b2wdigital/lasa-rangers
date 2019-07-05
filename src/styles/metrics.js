import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default {
  baseMargin: 10,
  basePadding: 20,
  baseRadius: 3,

  //return portrait or landscape
  screenWidth: width < height ? width : height,
  screenHight: width < height ? height : width
};
