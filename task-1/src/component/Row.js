import React from 'react'

function Row(props) {
  const dataElement = props.dataElement;
  function checkTime(date) {
        date = new Date(date[2], (date[1]-1), date[0], date[3], date[4]).
      toString().
      substr(16, 5);
    return date;
  }
   
  const timeOfArrive = checkTime(dataElement.arrival);
  const timeOfdeparture = checkTime(dataElement.departure, dataElement.flightDelay);
  return ( [
      <td key={dataElement.id}>{dataElement.flightNumber}</td>,
      <td key={dataElement.firstName}>{dataElement.from}</td>,
      <td key={dataElement.lastName}>{dataElement.to}</td>,
      <td key={dataElement.email}>{timeOfArrive}</td>,
      <td key={dataElement.email}>{timeOfdeparture}</td>,
      <td key={dataElement.phone}>{dataElement.flightDelay.isDelay ? 'Задерживается на '
        + checkTime(dataElement.flightDelay.delayTime) : ''}</td>
  ]
  )
}

export default Row
