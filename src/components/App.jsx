import styles from 'styles.module.css'
import React from "react";
import { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import { getPictures } from "API";
import  Button  from "./Button";


export class App extends Component {

state = {
  errore: false,
  pictures: [],
  loading: true,
  search:'',
  page:''
}

async componentDidMount() {
    try {
      this.setState ({
        loading: true,
        error:false,
      });

      const pictures = await getPictures(this.state.search);
      this.setState({
        pictures: pictures.hits,
        loading: false,
      });

    } catch(error) {
      this.setState({
        error: true,
        loading: false,
      });
    }
    
    finally {
        this.setState({loading: false})
      }
  };

async componentDidUpdate(prevProps, prevState){
      
        if (prevState.search !== this.state.search) {
          try {
            this.setState ({
              loading: true,
              error:false,
            });
      
            const pictures = await getPictures(this.state.search);
            this.setState({
              pictures: pictures.hits,
              loading: false,
            });
      
          } catch(error) {
            this.setState({
              error: true,
              loading: false,
            });
          }
          
          finally {
              this.setState({loading: false})
            }
        }
   
  }

onSubmit = evt => {
      this.setState({
      search: evt,
  });
  };


render() {
  const {loading, error} = this.state;

    return(
      <div className={styles.App}>
        <Searchbar onSearchBtn = {this.onSubmit}>
        </Searchbar>
        {loading && <b>Loading.........</b>}
        {error && <b>Errore..try reload page.....</b>}
        <ImageGallery pictures = {this.state.pictures}>
        </ImageGallery>
        <Button>

        </Button>

      </div>
    )
  }
}