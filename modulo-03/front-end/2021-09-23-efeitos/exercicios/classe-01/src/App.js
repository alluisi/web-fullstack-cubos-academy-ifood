import './App.css';
import Card from "./components/Card";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";


function App() {
  const [countries, setCountries] = useState([]);
  const [countriesTemp, setCountriesTemp] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilte] = useState("");


  const onChange = (evt) => {
    setFilte(evt.target.value);
  }

  useEffect(() => {
    async function getCountries() {
      setLoading(true);
      const result = await fetch("https://restcountries.com/v3/all");
      const data = await result.json()
      setCountries(data);
      setCountriesTemp(data);
      setLoading(false);
    }
    getCountries();
  }, [])

  useEffect(() => {
    if (!filter) {
      setCountriesTemp(countries);
      return;
    }
    setCountriesTemp(countries.filter(item => item.name.common === filter));
  }, [filter])


  const onSubmit = async (e) => {
    e.preventDefault();

    if (!filter) return;

    console.log(filter)
    setCountries(countries)
  }

  return (
    <div className="main">
      <div className="filter">
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Pesquisar..." value={filter} onChange={onChange} />
        </form>
      </div>
      <div className="countries">
        {!loading &&
          countriesTemp.map((countrie, key) => (
            <Card key={key}
              image={countrie.flags[0]}
              name={countrie.name.common} />
          ))
        }
      </div>
      {loading && <Loading />}
    </div>
  );
}

export default App;
