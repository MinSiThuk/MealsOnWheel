import React from 'react';
import { useTable, useRowSelect } from 'react-table';
import axios from 'axios';
import "./Memberlist.css"
const Memberlist = () => {
    const columns = React.useMemo(
        () => [
            { Header: 'ID', accessor: 'id' },
            { Header: 'Username', accessor: 'username' },
            { Header: 'Password', accessor: 'password' },
            { Header: 'Gender', accessor: 'gender' },
            { Header: 'Email', accessor: 'email' },
            { Header: 'DOB', accessor: 'dob' },
            { Header: 'Age', accessor: 'age' },

        ],
        []
    );

    const [data, setData] = React.useState([]);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    const fetchMember = async () => {
        try {
            const result = await axios.get('http://localhost:8080/members/member');
            setData(result.data);
        } catch (error) {
            console.error('Error fetching member:', error);
        }
    };

    React.useEffect(() => {
        fetchMember();
    }, []);

    return (
        <div>
            <h2>Member Table</h2>
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

export default Memberlist;
