export default [
  {
    id: 1,
    flightNumber: 131,
    from: 'Москва',
    to: 'Сочи',
    arrival: [1, 11, 2016, 18, 0],
    departure: [1, 11, 2016, 12, 45],
    flightDelay: {
      isDelay: false
    }

  },
  {
    id: 2,
    flightNumber: 132,
    from: 'Париж',
    to: 'Москва',
    arrival: [2, 11, 2016, 3, 15],
    departure: [1, 11, 2016, 23, 45],
    flightDelay: {
      isDelay: false
    }

  },
  {
    id: 3,
    flightNumber: 133,
    from: 'Москва',
    to: 'Лондон',
    arrival: [2, 11, 2016, 7, 0],
    departure: [2, 11, 2016, 3, 30],
    flightDelay: {
      isDelay: false
    }

  },
  {
    id: 4,
    flightNumber: 134,
    from: 'Москва',
    to: 'Милан',
    arrival: [3, 11, 2016, 19, 50],
    departure: [3, 11, 2016, 14, 0],
    flightDelay: {
      isDelay: true,
      delayTime: [0, 0, 0, 2, 35]
    }

  }
]