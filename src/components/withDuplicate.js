import React, { useState } from "react";

const withDuplicate = (WrappedComponent) => {
  const DuplicateComponent = (props) => {
    const [duplicates, setDuplicates] = useState([]);

    const handleDuplicate = () => {
      setDuplicates([...duplicates, <WrappedComponent {...props} />]);
    };

    return (
      <div>
        <WrappedComponent {...props} />
        <button onClick={handleDuplicate}>Duplicate</button>
        {duplicates}
      </div>
    );
  };

  return DuplicateComponent;
};

export default withDuplicate;
