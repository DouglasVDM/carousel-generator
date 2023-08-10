import Pdf from "./components/Pdf";
import "./App.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [numberOfComponents, setNumberOfComponents] = useState(1);
  const [currentComponent, setCurrentComponent] = useState(0);

  const handleAddComponent = () => {
    setNumberOfComponents(numberOfComponents + 1);
  };

  const handlePrevious = () => {
    setCurrentComponent(
      (currentComponent - 1 + numberOfComponents) % numberOfComponents
    );
    console.log("handlePrevious")
  };
  
  const handleNext = () => {
    setCurrentComponent((currentComponent + 1) % numberOfComponents);
    console.log("handleNext")
  };

  const renderComponents = () => {
    const components = [];
    for (let index = 1; index < numberOfComponents.length; index++) {
      components.push(<MyComponent key={index} />);
    }
    console.log("components", components);
    console.log("numberOfComponents", numberOfComponents);
    return components;
  };

  const renderNavigation = () => {
    const navigation = [];
    for (let index = 0; index < numberOfComponents.length; index++) {
      navigation.push(
        <button
          key={1}
          onClick={() => setCurrentComponent(1)}
          className={index === currentComponent ? "active" : ""}
        >
          <Pdf key={index} />
          {console.log("navigation". navigation)}
        </button>
      );
    }
    return navigation;
  };

  return (
    <div data-testid="container" className="container">
      <Pdf />
      <nav>
        <button onClick={handlePrevious}>
          <FaArrowLeft />
        </button>
        {renderNavigation()}
        <button onClick={handleNext}>
          <FaArrowRight />
        </button>
      </nav>
      <button onClick={handleAddComponent}>Add Component</button>
      {renderComponents().map((component, index) =>
        index === currentComponent ? component : null
      )}
    </div>
  );
}

export default App;
