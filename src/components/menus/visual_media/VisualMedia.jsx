import React from "react";
import "./visualMedia.css";

const VisualMediaView = (props) => {
  return (
    <>
      <h3>Select A Format</h3>
      <br />
      <div className="visualBtnsWrapper">
        <button
          type="button"
          onClick={() => {
            props.handleVisualMediaType("betaVhs");
          }}
          className={
            props.visualMediaType === "betaVhs"
              ? "vmBtnInactive vmBtnActive"
              : "vmBtnInactive"
          }
        >
          Beta / VHS
        </button>
        <button
          type="button"
          onClick={() => {
            props.handleVisualMediaType("blurayDvd");
          }}
          className={
            props.visualMediaType === "blurayDvd"
              ? "vmBtnInactive vmBtnActive"
              : "vmBtnInactive"
          }
        >
          DVD / Blu-ray
        </button>
        <button
          type="button"
          onClick={() => {
            props.handleVisualMediaType("ced");
          }}
          className={
            props.visualMediaType === "ced"
              ? "vmBtnInactive vmBtnActive"
              : "vmBtnInactive"
          }
        >
          RCA Selectavision
        </button>
      </div>
    </>
  );
};
const VisualMediaEntry = () => {
  return (
    <>
      <p>Visual Media Entry Mode Options</p>
      <br />
      <p>
        This component will hold the buttons for the Visual Media entry options
      </p>
    </>
  );
};

const VisualMediaMenu = (props) => {
  return (
    <div className="visualMedia">
      {props.viewingMode ? (
        <VisualMediaView
          visualMediaType={props.visualMediaType}
          handleVisualMediaType={props.handleVisualMediaType}
        />
      ) : (
        <VisualMediaEntry />
      )}
    </div>
  );
};

export default VisualMediaMenu;
