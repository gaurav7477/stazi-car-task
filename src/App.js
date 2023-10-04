import './App.css';
import carData from './data';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSearch } from './context/Search';
import Navbar from './components/Navbar/Navbar';
import Carcard from './components/CarCard/Carcard';




function App() {

  // globally state of search with Context API
  const [search, setSearch] = useSearch();

  // pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(carData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(carData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % carData.length;
    setItemOffset(newOffset);
  };

  // search function
  useEffect(() => {
    const filteredData = carData.filter((car) => {
      return car.name.toLowerCase().includes(search.toLowerCase());
    });
    setCurrentItems(filteredData.slice(0, itemsPerPage));
    setPageCount(Math.ceil(filteredData.length / itemsPerPage));
    setItemOffset(0);


  }, [search, setSearch]);



  return (

    <>
      <Navbar />

      <div className="container-fluid">

        {/* map data of carData  */}
        {currentItems.map((car) => {
          return (
            <Carcard key={car.id} {...car} />
          )
        })}
      </div>

      <footer>
        <ReactPaginate
          breakLabel="..."
          nextLabel="→"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="←"
          renderOnZeroPageCount={null}
          containerClassName='pagination'
          pageLinkClassName='page-num'
          previousLinkClassName='page-num'
          nextLinkClassName='page-num'
          activeLinkClassName='active'
        />
      </footer>
    </>

  );
}

export default App;
