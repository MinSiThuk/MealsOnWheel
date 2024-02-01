import React from 'react';
import { useTable, useRowSelect } from 'react-table';
import axios from 'axios';
import "./Volunteerlist.css"
const Volunteerlist = () => {
    const columns = React.useMemo(
        () => [
            { Header: 'ID', accessor: 'id' },
            { Header: 'Username', accessor: 'name' },
            { Header: 'Password', accessor: 'password' },
            { Header: 'Address', accessor: 'address' },
            { Header: 'Email', accessor: 'email' },
            { Header: 'Phone', accessor: 'ph' },
            { Header: 'DOB', accessor: 'dob' },
            { Header: 'Age', accessor: 'age' },
            { Header: 'Skills', accessor: 'skills'},
            

        ],
        []
    );

    const [data, setData] = React.useState([]);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    const fetchVolunteer = async () => {
        try {
            const result = await axios.get('http://localhost:8080/volunteers/volunteer');
            setData(result.data);
        } catch (error) {
            console.error('Error fetching volunteer:', error);
        }
    };

    React.useEffect(() => {
        fetchVolunteer();
    }, []);

    return (
        <div>
            <h2>Volunteer Table</h2>
            <table class="table table-hover" {...getTableProps()} style={{ borderSpacing: '0', width: '100%' }}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()} class="table-secondary">
                            {headerGroup.headers.map(column => (
                                <th class="table-primary" {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Volunteerlist;
