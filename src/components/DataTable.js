import React, { useState } from 'react';
import airports from '../airports.json';
import ReactPaginate from 'react-paginate';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const DataTable = () => {
  const [data, setData] = useState(airports);
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 10;
  const pagesvisited = pageNumber * userPerPage;

  const [query, setQuery] = useState('');
  const [searchColumns, setSearchColumns] = useState([
    'Small',
    'Medium',
    'Large',
    'Heliport',
    'Closed',
    'In your favorites',
  ]);

  const pageCount = Math.ceil(data.length / userPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className='table-filters'>
        <div className='filter-left'>
          <h3 className='check-text'>Type</h3>
          {searchColumns.map((value, index) => (
            <span key={index}>
              <input
                type='checkbox'
                className='check-value'
                value={searchColumns}
              />
              <span className='check-value'>{value}</span>
            </span>
          ))}
        </div>

        <div className='filter-right'>
          <h3>Filter by Search</h3>
          <input
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            size='50'
          />
        </div>
      </div>

      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>ICAO</th>
              <th>IATA</th>
              <th>Elev.</th>
              <th>Lat.</th>
              <th>Long.</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((val) => {
                if (val === '') {
                  return false;
                } else if (
                  val.name.toLowerCase().includes(query.toLocaleLowerCase()) ||
                  val.type.toLowerCase().includes(query.toLocaleLowerCase()) ||
                  val.icao.toLowerCase().includes(query.toLocaleLowerCase())
                ) {
                  return val;
                }
              })
              .slice(pagesvisited, pagesvisited + userPerPage)
              .map(
                ({
                  name,
                  id,
                  icao,
                  iata,
                  latitude,
                  elevation,
                  type,
                  longitude,
                }) => (
                  <tr key={id}>
                    <td key={id}> {name}</td>
                    <td>{icao}</td>
                    <td>{iata}</td>
                    <td>{latitude}</td>
                    <td>{longitude}</td>
                    <td>{elevation}</td>
                    <td>{type}</td>
                  </tr>
                )
              )}
          </tbody>
        </table>
        <ReactPaginate
          previousLabel={<ChevronLeftIcon fontSize='large' />}
          nextLabel={<ChevronRightIcon fontSize='large' />}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName='pagination '
          previousClassName='previousBtn'
          nextClassName='nextBtn '
          activeClassName='pagination-active'
        />
      </div>
    </>
  );
};

export default DataTable;
