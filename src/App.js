import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import UserDetails from './components/UserDetails'

import './App.css'

class App extends Component {
  state = {
    userList: [],
    name: '',
    location: '',
  }

  deletingUser = id => {
    const {userList} = this.state
    const updateUserList = userList.filter(eachPerson => eachPerson.id !== id)
    this.setState({
      userList: updateUserList,
    })
  }

  onAddContact = event => {
    event.preventDefault()
    const {name, location} = this.state
    const newUser = {
      id: uuidv4(),
      name,
      location,
    }

    this.setState(prevState => ({
      userList: [...prevState.userList, newUser],
      name: '',
      location: '',
    }))
  }

  onChangeLocation = event => {
    this.setState({location: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {name, location, userList} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">USER DETAILS</h1>
          <form className="contact-form-container" onSubmit={this.onAddContact}>
            <div className="Input">
              <input
                value={name}
                onChange={this.onChangeName}
                className="input"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="Input">
              <input
                className="input"
                value={location}
                onChange={this.onChangeLocation}
                placeholder="Enter Your Location"
              />
            </div>
            <div>
              <button type="submit" className="button">
                Add User
              </button>
            </div>
          </form>
          <ul className="contacts-table">
            <li className="table-header">
              <p className="table-header-cell name-column">Name</p>
              <hr className="separator" />
              <p className="table-header-cell">Location</p>
            </li>
            {userList.map(eachUser => (
              <UserDetails
                key={eachUser.id}
                userDetails={eachUser}
                deletingUser={this.deletingUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
