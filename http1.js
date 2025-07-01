fetch("http://localhost:3000/voters", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 11,
    name: "bista",
    age: 20
  })
})
  .then(data => data.json())  
  .then(data => console.log(data))
  .catch(err => console.error(err));
