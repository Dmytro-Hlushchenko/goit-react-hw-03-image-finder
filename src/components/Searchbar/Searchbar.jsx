import styles from 'styles.module.css'
import {Formik, Field, Form} from 'formik'

export default function Searchbar ({onSearchBtn}) {
      return (
        <Formik
          initialValues={{
            search:'',
          }}

          onSubmit={(values, actions) => {
            onSearchBtn(values.search)}}
        >
          <Form className={styles.Searchbar}>
             <header className="searchbar">
                  <button type="submit" className="button">
                    <span className="button-label">Search</span>
                  </button>

                  <Field
                    name="search"
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                  />
              </header>
          </Form>
         
        </Formik>
        
      )
  }