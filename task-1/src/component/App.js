import React, {PureComponent} from 'react';
import Table from './Table';
import Filters from './Filters';
import timetable from '../data'

class App extends PureComponent {
  state = {
    data: timetable,  // Данные 
    term: '' // Начальный поиск
  };

  render() {  
    // Возвращяем таблицу и инпут поиска
    return (
      <div className='container'>
        <h1 className='display-6'
        style={{margin: '2% 0 3% 10%'}}>
          Табло Аэропорта
        </h1>
        <div>
        <Filters term={this.state.term} data={timetable} update={this.updateData.bind(this)}/>
        </div>
        <Table tableData={this.state.data}/> 
      </div>  
    );

    
  }
  // Устанавливаем функцию обновления данных
  updateData = config => {
    this.setState(config);
  }

}

export default App;