import { PixelRatio, Platform } from "react-native";

export default class Constants {
  static px = PixelRatio.get() / 3.0;
  static LOCALE = 'en';
  static isIOS = Platform.OS == 'ios' ? true : false
}