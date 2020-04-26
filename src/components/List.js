import React, { useEffect, useState } from 'react';
import { getApps } from '../api/get';
import config from '../consts/config';
import { formatData } from '../ultils/helpers';
import Search from './Search';
import Pagination from './Pagination';
import ListItem from './ListItem';

const {pageSize} = config;

const List = () => {
  const [list, setList] = useState([]);
  const [pages, setPages] = useState();
  const [chunk, setChunk] = useState([]);
  const [notFound, setNotFound] =useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [initialList, setInitialList] = useState([]);
  const [searchByCategories, setSearchByCategories] = useState('');
  
  useEffect(() => { 
    const loadData = async () => {
      const data = await getApps();
      updateView(data);
      setInitialList(data);
    }
    
    loadData(); 
  },[]);
  
  useEffect(() => {
    searchView();
  }, [searchTerm, searchByCategories]);

  const searchView = () => {
    searchByCategories && setSearchTerm(searchByCategories);
    
    if(!searchTerm && initialList.length) {
      updateView(initialList);
      return;
    };
    
    const search = handleSearch();

    if(search.length) {
      updateView(search);
      setSearchByCategories('');
    } else {
      searchByCategories && setNotFound(true);
    }
  };

  
  const countPage = (dataLength) => setPages(Math.ceil( dataLength / pageSize));

  const updateView = (data) => {
    const result = formatData(data)
    const [firstPage] = result;
    setNotFound(false);
    setChunk(result);
    setList(firstPage);
    countPage(data.length);
    setCurrentPage(1);
  };

  const handleSearch = () => {
    return chunk.flat().filter((
      {name, categories}
    ) => searchByCategories ? categories.includes(searchByCategories) : name.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  const handleCurrentPage = index => {
    setCurrentPage(index);
    setList(chunk[index - 1]);
  };

  const propsSearch = {searchTerm, setSearchTerm};
  const propsPagination = {currentPage, handleCurrentPage, pages};

  return (
    <>
      <p>{notFound}</p>
      <Search {...propsSearch} />
      {notFound && <p>no results found</p>}
      {
        !notFound &&
        <ul>
          {
            list && list.map((item) => <ListItem key={item.id} {...item} setSearchByCategories={setSearchByCategories} />)
          }
        </ul>
      }

      {pages}

      {!notFound && <Pagination {...propsPagination} />}
    </>
  )
};

export default List;
