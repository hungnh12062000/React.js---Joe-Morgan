import React from 'react';
import './App.css';
import Instructions from '../Instructions/Instructions';
import AnimalCard from '../AnimalCard/AnimalCard';
import Alert from '../Alert/Alert';
import CartSuccess from '../CartSuccess/CartSuccess';

import data from './data';


function App() {

  const displayEmojiName = event => alert(event.target.id);
  const emojis = [
    {
      emoji: "😀",
      name: "grinning face"
    },
    {
      emoji: "🎉",
      name: "party popper"
    },
    {
      emoji: "💃",
      name: "woman dancing"
    }
  ];

  function showAdditional(additional) {
    const alertInformation = Object.entries(additional)
      .map(information => `${information[0]}: ${information[1]}`)
      .join('\n');
    alert(alertInformation)
  };

  return (
    <div className="container">
      <h1>Emoji Search</h1>
      <Instructions />
      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button
                onClick={displayEmojiName}
              >
                <span role="img" aria-label={emoji.name}
                  id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul>

      <div className="wrapper">
        <h1>Animals</h1>
        {data.map(animal => (
          <AnimalCard
            additional={animal.additional}
            diet={animal.diet}
            key={animal.name}
            name={animal.name}
            scientificName={animal.scientificName}
            showAdditional={showAdditional}
            size={animal.size}
          />
        ))}
      </div>

      {/* alert */}
      <Alert message={'Items Not Added!'} type={'error'}>
        <p>There was an error adding your items to the cart.</p>
      </Alert>
      <Alert message={'Added Items success!'} type={'success'}>
        <p>Items added to cart successfully.</p>
      </Alert>
      <CartSuccess />
    </div>
  );
}

export default App;
