import React, { useEffect, useState } from 'react';
import { getApps } from '../api/get';
import { formatData, countPage, handleSearch } from '../ultils/helpers';
import Search from './Search';
import Pagination from './Pagination';
import ListItem from './ListItem';

const List = () => {
  const [list, setList] = useState([]);
  const [pages, setPages] = useState();
  const [chunk, setChunk] = useState([]);
  const [notFound, setNotFound] =useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [initialList, setInitialList] = useState([]);
  const [isCategories, setIsCategories] = useState(false);
  
  useEffect(() => { 
    const loadData = async () => {
      const data = await getApps();
      updateView(data);
      setInitialList(data);
    }
    
    loadData(); 
  },[]);
  
  useEffect(() => {searchView();}, [searchTerm]);
  
  const searchView = () => {
    if(!searchTerm.replace(/\s/g,'') && initialList.length && !isCategories) {
      updateView(initialList);
      return;
    };

    const search = handleSearch(chunk, isCategories, searchTerm);
    search.length ? updateView(search) : setNotFound(true);
  };

  const updateView = (data) => {
    const result = formatData(data)
    const [firstPage] = result;
    setNotFound(false);
    setChunk(result);
    setList(firstPage);
    countPage(data.length, setPages);
    setCurrentPage(1);
  };

  const handleCurrentPage = index => {
    setCurrentPage(index);
    setList(chunk[index - 1]);
  };

  const propsSearch = {searchTerm, setSearchTerm, setIsCategories};
  const propsPagination = {currentPage, handleCurrentPage, pages};

  return (
    <>
      <Search {...propsSearch} />
      {notFound && <p>no results found</p>}
      {
        !notFound &&
        <ul>
          {
            list && list.map((item) => <ListItem key={item.id} {...item} setSearchTerm={setSearchTerm} setIsCategories={setIsCategories}/>)
          }
        </ul>
      }

      {!notFound && <Pagination {...propsPagination} />}
    </>
  )
};

export default List;
