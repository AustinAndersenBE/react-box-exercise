import React, { useState, useCallback } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

/**
 * BoxList component. Manages a list of Box components.
 * @component
 */
function BoxList() {
  /**
   * State for the list of boxes.
   * Each box is an object with properties: id, width, height, backgroundColor.
   * @type {Array.<{id: string, width: string, height: string, backgroundColor: string}>}
   */
  const [boxes, setBoxes] = useState([]);


  //adds a new box to the list of boxes
  const add = useCallback(boxObj => {
    setBoxes(boxes => [...boxes, boxObj]);
  }, []);

  const remove = useCallback(id => {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  }, []);

  //returns array of Box components
  const boxComponents = boxes.map(box => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width}
      height={box.height}
      handleRemove={remove}
      backgroundColor={box.backgroundColor}
    />
  ));

  return (
    <div>
      <NewBoxForm createBox={add} />
      {boxComponents}
    </div>
  );
}

export default BoxList;
