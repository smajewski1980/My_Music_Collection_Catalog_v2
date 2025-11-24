import React from "react";
import "./recordsMenu.css";

const RecordsView = (props) => {
  return (
    <>
      <h3>Select A Filter</h3>
      <br />
      <div className='recordsBtnsWrapper'>
        <button
          className={
            props.recordType === "Cylinder "
              ? "recBtnInactive recBtnActive"
              : "recBtnInactive"
          }
          type='button'
          onClick={() => {
            props.handleRecordType("Cylinder ");
          }}
        >
          Cylinders
        </button>

        <button
          className={
            props.recordType === "33"
              ? "recBtnInactive recBtnActive"
              : "recBtnInactive"
          }
          type='button'
          onClick={() => {
            props.handleRecordType("33");
          }}
        >
          33 rpm
        </button>
        <button
          className={
            props.recordType === "45"
              ? "recBtnInactive recBtnActive"
              : "recBtnInactive"
          }
          type='button'
          onClick={() => {
            props.handleRecordType("45");
          }}
        >
          45 rpm
        </button>
        <button
          className={
            props.recordType === "78"
              ? "recBtnInactive recBtnActive"
              : "recBtnInactive"
          }
          type='button'
          onClick={() => {
            props.handleRecordType("78");
          }}
        >
          78 rpm
        </button>
      </div>
    </>
  );
};

const RecordsMenu = (props) => {
  return (
    <div className='recordsMenu'>
      <RecordsView
        recordType={props.recordType}
        handleRecordType={props.handleRecordType}
      />
    </div>
  );
};

export default RecordsMenu;
