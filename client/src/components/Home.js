import React, { Component } from "react";
import { Table } from 'react-bootstrap'
import Content from './Content'



class Home extends Component {
  constructor() {
    super();
    this.state = {
      employees: []
    }
  }


    async componentDidMount  (){
       try {
         let response = await fetch('http://localhost:3001/list');
         let result = await response.json()
         console.log(response)
         console.log(result.data)
         let list = result.data[0].map(persona => {
           let item = {
             name: persona.name,
             sector: persona.sector,
             age: persona.age,
             email: persona.email
           }
           return item
         })
         this.setState({
           employees: [
             ...this.state.employees,
             ...list
           ],
         })

         
       } catch (error) {
         console.log(error)
       }
     }

     
  render() {
    return (
      <div className="home">
        <h1>¡Bienvenido!</h1>

        <Table striped bordered hover variant="dark" className="tabla">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Sector</th>
              <th>Edad</th>
              <th>Email</th>
            </tr>
          </thead>
          <Content employees={this.state.employees} />
        </Table>
      </div>
    )
  }
}
export default Home;
