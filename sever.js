const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const employeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  office: String,
  age: Number,
  startDate: Date,
  salary: Number,
});

const Employee = mongoose.model('Employee', employeeSchema);

const dbURI = 'mongodb://username:password@cluster-address:port/database-name';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server is listening on port 3000');
    });
  })
  .catch(error => {
    console.error('Failed to connect to MongoDB:', error);
  });

app.get('/api/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.use(express.static('public'));

app.post('/api/employees', async (req, res) => {
  const newEmployee = new Employee(req.body);
  try {
    const savedEmployee = await newEmployee.save();
    res.json(savedEmployee);
  } catch (error) {
    console.error('Error saving employee:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});