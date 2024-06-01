
import './App.css';
import Home from './Pages/Home';
import Header from './componets/Header/Header';
import Search from './componets/Search/Search ';
import React, { useEffect, useState } from "react";
import api from "../src/service/api";
import Pagination from './componets/Pagination/Pagination';

function App() {

  const [characters, setcharacters] = useState();
  const [info, setInfo] = useState({ pages: 0, count: 0, next: '', prev: '' });
  const [option, setOption] = useState('character');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const params = new URLSearchParams();
  params.set('page', page);
  params.set('name', search)

  function modifyOption(value) {
    console.log(value);
    setOption(value);
    console.log('option setada: ', option);
  }

  function modifySearch(value) {
    setSearch(value);
    console.log('option setada: ', search);
  }

  const scrollToTop = () => {
    window.scrollTo({
   top: 0,
   behavior: 'smooth'
    })
   }

  function getPageClicked(value) {
    setPage(value);
    scrollToTop();
  }

  function getPrevPage() {
    setPage(page - 1);
    scrollToTop();
  }

  function getNextPage() {
    setPage(page + 1);
    scrollToTop();
  }

  useEffect(() => {

    async function fetchAndSet() {

      try {
        const response = await api
          .get(`${option}`, { params });

        if (response.status === 200) {
          const data = response.data;
          console.log('data', data);
          setcharacters(data.results);
          setInfo(data.info);
          console.log(info);
        }
      } catch (err) {
        console.error("ops! ocorreu um erro" + err);
      }
    }

    fetchAndSet();
  }, [option, page , search]);


  return (
    <div>
      <Header
        handleOptions={modifyOption}
      />
      <Search
        handleSearch={modifySearch}
      />
      <Home
        option={characters}
      />
      <Pagination
        info={info} handlePage={getPageClicked} handlePrevPage={getPrevPage} handleNextPage={getNextPage}
      />
    </div>
  );
}

export default App;
