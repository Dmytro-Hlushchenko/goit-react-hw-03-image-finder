import {Formik, Field, Form} from 'formik'

export default function Searchbar ({onSearchBtn}) {
      return (
        <Formik
          initialValues={{
            search:''
          }}

          onSubmit={values => {onSearchBtn(values.search)}}
        >
          <Form>
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