import logo from './logo.svg';
import './App.css';
import data from './data';
import CardProfile from './components/Card';
import {useState} from "react";

function App() {

  
  const [input, setInput] = useState ("");
  const [search, setSearch] = useState ("");

  const handleChange = (e)=>{
    setInput(e.target.value);
  }
  const dataFilter = data.filter(np =>np.nama_panggilan.toLowerCase() === search.toLocaleLowerCase()).map(apaweh=>
    <CardProfile
      nama_lengkap={apaweh.nama_lengkap}
      nama_panggilan={apaweh.nama_panggilan}
      nim={apaweh.nim}
      nomor_telepon={apaweh.nomor_telepon}
      id_line={apaweh.id_line}
      email={apaweh.email}
      hobi={apaweh.hobi}
      tanggal_lahir={apaweh.tanggal_lahir}
    />)
  const searchProfile = () => {
    setSearch(input);
    

  }
  return (
    <div className="App">
      <input onChange={handleChange} type="text" />
      <button onClick={searchProfile}>klik
      </button>
      {dataFilter} 
      {dataFilter.length === 0 && <h1>Data tidak ditemukan</h1>}
    </div>
  );
}

export default App;
