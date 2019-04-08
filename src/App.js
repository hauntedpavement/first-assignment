import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28, food: 'chinese' },
      { name: 'Manu', age: 29, food: 'chinese' },
      { name: 'Stephanie', age: 26, food: 'chinese' }
    ]
  })

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'maxamiliian', age: 99, food: 'greek' },
        { name: 'dee-ego', age: 39, food: 'greek' }
      ]
    });
  };

  return (
    <div className="App">
      <h1>hi, i am a react app</h1>
      <p>this is working</p>
      <button onClick={switchNameHandler}>Switch Name</button>

      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} food={personsState.persons[0].food}> I am a red peach</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} food={personsState.persons[0].food} />

    </div>
  );

}
export default app;


