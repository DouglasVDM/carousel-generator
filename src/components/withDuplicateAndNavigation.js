import React from "react";
import withDuplicate from "./withDuplicate";
import withNavigation from "./withNavigation";

const withDuplicateAndNavigation = (WrappedComponent) => {
  const DuplicateAndNavigationComponent = withDuplicate(
    withNavigation(WrappedComponent)
  );

  return DuplicateAndNavigationComponent;
};

export default withDuplicateAndNavigation;
