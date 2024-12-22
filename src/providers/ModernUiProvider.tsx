import { NextUIProvider } from "@nextui-org/react";
import PropTypes from "prop-types";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const ModernUiProvider = ({ children }: Props) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

ModernUiProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ModernUiProvider;
