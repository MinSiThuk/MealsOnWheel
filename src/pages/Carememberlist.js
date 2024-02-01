import React from 'react';
import { useTable, useRowSelect } from 'react-table';
import axios from 'axios';
import "./Carememberlist.css"
const Carememberlist = () => {
    const columns = React.useMemo(
        () => [
            { Header: 'ID', accessor: 'id' },
            { Header: 'Name', accessor: 'name' },
            { Header: 'Password', accessor: 'password' },
            { Header: 'Phone', accessor: 'ph' },
            { Header: 'Email', accessor: 'email' },
            { Header: 'DOB', accessor: 'dob' },
            { Header: 'Age', accessor: 'age' },
            { Header: 'Address', accessor: 'address' },
            { Header: 'Experience', accessor: 'experience' },

        ],
        []
    );

    const [data, setData] = React.useState([]);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    const fetchCaregiver = async () => {
        try {
            const result = await axios.get('http://localhost:8080/caregivers/caregiver');
            setData(result.data);
        } catch (error) {
            console.error('Error fetching caregiver:', error);
        }
    };

    React.useEffect(() => {
        fetchCaregiver();
    }, []);

    return (
        <div>
            <h2>CaregiverTable</h2>
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

export default Carememberlist;
