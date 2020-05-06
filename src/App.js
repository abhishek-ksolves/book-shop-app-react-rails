import React, {Suspense, lazy} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import BookNav from './components/BookNav'
import BookHome from './components/BookHome'
import BookIndex from './components/BookIndex'
import BookIndexHooks from './components/BookIndexHooks'
import BookNew from './components/BookNew'
import BookNewHooks from './components/BookNewHooks'
import BookStoreContact from './components/BookStoreContact'
import BookEdit from './components/BookEdit'
import ErrorBoundaryDemo from './components/ErrorBoundaryDemo'
import BookShow from './components/BookShow'
import ToDoList from './components/ToDoList'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BookContainer from './components/BookContainer'
import { Provider } from 'react-redux';
import store from './redux/store';
import BookNewRedux from './components/BookNewRedux';

// const BookShow  = lazy( () => import('./components/BookShow'))

function App() {
  return (
    
      <Router>
        <Provider store={store}>
          {/* <div> */}
          <Container fluid="md">
            <Row>
              {/* <Col> */}
                <BookNav />
              {/* </Col> */}
            </Row><br/>
            <Row>
              {/* <ToDoList /> */}
              <Switch>
                <Route path="/" exact component={BookHome} />
                <Route path="/books" component={BookIndex} />
                <Route path="/books_hooks" exact component={BookIndexHooks} />
                <Route path="/books_redux" exact component={BookContainer} />
                <Route path="/book_new_redux" exact component={BookNewRedux} />
                <Route path="/edit" component={BookEdit} />
                <Route path="/contact_us" component={BookStoreContact} />
                <Route path="/add_new_book_hooks" component={BookNewHooks} />
                <Route path="/to_do_list" component={ToDoList} />
                <Route path="/add_new_book" render = {() => (
                  <ErrorBoundaryDemo>
                    <BookNew />
                  </ErrorBoundaryDemo>)}/>
                {/* <Suspense fallback = {<div className = 'loader'></div>}> */}
                  <Route path="/show" component={BookShow} />
                {/* </Suspense> */}
              </Switch>
            </Row>
          </Container>
            
            
          {/* </div> */}
        </Provider>
      </Router>
   
  )
}

export default App;