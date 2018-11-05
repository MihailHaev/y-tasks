import React, {PureComponent} from 'react';
import Table from './Table';
import Filters from './Filters';
import load from '../utils/load';

class App extends PureComponent {
  constructor(props) {
    super(props);
    // Устанавливаем состояние
    this.state = {
      data: [],
      term: ''
    };
    // Сразу загружаем данные
    this.loadData();
  }

  loadData() {
    load(this.props.data).then(schedule => {
      this.firstData = JSON.parse(schedule, function(key, value) {
        if (key == 'arrival' || key == 'departure') return new Date(value);
        return value;
      });
      this.setState({
        data: this.firstData
      });
      const preloader = document.querySelector('.preloader');
      preloader.style.opacity = 0;
      setTimeout(() => {
        preloader.remove();
      }, getComputedStyle(preloader).transitionDuration.slice(0, -1) * 1000 );
    });
  }

  render() {  
    // Возвращяем таблицу и инпут поиска
    return (
      <div className='container'>
        <h1 className='display-6'
        style={{margin: '2% 0 3% 10%'}}>
          Табло Аэропорта
        </h1>
        <div>
        <Filters term={this.state.term} data={this.firstData} update={this.updateData.bind(this)}/>
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