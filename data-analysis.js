const url = 'https://dummyjson.com/users'

function getData(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      const users = data.users;
      const maxWeight = findMaxWeight(users)
      const minWeight = findMinWeight(users)
      const maxHeight = findMaxHeight(users)
      const minHeight = findMinHeight(users)
      const averageWeight = findAverageWeight(users)
      return { 
        users, 
        maxWeight,
        minWeight,
        maxHeight,
        minHeight,
        averageWeight
      }
    })
}

function findMaxWeight(users) {
  let maxWeight = 0;
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
    averageWeight = averageWeight + users[i].weight
  }
  return  (averageWeight / users.length)
}

getData(url).then(data => {
  console.log('Самый большой вес: ', data.maxWeight)
  console.log('Самый маленький вес: ', data.minWeight)
  console.log('Самый большой рост: ', data.maxHeight)
  console.log('Самий маленький рост: ', data.minHeight)
  console.log('Средний вес пользователей: ', data.averageWeight)
})