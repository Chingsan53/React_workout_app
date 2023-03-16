import { useState, useEffect } from 'react';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';

const App = () => {
  const[searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  const [stringField, setStringField] = useState();

  console.log('render');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);

    console.log('effect is firing')
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
  };

  const onStringChange = (event) => {
    setStringField(event.target.value);
  }


  return (
    <div className='App'>
        <h1 className='text-7xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 font-bigelow-rules'>Monster Rolodex</h1>
        <SearchBox
          className='search-box'
          onChangeHandler={onSearchChange}
          placeholder='search monsters'
        />
        <SearchBox
          onChangeHandler={onStringChange}
          placeholder='set string'
        />
        <CardList monsters={filteredMonsters} />
      </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   componentDidMount() {
//     console.log('componentDidMount')
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(() => {
//         return { monsters: users };
//       }
//       )
//       );

//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className='App'>
//         <h1 className='text-7xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 font-bigelow-rules'>Monster Rolodex</h1>
//         <SearchBox
//           className='search-box'
//           onChangeHandler={onSearchChange}
//           placeholder='search monsters'
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;