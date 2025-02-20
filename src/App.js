import React, { useState } from "react";
import './App.css';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function App() {
  const [showIframe, setShowIframe] = useState(false); // State to control iframe visibility
  const [iframeUrl, setIframeUrl] = useState(""); // State to store the URL

  const handleButtonClick = () => {
    setShowIframe(true); // Show iframe when button is clicked
  };

  const handleUrlChange = (event) => {
    setIframeUrl(event.target.value); // Update the URL state
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
          gap: "10px", // Space between text field and button
        }}
      >
        <TextField
          label="Enter iframe URL"
          variant="outlined"
          value={iframeUrl}
          onChange={handleUrlChange}
          sx={{ width: "400px" }}
        />
        
          <Button
            variant="contained"
            color="primary"
            onClick={handleButtonClick}
          >
            Show Iframe
          </Button>
        
      </div>

      <header className="App-header">
        {showIframe && iframeUrl && ( // Render iframe only if URL is provided and showIframe is true
          <iframe
            src={iframeUrl}
            style={{
              marginTop: "20px",
              width: "1000px",
              height: "600px",
              border: "1px solid black",
            }}
            title="Dynamic Iframe"
          />
        )}
      </header>
    </div>
  );
}

export default App;
