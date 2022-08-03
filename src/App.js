// import React from './react'
import Modal from 'react-modal'
import './App.css';
import React ,{ useState } from 'react';

const customStyles = {
  content: {
    top: '35%',
    left: '35%',
    width:'30%',
    height:'30%'
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
  },
};


function App() {
  const [modelIsOpen,SetmodelIsOpen]=useState(false)
  const [SecmodelIsOpen,SecSetmodelIsOpen]=useState(false)
  const [ThirdmodelIsOpen,ThirdSetmodelIsOpen]=useState(false)
  const [FourthmodelIsOpen,FourthSetmodelIsOpen]=useState(false)
  const [FivthmodelIsOpen,FivthSetmodelIsOpen]=useState(false)
  const [SixmodelIsOpen,SixSetmodelIsOpen]=useState(false)
  return (
    <div className="App">
       <h1>Logical Puzzles</h1>
      <div className='First'>
        {/* <h1>Logical Puzzles</h1> */}
        <p className='para'>Q.1. Meena's mother has five daughters: Reena, Teena, Sheena and Sheela. Who is the fifth daughter?</p>
        <button className='butt' onClick={()=>SetmodelIsOpen(!modelIsOpen)}>Answer</button>
        <Modal isOpen={modelIsOpen} style={customStyles}>
          <h1 className='first-ans'>Meena.</h1>
          <button onClick={() => SetmodelIsOpen(false)}>Close</button>
        </Modal>
        
      </div>

      <div className='Sec'>
        <p>Q.2. Before the days of motor cars, a man rode into town on his horse. He arrived on Sunday, spent three</p>
        <p>days in town and left on Sunday. How is that possible?</p>
        <button className='butt'onClick={()=>SecSetmodelIsOpen(!SecmodelIsOpen)}>Answer</button>
        <Modal isOpen={SecmodelIsOpen} style={customStyles}>
          <h1 className='first-ans'>The name of the horse was Sunday.</h1>
          <button onClick={() => SecSetmodelIsOpen(false)}>Close</button>
        </Modal>

      </div>

      <div className='Sec'>
        <p>Q.3. A man builds a house with all 4 sides facing south. A bear walks past the house. What color is the bear?</p>
        <button className='butt' onClick={()=>ThirdSetmodelIsOpen(!ThirdmodelIsOpen)}>Answer</button>
        <Modal isOpen={ThirdmodelIsOpen} style={customStyles}>
          <h1 className='first-ans'>White: the house is built directly on the North Pole.</h1>
          <button onClick={() => ThirdSetmodelIsOpen(false)}>Close</button>
        </Modal>
      </div>

      <div className='Sec'>
        <p>Q.4. Hritik is taller than Salman who is shorter than Sanjay. Akshay is taller than Shahrukh but shorter than Salman.</p>
        <p>Sanjay is shorter than Hritik. Who is the tallest?</p>
        <button className='butt'onClick={()=>FourthSetmodelIsOpen(!FourthmodelIsOpen)}>Answer</button>
        <Modal isOpen={FourthmodelIsOpen} style={customStyles}>
          <h1 className='first-ans'>Final ranking of height in descending order is : Hritik, Sanjay, Salman, Akshay, Shahrukh. Hence, Hritik is the tallest.</h1>
          <button onClick={() => FourthSetmodelIsOpen(false)}>Close</button>
        </Modal>

      </div>

      <div className='Sec'>
        <p>Q.5. If "basketball" is "football”,"football" is "korfball”, "korfball" is "tennis”, "tennis" is "kabaddi" and "kabaddi" </p>
        <p>is "basketball", then to which game Wimbeldon is associated?</p>
        <button className='butt'onClick={()=>FivthSetmodelIsOpen(!FivthmodelIsOpen)}>Answer</button>
        <Modal isOpen={FivthmodelIsOpen} style={customStyles}>
          <h1 className='first-ans'>Kabaddi as Wimbeldon is related to tennis and tennis is refered as kabaddi.</h1>
          <button onClick={() => FivthSetmodelIsOpen(false)}>Close</button>
        </Modal>

      </div>

      <div className='Sec'>
        <p>Q.6. A woman had two girls who were born on the same hour of the same day of the same year. But they were not twins. How </p>
        <p>could this be so?</p>
        <button className='butt'onClick={()=>SixSetmodelIsOpen(!SixmodelIsOpen)}>Answer</button>
        <Modal isOpen={SixmodelIsOpen} style={customStyles}>
          <h1 className='first-ans'>They were two of a set of triplets.</h1>
          <button onClick={() => SixSetmodelIsOpen(false)}>Close</button>
        </Modal>

      </div>
    </div>
  );
}

export default App



