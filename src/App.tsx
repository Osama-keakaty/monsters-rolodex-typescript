import { useState, useEffect,ChangeEvent } from "react";
import "./App.css";
import { getData } from "./utils/data.utils";
import SearchBox from "./components/search-box/search-box.component";
import ListCard from "./components/card-list/card-list.component";

export type Monster = {
  name: string;
  email: string;
  id: string;
};

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchData = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(users)
      setMonsters(users)
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((monster) =>
        monster.name.toLocaleLowerCase().includes(searchField)
      )
    );
  }, [monsters, searchField]);

  const changeSearchBox = (event:ChangeEvent<HTMLInputElement>):void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={changeSearchBox}
        placeholder={"search monsters"}
        className={"box"}
      />
      <ListCard monsters ={filteredMonsters} />
    </div>
  );
};

export default App;
