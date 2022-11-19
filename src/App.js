import { useState, useEffect } from 'react';
import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  console.log('Rendered');

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);
  
      const onSearchChange = (event) => {
        const searchFieldValue = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldValue);
        console.log('Triger From  onSearchChange');
      }

  useEffect(() => {
    console.log('Triger From  Rest Api');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  }, []);

  useEffect(() => {
    console.log('Triger From  Filter Monster');
    const newFilterMonster = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField))
    setFilterMonsters(newFilterMonster);
  }, [monsters, searchField]);

//render
//Triger From  Rest Api
//'Triger From  Filter Monster'
  //render
  //render
//Triger From  Filter Monster';
//render






return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox onSearchHandler={onSearchChange} className='search-box' placeholder='search monsters' />
      <CardList monsters={filterMonsters}/>
    </div>
  )
}
/*
class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return {
          monsters: users
        }
      }))
  }

  
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return {
          searchField
        }
      }
    )
  }

  render() {
    const { searchField, monsters } = this.state;
    const { onSearchChange } = this;
    const filterMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField))
    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox onSearchHandler={onSearchChange} className='search-box' placeholder='search monsters' />
        <CardList monsters={filterMonsters}/>
      </div>
    );
  }

}
*/
export default App;
