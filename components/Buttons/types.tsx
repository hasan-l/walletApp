import {
  StyleProp,
  TextStyle,
  ViewStyle,
  GestureResponderEvent,
} from "react-native";

export interface ButtonProps {
  btnStyles?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  textStyles?: StyleProp<TextStyle>;
  chldren: React.ReactNode;
}
