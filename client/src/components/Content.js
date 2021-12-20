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

export default Content;