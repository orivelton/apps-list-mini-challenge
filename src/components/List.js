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
  };

  updateView(data) {
    const result = formatData(data)
    const [firstPage] = result;
    
    this.setState({
      list : firstPage,
      pages: countPage(data.length),
      chunk: result
    });
  };

  handleCurrentPage = (index) => {
    const { chunk } = this.state;

    this.setState({
      list: chunk[index - 1],
      currentPage: index
    });
  };

  handleCategories = (item) => {
    this.setState({ 
      isCategories: true },
      () => { this.handleSearchTerm(item)}
    );
  }

  handleSearchTerm = (valueSearch, isCategories) => {
    isCategories && this.setState({ isCategories: false })
    this.setState({valueSearch});
    this.showResultSearch(valueSearch)
  };

  resetList() {
    const { initialState } = this.state;
    this.updateView(initialState);
  };

  showResultSearch (updateView) {
    if(!updateView) {
      this.resetList();
      return;
    };

    if(!updateView.replace(/\s/g,'')) return;

    const {chunk, isCategories} = this.state;
    this.updateView(handleSearch(chunk, updateView, isCategories));
  };
  
  render() {
    const {searchTerm, valueSearch, notFound, list, currentPage, pages} = this.state;
    const propsSearch = {searchTerm, valueSearch, handleCategories: this.handleCategories, handleSearchTerm: this.handleSearchTerm};
    const propsPagination = {currentPage, pages, handleCurrentPage: this.handleCurrentPage};

    return (
      <>
        <Search {...propsSearch} />

        {notFound && <p>no results found</p>}
        {
          !notFound &&
          <ul>
            {
              list && list.map((item) => 
                <ListItem
                  key={item.id}
                  {...item}
                  handleCategories={this.handleCategories}
                />
              )
            }
          </ul>
        }

        {(!notFound && pages !== 1) && <Pagination {...propsPagination} />}
    </>
    )
  }
};

export default List;
