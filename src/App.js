import React from 'react';
import './css/App.css'
import Button from 'react-bootstrap/Button'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      newItem : "",
      items : []
    }
  }

  updateInput = (key, value) => {
    this.setState({
      [key] : value
    })
  }

  addItem = () => {
    const newItem = {
      id : 10 * Math.random(),
      value : this.state.newItem
    }

    const tmpItems = [...this.state.items]

    tmpItems.push(newItem)
    
    this.setState({
      items : tmpItems,
      newItem : ""
    })

    console.log(this.state.items);
  }

  deleteItem = (id) => {
    const tmpItems = [...this.state.items]
    const newItems = tmpItems.filter(item => item.id !== id)

    this.setState({
      items : newItems
    })
  }

  render() {
    return (
      <div className="App">

        <h1>todo list app</h1>

        <input 
          type = 'text' 
          value = {this.state.newItem}
          onChange = {event => this.updateInput("newItem", event.target.value)}
        />
        <Button variant="secondary" onClick={() => this.addItem()}>add list</Button>
        
        {
          this.state.items.map(item => {
            return(
              <li key={item.id}>
                {item.value}
                <span className="deleteBtn" onClick={() => this.deleteItem(item.id)}> x</span>
              </li>
            )
          })
        }
      </div>
    );
  }
}

export default App;
