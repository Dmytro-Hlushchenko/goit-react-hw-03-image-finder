import styles from 'styles.module.css'
import React from "react";
import { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import { getPictures } from "API";
import  Button  from "./Button";


//Button :

//-При натисканні на кнопку Load more повинна довантажуватись
//наступна порція зображень і рендеритися разом із попередніми.

//-Кнопка повинна рендеритися лише тоді, коли є якісь завантажені зображення.

//-Якщо масив зображень порожній, кнопка не рендериться.

//Loader:
//-Компонент спінера відображається, доки відбувається завантаження зображень.
//Використовуйте будь-який готовий компонент, наприклад react-loader-spinner
// або будь-який інший.

//Modal:
//-Під час кліку на елемент галереї повинно відкриватися модальне вікно
// з темним оверлеєм і відображатися велика версія зображення.

//-Модальне вікно повинно закриватися по натисканню клавіші ESC
//або по кліку на оверлеї.

//Зовнішній вигляд схожий на функціонал цього VanillaJS-плагіна, 
//тільки замість білого модального вікна рендериться зображення
// (у прикладі натисніть Run). Анімацію робити не потрібно!



export class App extends Component {

state = {
  errore: false,
  pictures: [],
  loading: true,
  search:'',
  page: 0,
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
      
        if (prevState.search !== this.state.search || 
            prevState.page !== this.state.page) {
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
      page:1,
  });
  };

onLoadMore = () => {
  this.setState(prevState => ({
    page: prevState.page + 1,
    isLoading: true,
  }));

  console.log("ascasc")
  console.log(this.state)
}


render() {
  const {loading, error} = this.state;

    return(
      <div className={styles.App}>
        <Searchbar 
          onSearchBtn = {this.onSubmit}>
        </Searchbar>
        {loading && <b>Loading.........</b>}
        {error && <b>Errore..try reload page.....</b>}
        <ImageGallery pictures = {this.state.pictures}>
        </ImageGallery>
        <Button
          onClick={this.onLoadMore}       
        >

        </Button>

      </div>
    )
  }
}