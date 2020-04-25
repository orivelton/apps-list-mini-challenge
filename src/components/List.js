import React, { useEffect, useState } from 'react';
import { getApps } from '../api/get';
import config from '../consts/config';
import { formatData } from '../ultils/helpers';
import Search from './Search';
import Pagination from './Pagination';
import ListItem from './ListItem';

const List = () => {
  const [list, setList] = useState([]);
  const [pages, setPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [chunk, setChunk] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => { 
    const loadData = async () => {
      const data = await getApps();
      const result = formatData(data)
      const [firstPage] = result;
      setChunk(result);
      setList(firstPage);
      setPages(Math.ceil(data.length / config.pages));
    }
    
    loadData(); 
  },[]);

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm])


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

      <ul>
        {
          list.map((item) => <ListItem key={item.id} {...item}/>)
        }
      </ul>

      <Pagination {...propsPagination} />
    </>
  )
};

export default List;
