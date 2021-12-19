import React from "react";

const Table = ({ name, sector, age, email }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{sector}</td>
            <td>{age}</td>
            <td>{email}</td>
        </tr>
    );
}

export default Table;