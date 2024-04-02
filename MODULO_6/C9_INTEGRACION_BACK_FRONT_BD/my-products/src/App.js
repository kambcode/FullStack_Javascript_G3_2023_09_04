import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const myRef = React.useRef(null);
  const onHanlderCreateProduct = () => {
    postData("http://localhost:300/insertProduct", {
      "name": myRef.current.value, 
      "description": "Zapatos cuero", 
      "precio": 34000, 
      "precioPromo": 30000, 
      "cant": 3 
    }).then((data) => {
      return data.json() // JSON data parsed by `data.json()` call
    }).then((data)=> {
      console.log(data)
    }).catch((err) => {
      console.log(err);
    });
  }

  React.useEffect(()=>{
    postData("http://localhost:300/products", {
      "name": myRef.current.value, 
      "description": "Zapatos cuero", 
      "precio": 34000, 
      "precioPromo": 30000, 
      "cant": 3 
    }).then((data) => {
      return data.json() // JSON data parsed by `data.json()` call
    }).then((data)=> {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
  },[])

  return (
    <div className="App">
      <input ref={myRef} />
      <button onClick={onHanlderCreateProduct}>InsertData on Products</button>
    </div>
  );
}

export default App;


async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: { 'Content-Type': 'application/json' },
    mode: "cors",
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response // parses JSON response into native JavaScript objects
}