import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <iframe
        src="https://docs.google.com/gview?url=https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx&embedded=true"
        width="962px"
        height="565px"
        // frameborder={0}
      ></iframe>

      <iframe
        id="microsoft-viewer"
        src={`https://view.officeapps.live.com/op/embed.aspx?src=https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx`}
        width="962px"
        height="565px"
        // frameborder="0"
      ></iframe>
    </div>
  );
}

export default App;
