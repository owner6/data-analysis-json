const url = 'https://dummyjson.com/users'

function getData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((users) => processData(users))
}

function processData(users) {
  const maxWeight = findMaxWeight(users)
  const minWeight = findMinWeight(users)
  const maxHeight = findMaxHeight(users)
  const minHeight = findMinHeight(users)
  const averageWeight = findAverageWeight(users)
  const averageHeight = findAverageHeight(users)
  const maleUsersWeight = filterMaleUsersWeight(users)
  const maleUsersHeight = filterMaleUsersHeight(users)
  return { 
    users, 
    maxWeight,
    minWeight,
    maxHeight,
    minHeight,
    averageWeight,
    averageHeight,
    maleUsersWeight,
    maleUsersHeight
  }
}

function findMaxWeight(users) {
  let maxWeight = 0
  for (let i = 0; i < users.length; i++) {
    if (users[i].weight > maxWeight) {
      maxWeight = users[i].weight
    }
  }
  return maxWeight
}

function findMinWeight(users) {
  let minWeight = Number.MAX_VALUE
  for (let i = 0; i < users.length; i++) {
    if (users[i].weight < minWeight) {
      minWeight = users[i].weight
    }
  }
  return minWeight
}

function findMaxHeight(users) {
  let maxHeight = 0
  for (let i = 0; i < users.length; i++) {
    if (users[i].height > maxHeight) {
      maxHeight = users[i].height
    }
  }
  return maxHeight
}

function findMinHeight(users) {
  let minHeight = Number.MAX_VALUE
  for (let i = 0; i < users.length; i++) {
    if (users[i].height < minHeight) {
      minHeight = users[i].height
    }
  }
  return minHeight
}

function findAverageWeight(users) {
  let averageWeight = 0
  for (let i = 0; i < users.length; i++) {
    averageWeight += users[i].weight
  }
  return (averageWeight / users.length)
}

function findAverageHeight(users) {
  let averageHeight = 0
  for (let i = 0; i < users.length; i++) {
    averageHeight += users[i].height
  }
  return (averageHeight / users.length)
}

function filterMaleUsersWeight(users) {
  return users.filter(user => user.gender === 'male').reduce((prev, current) => (prev.weight > current.weight) ? prev : current);
}

function filterMaleUsersHeight(users) {
  return users.filter(user => user.gender === 'male').reduce((prev, current) => (prev.height > current.height) ? prev : current);
}

getData(url).then(data => {
  document.write('Самый большой вес: ', data.maxWeight, '<br>')
  document.write('Самый маленький вес: ', data.minWeight, '<br>')
  document.write('Самый большой рост: ', data.maxHeight, '<br>')
  document.write('Самий маленький рост: ', data.minHeight, '<br>')
  document.write('Средний вес пользователей: ', data.averageWeight, '<br>')
  document.write('Средний рост пользователей ', data.averageHeight, '<br>')
  document.write('Самый тяжелый мужчина: ', data.maleUsersWeight.lastName, '<br>')
  document.write('Самый высокий мужчина: ', data.maleUsersHeight.lastName, '<br>')
})
