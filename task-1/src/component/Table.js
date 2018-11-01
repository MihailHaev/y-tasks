import React, {PureComponent} from 'react';
import Row from './Row';

class Table extends PureComponent {
  
  state ={
    isPhoneUp: false,
    currentPage: 1,
    rowsPerPage: 7
  };

  render() {
    const currentPage = this.state.currentPage
    const rowsPerPage = this.state.rowsPerPage
    const indexOfLastRow = currentPage * rowsPerPage
    const indexOfFirstRow = indexOfLastRow - rowsPerPage
    const currentRows = this.props.tableData.slice(indexOfFirstRow, indexOfLastRow)

    const rowsElements = currentRows.map((row, index) => 
    <tr
      key={row.id}>
        <Row dataElement={row}/>
    </tr>
    )

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(this.props.tableData.length / rowsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (<li
        key={number}
        id={number}
        onClick={this.changePage}
        className='btn btn-primary'
        style={{marginRight: '5px'}}
        >
        {number}
        </li>
    )})
    return (
      <div>
        <table className='table'>
          <tr className='table-row'>
            <th>Номер рейса</th>
            <th>Откуда</th>
            <th>Куда</th>
            <th>Прибытие</th>
            <th>Вылет</th>
            <th>Задержка самолёта</th>
          </tr>
          {rowsElements}
        </table>
        <ul style={{listStyle: 'none'}}>
        {renderPageNumbers}
        </ul>
      </div>
    );
  };

  changePage = (event) => {
    this.setState({
      currentPage: event.target.id
    });
  };
}

  

export default Table