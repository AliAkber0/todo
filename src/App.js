import { Component } from "react";
import AddToList from "./components/addToList";
import Card from "./components/card";
import "./App.css";
const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      userId: null,
      withFetch: [],
      withAxios: [],
    };
    this.setInput = this.setInput.bind(this);
    this.setEdit = this.setEdit.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
      this.setState({ withAxios: [...data] });
    });
  }

  setInput(value) {
    this.setState({ name: value });
  }

  setEdit(value, id) {
    this.setState({ name: value, userId: id });
  }

  create() {
    if (this.state.name.trim().length > 0 && this.state.userId == null) {
      axios
        .post(`https://jsonplaceholder.typicode.com/users`, {
          name: this.state.name,
        })
        .then((res) => {
          this.setState({ name: "" });
          alert("User Created successfully .......");
        })
        .catch((err) => console.log("error :: ", err));
    } else if (this.state.userId == null) {
      alert("Enter a user");
    } else {
      alert("invalid operation");
    }
  }

  update() {
    if (this.state.name.trim().length > 0) {
      axios
        .patch(
          `https://jsonplaceholder.typicode.com/todos/${this.state.userId}`,
          {
            id: this.state.userId,
            name: this.state.name,
          }
        )
        .then((res) => {
          this.setState({ name: "", userId: null });
          alert("updated successfully .......");
        })
        .catch((err) => console.log("error :: ", err));
    } else {
      alert("Enter some to text to upadate user name");
    }
  }

  delete(userId) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        alert("deleted successfully .......");
      })
      .catch((err) => console.log("error :: ", err));
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>User List APP</h1>
          <AddToList
            state={this.state}
            create={this.create}
            update={this.update}
            setInput={this.setInput}
          />
          <div className="list">
            {this?.state?.withAxios && (
              <Card
                withAxios={this.state.withAxios}
                _delete={this.delete}
                setEdit={this.setEdit}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
