import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = e => {
    this.props.store.checkItem(this.props.item.name)
  }
  editItem = () => {
    const newLocation = prompt('Enter new location')
    this.props.store.editItem(this.props.item.name, newLocation)
  }
  deleteItem = () => {
    this.props.store.deleteItem(this.props.item.name)
  }
  render() {
    const { item } = this.props
    return (
      <div className={item.completed ? 'crossed' : ''}>
        <input type='checkbox' value={item.name} onClick={this.checkItem} />
        {item.name} | {item.location}
        <button onClick={this.editItem}>E</button>
        <button onClick={this.deleteItem}>X</button>
        {/*   your code here
            each item should be in an input checkbox
            it should display the item name and location
            it should have both an edit button and a delete button
      */}
      </div>
    )
  }
}

export default Item
