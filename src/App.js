import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : 'Ȧ�浿',
    'birthday' : '961222',
    'gender' : '����',
    'job' : '���л�'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '�̼���',
    'birthday' : '001122',
    'gender' : '����',
    'job' : '���л�'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '�κ���',
    'birthday' : '900115',
    'gender' : '����',
    'job' : '���л�'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return(
              <Customer
              key = {c.id}
              id = {c.id}
              image = {c.image}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
