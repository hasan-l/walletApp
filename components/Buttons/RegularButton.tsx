import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import { ButtonProps } from "./types";

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`;

const RegularButton: FunctionComponent<ButtonProps> = ({
  textStyles,
  btnStyles,
  onPress,
  children,
}) => {
  return (
    <ButtonView onPress={onPress} style={btnStyles}>
      <RegularText textStyles={textStyles}>{children}</RegularText>
    </ButtonView>
  );
};

export default RegularButton;
