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
  const [initialList, setInitialList] = useState([]);
  const [pages, setPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [chunk, setChunk] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [notFound, setNotFound] =useState(false);
  
  useEffect(() => { 
    const loadData = async () => {
      const data = await getApps();
      updateView(data);
      setInitialList(data);
    }
    
    loadData(); 
  },[]);
  
  useEffect(() => {
    if(!searchTerm) {
      initialList.length && updateView(initialList);
      return;
    };
    const search = chunk.flat().filter(({name}) => name.includes(searchTerm));
    search.length ? updateView(search) : setNotFound(true);
  }, [searchTerm]);

  
  const countPage = (dataLength) => setPages(Math.ceil( dataLength / pageSize));

  const updateView = (data) => {
    const result = formatData(data)
    const [firstPage] = result;
    setNotFound(false)
    setChunk(result);
    setList(firstPage);
    countPage(data.length);
  }


  const handleCurrentPage = index => {
    setCurrentPage(index);
    setList(chunk[index - 1]);
  }

  const propsSearch = {searchTerm, setSearchTerm};
  const propsPagination = {currentPage, handleCurrentPage, pages}

  return (
    <>
      <p>{searchTerm}</p>  
      <Search {...propsSearch} />
      {notFound && <p>no results found</p>}
      <ul>
        {
          (list && !notFound) && list.map((item) => <ListItem key={item.id} {...item}/>)
        }
      </ul>

      {!notFound && <Pagination {...propsPagination} />}
    </>
  )
};

export default List;
