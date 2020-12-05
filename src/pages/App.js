import React, { Fragment, useEffect } from 'react'
import MyTodos from './TodosPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from "react-redux";
import CreateTodoApp from './CreateTodoPage';
import { getInitialData } from '../actions/shared';

const App = ({ dispatch, todos }) => {
  useEffect(() => {
    dispatch(getInitialData())
  }, [])

  return (
    <Router>
      <Switch>
        <Fragment>
          <div className="App">
            <Route path='/createTodo' render={() => (
              <CreateTodoApp />
            )} />
            <Route exact path='/' render={() => (
              <MyTodos />
            )} />
          </div>
        </Fragment>
      </Switch>
    </Router>
  );
}

function mapStateToProps({ todos }) {
  return {
    todos
  }
}

export default connect(mapStateToProps)(App);
