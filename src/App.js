import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import MenuSidebar from "./components/menu_sidebar/MenuSidebar";
import Main from "./components/main/Main";
import MainEntry from "./components/main/MainEntry";

function App() {
  const [viewingMode, setViewingMode] = useState(true);
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [recordType, setRecordType] = useState(null);
  const [tapeType, setTapeType] = useState(null);
  const [cdOption, setCdOption] = useState(null);
  const [visualMediaType, setVisualMediaType] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterField, setFilterField] = useState("Artist");

  const handleViewingMode = () => {
    setViewingMode(!viewingMode);
  };
  const handleFormatSelect = (format) => {
    setVisualMediaType(null);
    setCdOption(null);
    setRecordType(null);
    setTapeType(null);
    setSelectedFormat(format);
  };
  const handleRecordType = (type) => {
    setRecordType(type);
  };
  const handleTapeType = (type) => {
    setTapeType(type);
  };
  const handleCdOption = (option) => {
    setCdOption(option);
  };
  const handleVisualMediaType = (type) => {
    setVisualMediaType(type);
  };

  return (
    <div className="App">
      <Sidebar
        modeClick={handleViewingMode}
        viewingMode={viewingMode}
        formatClick={handleFormatSelect}
        selectedFormat={selectedFormat}
      />
      {viewingMode ? (
        <Main
          selectedFormat={selectedFormat}
          viewingMode={viewingMode}
          recordType={recordType}
          tapeType={tapeType}
          cdOption={cdOption}
          visualMediaType={visualMediaType}
          searchTerm={searchTerm}
          filterField={filterField}
        />
      ) : (
        <MainEntry
          selectedFormat={selectedFormat}
          viewingMode={viewingMode}
          recordType={recordType}
          tapeType={tapeType}
          cdOption={cdOption}
          visualMediaType={visualMediaType}
        />
      )}

      <MenuSidebar
        selectedFormat={selectedFormat}
        viewingMode={viewingMode}
        recordType={recordType}
        tapeType={tapeType}
        cdOption={cdOption}
        visualMediaType={visualMediaType}
        handleRecordType={handleRecordType}
        handleTapeType={handleTapeType}
        handleCdOption={handleCdOption}
        handleVisualMediaType={handleVisualMediaType}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        setFilterField={setFilterField}
        filterField={filterField}
      />
    </div>
  );
}

export default App;
