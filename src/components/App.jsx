import styles from 'styles.module.css'
import React from "react";
import { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import { getPictures } from "API";
import  Button  from "./Button";
import Loader from './Loader';


export class App extends Component {

state = {
  errore: false,
  pictures: [],
  isLoading: false,
  loadMore: false,
  search:'',
  page: 1,
}

async componentDidUpdate(prevProps, prevState){
      
        if (prevState.search !== this.state.search || 
            prevState.page !== this.state.page) {
          this.setState({isLoading: true})
          
          const {page, search} = this.state

          try {
          const pictures = await getPictures(search, page);
            
            this.setState(prevState => ({
              pictures: [...prevState.pictures, ...pictures.hits],
              loadMore: page < Math.ceil(pictures.totalHits / 12),
            }));
      
          } catch(error) {
            this.setState({
              error: true,
            });
          }
          
          finally {
              this.setState({isLoading: false})
            }
        }
      }

onSubmit = query => {
      this.setState({
      search: query ,
      pictures: [],
      page:1,
  });
  };

  
onLoadMore = () => {
  this.setState(prevState => ({
    page: prevState.page + 1,
  }));
}

render() {
  const {isLoading, error, loadMore} = this.state;

    return(
      <div className={styles.App}>
        <Searchbar 
          onSearchBtn = {this.onSubmit}>
        </Searchbar>

          {isLoading &&<Loader></Loader> }
          {error && <b>Errore..try reload page.....</b>}
        
        <ImageGallery 
          pictures = {this.state.pictures}
        >
        </ImageGallery>

        {loadMore && (
          <Button
            onClick={this.onLoadMore}>
          </Button>
        )}       
      </div>
    ) 
  }
};