import React, { Component } from 'react'

export class Table extends Component {
    render() {
    return (
      <div className='container'>
      <h1>Ini adalah Component Table</h1>
        <table className='mt-4 table table-striped'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Usia</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Domina</td>
                    <td>23</td>
                </tr>
            </tbody>
        </table>
      </div>
    )
  }
}

export default Table