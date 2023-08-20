/**
 * The `DuplicateAndNavigationFileUpload` component is created by wrapping the `FileUpload` component with the `withDuplicateAndNavigation` HOC.  
 * The `DuplicateAndNavigationFileUpload` component can now be used in other parts of your application with the added functionality of both duplicate and navigation.  
 * The buttons for next and previous navigation will be added to the duplicated components as well.
 */
import React from "react";
import withDuplicate from "./withDuplicate";
import { useNavigate } from "react-router-dom";

const withDuplicateAndNavigation = (WrappedComponent) => {
  const DuplicateAndNavigationComponent = withDuplicate((props) => {
    const navigate = useNavigate();

    const handleNext = () => {
      const nextId = parseInt(props.match.params.id) + 1;
      navigate(`/components/${nextId}`);
    };

    const handlePrevious = () => {
      const previousId = parseInt(props.match.params.id) - 1;
      navigate(`/components/${previousId}`);
    };

    return (
      <div>
        <WrappedComponent {...props} />
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    );
  });

  return DuplicateAndNavigationComponent;
};

export default withDuplicateAndNavigation;
