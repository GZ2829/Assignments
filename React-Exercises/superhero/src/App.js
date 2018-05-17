import React from 'react';

import Superhero from './Superhero'

import superhero from './superhero.json'


const App = () =>  {
    const catchphrase = (phrase) =>{
    console.log(phrase)
    }

  const ma = superhero.map(saw =>{
    return(<Superhero name={saw.name} image={saw.image} phrase={saw.phrase} clickfunction={catchphrase} / >)
  }) 
    return(
      <div>
        {ma}
      </div>
    );
  }


  export default App;


