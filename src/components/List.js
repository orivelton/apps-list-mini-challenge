import React, { Component } from 'react';
import { getApps } from '../api/get';
import Search from './Search';
import ListItem from './ListItem';
import Pagination from './Pagination';

import { formatData, countPage, handleSearch } from '../ultils/helpers';

 class List extends Component {
  state = {
    list: [],
    pages: 0,
    chunk: [],
    notFound: false,
    valueSearch: '',
    currentPage: 1,
    isCategories: false,
    initialState: []
  };
  
  componentDidMount () {
    const loadData = async () => {
      const data = await getApps();
      this.updateView(data);
      this.setState({initialState: data})
    }
    
    loadData(); 
  }

  updateView(data) {
    const result = formatData(data)
    const [firstPage] = result;


    this.setState({
      list : firstPage,
      pages: countPage(data.length),
      chunk: result
    });
  }

  handleCurrentPage = (index) => {
    const { chunk } = this.state;

    this.setState({
      list: chunk[index - 1],
      currentPage: index
    });
  };

  handleSearchTerm = (valueSearch) => {
    this.setState({valueSearch});
    this.showResultSearch(valueSearch)
  };

  resetList() {
    const { initialState } = this.state;
    this.updateView(initialState);
  }

  showResultSearch (updateView) {
    // .replace(/\s/g,'')
    if(!updateView) {
      this.resetList();
      return;
    };

    const {chunk} = this.state;
    console.log(chunk);
    this.updateView(handleSearch(chunk, updateView));


  };

  

  render() {
    const {searchTerm, valueSearch, setIsCategories, notFound, list, currentPage, pages} = this.state;

    const propsSearch = {searchTerm, valueSearch, setIsCategories};
    const propsPagination = {currentPage, pages};
    return (
      <>
        <Search 
          {...propsSearch}
          valueSearch={valueSearch}
          handleSearchTerm={this.handleSearchTerm}
        />

        {notFound && <p>no results found</p>}
        {
          !notFound &&
          <ul>
            {
              list && list.map((item) => <ListItem key={item.id} {...item} setSearchTerm={this.setSearchTerm} setIsCategories={setIsCategories}/>)
            }
          </ul>
        }

        {!notFound && <Pagination {...propsPagination} handleCurrentPage={this.handleCurrentPage}/>}
    </>
    )
  }
};

export default List;
