// src/CollapsibleSection.js

import React, { useState } from 'react';
import './CollapsibleSection.css';

const CollapsibleSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    textInput: '',
    textArea: '',
    dropdown: '',
    files: []
  });

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? Array.from(files) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="collapsible-section">
      <button onClick={toggleExpand} className="toggle-button">
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      {isExpanded && (
        <div className="content">
          <h2>Collapsible Section Content</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Text Input:</label>
              <input
                type="text"
                name="textInput"
                value={formData.textInput}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Text Area:</label>
              <textarea
                name="textArea"
                value={formData.textArea}
                onChange={handleChange}
                rows="6"
              ></textarea>
            </div>
            <div>
              <label>Dropdown:</label>
              <select
                name="dropdown"
                value={formData.dropdown}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div>
              <label>Upload Files:</label>
              <input
                type="file"
                name="files"
                multiple
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CollapsibleSection;
