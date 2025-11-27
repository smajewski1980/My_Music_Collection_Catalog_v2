import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import MenuSidebar from "./components/menu_sidebar/MenuSidebar";
import Main from "./components/main/Main";

function App() {
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [recordType, setRecordType] = useState(null);
  const [tapeType, setTapeType] = useState(null);
  const [cdOption, setCdOption] = useState(null);
  const [visualMediaType, setVisualMediaType] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterField, setFilterField] = useState("Artist");
  const [searchType, setSearchType] = useState("startsWith");
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [offset, setOffset] = useState(150);

  const handleFormatSelect = (format) => {
    setVisualMediaType(null);
    setCdOption(null);
    setRecordType(null);
    setTapeType(null);
    setSelectedFormat(format);
    setSearchTerm("");
    setSearchType("startsWith");
  };
  const handleRecordType = (type) => {
    setRecordType(type);
    setSearchType("startsWith");
  };
  const handleTapeType = (type) => {
    setTapeType(type);
    setSearchType("startsWith");
  };
  const handleCdOption = (option) => {
    setCdOption(option);
    setSearchType("startsWith");
  };
  const handleVisualMediaType = (type) => {
    setVisualMediaType(type);
  };

  return (
    <div className='App'>
      <Sidebar
        formatClick={handleFormatSelect}
        selectedFormat={selectedFormat}
        setCurrPage={setCurrPage}
        currPage={currPage}
        totalPages={totalPages}
        offset={offset}
      />

      <Main
        selectedFormat={selectedFormat}
        recordType={recordType}
        tapeType={tapeType}
        cdOption={cdOption}
        visualMediaType={visualMediaType}
        searchTerm={searchTerm}
        filterField={filterField}
        searchType={searchType}
        currPage={currPage}
        setCurrPage={setCurrPage}
        totalPages={totalPages}
        setTotalPages={setTotalPages}
        setOffset={setOffset}
      />

      <MenuSidebar
        selectedFormat={selectedFormat}
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
        setSearchType={setSearchType}
        searchType={searchType}
      />
    </div>
  );
}

export default App;
