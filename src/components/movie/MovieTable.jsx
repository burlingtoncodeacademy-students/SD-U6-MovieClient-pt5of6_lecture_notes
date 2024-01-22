import React from 'react'
import { Table } from 'reactstrap';

function MovieTable() {
    return (
        <>
        <h1>List of Movies</h1>
        <Table striped>
            <thead>
                <tr>
                    <th>
                        Title
                    </th>
                    <th>
                        Genre
                    </th>
                    <th>
                        Rating
                    </th>
                    <th>
                        Length
                    </th>
                    <th>
                        Year Released
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">
                        1
                    </th>
                    <td>
                        Mark
                    </td>
                    <td>
                        Otto
                    </td>
                    <td>
                        @mdo
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        2
                    </th>
                    <td>
                        Jacob
                    </td>
                    <td>
                        Thornton
                    </td>
                    <td>
                        @fat
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        3
                    </th>
                    <td>
                        Larry
                    </td>
                    <td>
                        the Bird
                    </td>
                    <td>
                        @twitter
                    </td>
                </tr>
            </tbody>
        </Table>
        </>
    )
}

export default MovieTable