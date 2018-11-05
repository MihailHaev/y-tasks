import React, {PureComponent} from 'react';

// term - значение строки поиска Str | data - данные Arr | update - функция обновления Func
class Filters extends PureComponent {
  state = {
    filteredDataSearch: this.props.data, // Данные отфильтрованные поиском
    filteredDataCheckBox: this.props.data, // Данные отфильтрованные чекбоксом
    filteredDataSelect: this.props.data  // Данные отфильтрованные выбором
  };
// Функция для группировки всех примененых фильтров
  groupFilters = () => {
    if(this.state.filteredDataCheckBox == undefined) {
      this.state.filteredDataCheckBox = this.props.data;
    }
    if(this.state.filteredDataSearch == undefined) {
      this.state.filteredDataSearch = this.props.data;
    }
    if(this.state.filteredDataSelect == undefined) {
      this.state.filteredDataSelect = this.props.data;
    }
    let groupedFilters = this.state.filteredDataSearch.filter(obj => {
      for (let i = 0; i < this.state.filteredDataCheckBox.length; i++) {
        if(this.state.filteredDataCheckBox[i].id == obj.id) {
          return true;
        }
      }
      return false;
    });
    groupedFilters = groupedFilters.filter(obj => {
      for (let i = 0; i < this.state.filteredDataSelect.length; i++) {
        if(this.state.filteredDataSelect[i].id == obj.id) {
          return true;
        }
      }
      return false;
    });
    
    return groupedFilters;
  }
 
  dataSearch = e => {
    const value = e.target.value.toLowerCase();

    this.state.filteredDataSearch = this.props.data.filter(tableData => {
  
      return ((String(tableData.flightNumber).includes(value))
        || tableData.from.toLowerCase().includes(value)
        || tableData.to.toLowerCase().includes(value));
    });

    const filter = this.groupFilters();
    // Обновление данных
    this.props.update({
      data: filter,
      term: value
    });
  }

  findWhere = e => {
    const selected = e.target.value;
    const data = this.props.data;

      if (selected == 'all') {
        this.state.filteredDataSelect = data;
      }
      else if (selected == 'arriving') {
        this.state.filteredDataSelect = data.filter(tableData => {
          return tableData.to.includes('Москва');
        });
      } else if (selected == 'departing') {
        this.state.filteredDataSelect = data.filter(tableData => {
          return tableData.from.includes('Москва');
        });
      }
 
    const filter = this.groupFilters();
    // Обновление данных
    this.props.update({ data: filter });
  }

  findDelayed = e => {
    const isChecked = e.target.checked;
    const data = this.props.data;

    this.state.filteredDataCheckBox = data;
    if (isChecked) {
      this.state.filteredDataCheckBox = data.filter(tableData => {
        return tableData.flightDelay.isDelay;
      })
    } 

    const filter = this.groupFilters();
    // Обновление данных
    this.props.update({ data: filter });
  }
  render() {
    return (
      <div>
        <label
          style={{marginBottom: '5px', marginRight: '1%'}}
        >Рейсы</label>
        <select
          onChange={this.findWhere}
          name='flights'
          style={{marginBottom: '5px', marginRight: '1%'}}>
          <option value='all'>все</option>
          <option value='arriving'>прилетающие</option>
          <option value='departing'>вылетающие</option>
        </select>
        <label
          style={{marginBottom: '5px', marginRight: '1%'}}
        >Задержанные рейсы</label>
        <input
          type='checkbox'
          onChange={this.findDelayed}
          className='checkbox'
          style={{marginBottom: '5px'}}
        />
        <input
          value={this.props.term}
          type="text"
          placeholder="Найти рейс..."
          onChange={this.dataSearch}
          className="border"
          style={{marginBottom: '5px', marginLeft: '1%', width:'50%'}}
        />
      </div>
    );
  }
}

export default Filters