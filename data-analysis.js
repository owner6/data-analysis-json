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
      return { 
        users, 
        maxWeight,
        minWeight,
        maxHeight,
        minHeight
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

getData(url).then(data => {
  console.log(data.maxWeight)
  console.log(data.minWeight)
  console.log(data.maxHeight)
  console.log(data.minHeight)
})