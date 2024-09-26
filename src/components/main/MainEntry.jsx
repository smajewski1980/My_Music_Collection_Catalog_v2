import React from 'react'

const MainEntry = (props) => {
  return (
    <div id='main'>
      <p id='mainTitle'>
        
        {props.selectedFormat === 'compactDiscs' && props.cdOption === null ? 'Compact Discs' : undefined}
        {props.cdOption === 'mainCatalog' && 'The Main CD Catalog'}
        {props.cdOption === 'singles' && 'The CD Singles'}
        {props.cdOption === 'compilations' && 'The Compilation CDs'}
        {props.cdOption === 'earlyPressings' && 'The Early CD Pressings'}

        {props.selectedFormat === 'records' && props.recordType}
        {props.selectedFormat === 'records' && props.recordType !== 'Cylinder ' && props.recordType !== null ? ' rpm Records': undefined}
        {props.selectedFormat === 'records' && props.recordType === 'Cylinder ' ? 'Records': undefined}
        {props.recordType === null && props.selectedFormat === 'records' ? 'Records' : undefined}
        

        {props.selectedFormat === 'tapes' && props.tapeType}
        {props.selectedFormat === 'tapes' && 'Tapes'}

        {props.selectedFormat === 'visualMedia' && props.visualMediaType === null ? 'Visual Media' : undefined}
        {props.visualMediaType === 'betaVhs' && 'Beta / VHS Tapes'}
        {props.visualMediaType === 'blurayDvd' && 'DVD / Blu-ray Discs'}
        {props.visualMediaType === 'ced' && 'RCA Selectavision (CED)'}

      </p>
      </div>

  )
}

export default MainEntry