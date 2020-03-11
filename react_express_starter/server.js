const express = require('express');

const app = express();

const customers = [
  {id: 1, firstName: 'John', lastName: 'Doe'},
  {id: 2, firstName: 'Brad', lastName: 'Traversy'},
  {id: 3, firstName: 'Mary', lastName: 'Swanson'},
];

app.use(express.json());

app.get('/api/customers', (req, res) => {

  res.json(customers);
});

app.post('/api/customers', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);