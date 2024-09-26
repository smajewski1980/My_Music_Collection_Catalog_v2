import React from 'react'
import './tapesMenu.css'

const TapesView = (props) => {
    return (
        <>
        <h3>Select A Filter</h3>
        <br />
        <div className='tapesBtnsWrapper'>
            <button
                type='button'
                onClick={() => {props.handleTapeType('8-Track ')}}
            >8-Tracks</button>
            <button 
                type='button'
                onClick={() => {props.handleTapeType('Reel to Reel ')}}
            >Reel To Reel</button>
            <button 
                type='button'
                onClick={() => {props.handleTapeType('Cassette ')}}
            >Cassettes</button>
        </div>
        </>
    )
}
const TapesEntry = () => {
    return (
        <>
        <p>Tapes Entry Mode Options</p>
        <br />
        <p>This component will hold the buttons for the Tapes entry options</p>
        </>
    )
}

const TapesMenu = (props) => {
    console.log(typeof props.handleTapeType)
  return (
    <div className='tapesMenu'>
       
        {props.viewingMode ? <TapesView tapeType={props.tapeType} handleTapeType={props.handleTapeType}/> : <TapesEntry />}
    </div>
  )
}

export default TapesMenu