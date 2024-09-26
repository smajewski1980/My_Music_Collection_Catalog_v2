import React from 'react'
import './compactDiscMenu.css'

const CdView = (props) => {
    return (
        <>
            <h3>Select A Filter</h3>
            <br />
            <div className="cdBtnsWrapper">
                <button
                    className={props.cdOption === 'mainCatalog' ? 'cdBtnInactive cdBtnActive' : 'cdBtnInactive'} 
                    type='button'
                    onClick={() => {props.handleCdOption('mainCatalog')}}
                    >Main Catalog</button>
                <button
                    className={props.cdOption === 'singles' ? 'cdBtnInactive cdBtnActive' : 'cdBtnInactive'} 
                    type='button'
                    onClick={() => {props.handleCdOption('singles')}}
                    >Singles</button>
                <button
                    className={props.cdOption === 'compilations' ? 'cdBtnInactive cdBtnActive' : 'cdBtnInactive'} 
                    type='button'
                    onClick={() => {props.handleCdOption('compilations')}}
                    >Compilations</button>
                <button
                    className={props.cdOption === 'earlyPressings' ? 'cdBtnInactive cdBtnActive' : 'cdBtnInactive'} 
                    type='button'
                    onClick={() => {props.handleCdOption('earlyPressings')}}
                    >Early Pressings</button>
            </div>
        </>
    )
}
const CdEntry = () => {
    return (
        <>
            <p>CD Entry Mode Options</p>
            <br />
            <p>This component will hold the buttons for the Cd entry options</p>
        </>
    )
}

const CompactDiscMenu = (props) => {
    return (
        <div className='cdMenu'>
            {props.viewingMode ? <CdView cdOption={props.cdOption} handleCdOption={props.handleCdOption}/> : <CdEntry />}
        </div>
    )
}

export default CompactDiscMenu