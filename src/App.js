import './App.css';
import React, { useState } from 'react';
import Content from './Content';
import Header from './Header';
import AddItem from './AddItem';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("list")));

  const [newItems, setNewItems] = useState('');

  const addItem = (item) => {
    const id = items.length? items[items.length-1].id+1: 1;
    const myNewItem = {id, checked:false, item};
    const listItems = [...items, myNewItem];
    setItems(listItems);
    localStorage.setItem("list", JSON.stringify(listItems));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItems) return;
    addItem(newItems);
    setNewItems('');
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id===id? {...item, checked: !item.checked}: item);
    setItems(listItems);
    localStorage.setItem("list", JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id!==id);
    setItems(listItems);
    localStorage.setItem("list", JSON.stringify(listItems));
  }

  return (
    <div className="App">
      <Header 
        length={items.length}
      />
      <AddItem 
        newItems={newItems}
        setNewItems={setNewItems}
        handleSubmit={handleSubmit}
      />
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;