import React from "react";
import "./menuSidebar.css";
import CompactDiscMenu from "../menus/compactdisc_menu/CompactDiscMenu";
import RecordsMenu from "../menus/records_menu/RecordsMenu";
import TapesMenu from "../menus/tapes_menu/TapesMenu";
import VisualMediaMenu from "../menus/visual_media/VisualMedia";
import Search from "../search/Search";

const MenuSidebar = (props) => {
  return (
    <div className="menuWrapper">
      {/* <p className="menuTitle">
        {props.viewingMode ? "Viewing Menu" : "Entry Menu"}
      </p> */}
      <p className="menuTitle">Filters</p>

      {props.selectedFormat === "compactDiscs" && (
        <CompactDiscMenu
          selectedFormat={props.selectedFormat}
          viewingMode={props.viewingMode}
          cdOption={props.cdOption}
          handleCdOption={props.handleCdOption}
        />
      )}
      {props.selectedFormat === "records" && (
        <RecordsMenu
          selectedFormat={props.selectedFormat}
          viewingMode={props.viewingMode}
          recordType={props.recordType}
          handleRecordType={props.handleRecordType}
        />
      )}
      {props.selectedFormat === "tapes" && (
        <TapesMenu
          selectedFormat={props.selectedFormat}
          viewingMode={props.viewingMode}
          tapeType={props.tapeType}
          handleTapeType={props.handleTapeType}
        />
      )}
      {props.selectedFormat === "visualMedia" && (
        <VisualMediaMenu
          selectedFormat={props.selectedFormat}
          viewingMode={props.viewingMode}
          handleVisualMediaType={props.handleVisualMediaType}
          visualMediaType={props.visualMediaType}
        />
      )}
      {props.selectedFormat && (
        <Search
          setSearchTerm={props.setSearchTerm}
          setFilterField={props.setFilterField}
          filterField={props.filterField}
          selectedFormat={props.selectedFormat}
        />
      )}
    </div>
  );
};

export default MenuSidebar;
