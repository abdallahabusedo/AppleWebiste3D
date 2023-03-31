import React from "react";
import DisplaySection from "./components/DisplaySection";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import WebGiViewer from "./components/WebGiViewer";
import SoundSection from "./components/SoundSection";

function App() {
  const webGiViewerRef = React.useRef();
  const contentRef = React.useRef();
  const handlePreview = () => {
    webGiViewerRef.current.triggerPreview();
  };
  return (
    <div className="App">
      <div ref={contentRef}>
        <Navbar />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>
      <WebGiViewer contentRef={contentRef} ref={webGiViewerRef} />
    </div>
  );
}

export default App;
