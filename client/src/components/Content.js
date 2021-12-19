import React from "react";
import Table from './Table';

const Content = ({ employees }) => {
    return (
        <tbody>
            {
                 employees && employees.map((persona) => <Table key={persona.id} name={persona.name} 
                   sector={persona.sector}
                   age={persona.age}
                   email={persona.email}
                   />)
                }
                </tbody>
    );
}
Content.defaultProps = {
	name: "Aqui va el titulo",
	sector: "danger",
	age: 0,
	email: "fa-award"

}
export default Content;