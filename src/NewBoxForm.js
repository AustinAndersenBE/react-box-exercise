import React, { useState } from "react";
import { v4 as uuid } from 'uuid';


function NewBoxForm({ createBox }) {

  //State to manage form data
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    backgroundColor: ""
  });

  //Handler function that updates the form data
  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  //Handler function that gathers form data and calls parent function
  //createBox adds a new box to the list of boxes. This state-changing function is from BoxList.js
  const gatherInput = evt => {
    evt.preventDefault();
    createBox({ ...formData, id: uuid() });
    setFormData({ height: "", width: "", backgroundColor: "" });
  };

  return (
    <div>
      <form onSubmit={gatherInput}>
        <div>
          <label htmlFor="height">Height</label>
          <input
            onChange={handleChange}
            type="text"
            name="height"
            value={formData.height} //intial value
            id="height"
          />
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <input
            onChange={handleChange}
            type="text"
            name="width"
            id="width"
            value={formData.width}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color</label>
          <input
            onChange={handleChange}
            type="text"
            name="backgroundColor"
            value={formData.backgroundColor}
            id="backgroundColor"
          />
        </div>
        <button id="newBoxButton">Add a new box!</button>
      </form>
    </div>
  );
}

export default NewBoxForm;
