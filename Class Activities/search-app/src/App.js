import './App.css';
import Layout from './Layout';
import {useState} from 'react';

const spiderPeople = [
  "Miles Morales",
  "Peter B. Parker",
  "Gwen Stacy",
  "Peni Parker",
  "Spider-Ham",
  "Spider-Man Noir",
  "Spider-Man 2099 (Miguel O'Hara)",
  "Spider-Punk (Hobie Brown)",
  "Spider-Man (Aaron Davis)",
  "Spider-Girl (Anya Corazon)"
];
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setfilteredItems] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    const matchfilteredItems = spiderPeople.filter((people) =>
      people.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setfilteredItems(matchfilteredItems);
  };

  return (
    <div className="App">
      <Layout title= "Spiderverse" nav1 = "Store" nav2= "Tokens" nav3= "Contact us"/>
      <h1>Welcome to the spiderverse</h1>
      <p>Search and find your spider people that were in
        accross the spiderverse
      </p>
      <div>
        <input
          type='search'
          placeholder='type to search here...'
          value= {searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div>
        <ul>
          {
            filteredItems.map((item, index)=>(
              <li key={index}>{item}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
