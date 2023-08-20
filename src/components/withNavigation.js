import React from "react";
import { withRouter } from "react-router-dom";

const withNavigation = (WrappedComponent) => {
  const NavigationComponent = ({ history, ...props }) => {
    const handleNext = () => {
      const nextId = parseInt(props.match.params.id) + 1;
      history.push(`/components/${nextId}`);
    };

    const handlePrevious = () => {
      const previousId = parseInt(props.match.params.id) - 1;
      history.push(`/components/${previousId}`);
    };

    return (
      <div>
        <WrappedComponent {...props} />
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    );
  };

  return withRouter(NavigationComponent);
};

export default withNavigation;
