import React from 'react'
import './recordsMenu.css'

const RecordsView = (props) => {
    return (
        <>
        <h3>Select A Filter</h3>
        <br />
        <div className='recordsBtnsWrapper'>
            <button
                className={props.recordType === 'Cylinder ' ? 'recBtnInactive recBtnActive' : 'recBtnInactive'} 
                type='button'
                onClick={() => {props.handleRecordType('Cylinder ')}}
            >Cylinders</button>
            <button
                className={props.recordType === '16 rpm ' ? 'recBtnInactive recBtnActive' : 'recBtnInactive'}  
                type='button'
                onClick={() => {props.handleRecordType('16')}}
            >16 rpm</button>
            <button
                className={props.recordType === '33 rpm ' ? 'recBtnInactive recBtnActive' : 'recBtnInactive'}  
                type='button'
                onClick={() => {props.handleRecordType('33')}}
            >33 rpm</button>
            <button
                className={props.recordType === '45 rpm ' ? 'recBtnInactive recBtnActive' : 'recBtnInactive'}  
                type='button'
                onClick={() => {props.handleRecordType('45')}}
            >45 rpm</button>
            <button
                className={props.recordType === '78 rpm ' ? 'recBtnInactive recBtnActive' : 'recBtnInactive'}  
                type='button'
                onClick={() => {props.handleRecordType('78')}}
            >78 rpm</button>
        </div>
        </>
    )
}
const RecordsEntry = () => {
    return (
        <>
        <p>Records Entry Mode Options</p>
        <br />
        <p>This component will hold the buttons for the Records entry options</p>
        </>
    )
}

const RecordsMenu = (props) => {

  return (
    <div className='recordsMenu'>
        {props.viewingMode ? <RecordsView recordType={props.recordType} handleRecordType={props.handleRecordType}/> : <RecordsEntry />}
    </div>
  )
}

export default RecordsMenu