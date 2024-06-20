import React, { useState } from 'react';
import '../../assets/styles/user-management-component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAppleAlt, faCarrot } from '@fortawesome/free-solid-svg-icons';



function ContactUsComponent() {
  const [text, setText] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [clientSuggestionTextAreaValue, setClientTextAreaValue] = useState('');
  //const [mediaSrc, setMediaSrc] = useState('');
  const [mediaFiles, setMediaFiles] = useState([]);
  const [checkedItems, setCheckedItems] = useState({ coffee: false, apple: false, carrot: false });


  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleTextAreaChange = (e) => {
    setTextAreaValue(e.target.value);
  };

  const handleClientTextAreaChange = (e) => {
    setClientTextAreaValue(e.target.value);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const filesURLs = files.map(file => ({
      url: URL.createObjectURL(file),
      type: file.type
    }));
    setMediaFiles(filesURLs);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckedItems(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    console.log('Form submitted!');
    console.log('Text:', text);
    console.log('Selected Option:', selectedOption);
    console.log('Text Area Content:', textAreaValue);
    console.log('Checked Items:', checkedItems);
    console.log('Media Files:', mediaFiles);
    console.log('Suggestion To Client:', clientSuggestionTextAreaValue);

  };
  
  return (
    <div className="ContactUsComponent">
      <header className="App-header">
        <h1>Create Activity For Client</h1>
        
        {/* <div className="media-container">
          <video controls width="300">
            <source src="/video/myFile.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}
        
        <form onSubmit={handleSubmit}>
        <div>
          <label>
            Select the Client:
            <select value={selectedOption} onChange={handleSelectChange}>
              <option value="" disabled>Select an option</option>
              <option value="option1">Abhay Singh</option>
              <option value="option2">Paan Singh</option>
              <option value="option3">Sri Prakash Shukla</option>
            </select>
          </label>
        </div>


        {/* <div>
          <label>
            Create Title of Post
            <input type="text" value={text} onChange={handleTextChange} />
          </label>
        </div> */}

        <div>
          <label>
            Give Description about Post:
            <textarea
              rows="6"
              value={textAreaValue}
              onChange={handleTextAreaChange}
            />
          </label>
        </div>

        <div>
          <label>
            Ask Client For Any Suggestion In Post:
            <textarea
              rows="6"
              value={clientSuggestionTextAreaValue}
              onChange={handleClientTextAreaChange}
            />
          </label>
        </div>


        
        <div className="media-container">
          {mediaFiles.map((file, index) => (
            file.type.startsWith('video/') ? (
              <video key={index} controls width="300" src={file.url} />
            ) : (
              <img key={index} src={file.url} alt={`Uploaded media ${index + 1}`} width="300" />
            )
          ))}
        </div>
        <div>
          <label>
            Upload Media:
            <input type="file" multiple onChange={handleFileChange} />
          </label>
        </div>

        <div className="checkbox-container">
          <label>
            <input
              type="checkbox"
              name="coffee"
              checked={checkedItems.coffee}
              onChange={handleCheckboxChange}
            />
            <FontAwesomeIcon icon={faCoffee} />
            Coffee
          </label>
          <label>
            <input
              type="checkbox"
              name="apple"
              checked={checkedItems.apple}
              onChange={handleCheckboxChange}
            />
            <FontAwesomeIcon icon={faAppleAlt} />
            Apple
          </label>
        
          <label>
            <input
              type="checkbox"
              name="carrot"
              checked={checkedItems.carrot}
              onChange={handleCheckboxChange}
            />
            <FontAwesomeIcon icon={faCarrot} />
            Carrot
          </label>
        </div>

        <div>
            <button type="submit">Submit</button>
          </div>
          </form>
      </header>
    </div>
  );
}

export default ContactUsComponent;
