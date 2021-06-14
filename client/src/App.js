import React from "react";
import Nav from "./component/Nav/Nav";
import "./App.css";
import { useSelector } from "react-redux";
import PersonDetails from "./component/PersonDetails/PersonDetails";
import { BrowserRouter, Route } from "react-router-dom";
import PersonList from "./component/PersonList/PersonList";
import AddPerson from "./component/AddPerson/AddPerson";
import EditPerson from "./component/EditPerson/EditPerson";
function App() {
  const persons = useSelector((state) => state.persons);
  return (
    <BrowserRouter>
      <div className="bod">
        <Route
          exact={true}
          path="/"
          render={() => (
            <div>
              {" "}
              <Nav /> <PersonList />
            </div>
          )}
        />{" "}
      </div>
      <Route
        path="/person/:title"
        render={(props) => <PersonDetails {...props} persons={persons} />}
      />
      <Route
        path="/Edit/:name"
        render={(props) => <EditPerson {...props} persons={persons} />}
      />
      <Route path="/AddPerson" component={AddPerson}></Route>
    </BrowserRouter>
  );
}

export default App;
