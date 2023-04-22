const url = 'https://dummyjson.com/users';

getData(url)
  .then(users => {
    const results = processData(users);
    displayResults(results);
  })

function getData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.users)
}

function processData(users) {
  const maxWeightUser = findMaxWeightUser(users)
  const minWeightUser = findMinWeightUser(users)
  const maxHeightUser = findMaxHeightUser(users)
  const minHeightUser = findMinHeightUser(users)
  const averageWeight = calculateAverageWeight(users)
  const averageHeight = calculateAverageHeight(users)
  const nameWeight = filterMaleUsersWeight(users)
  const nameHeight = filterMaleUsersHeight(users)

  return {
    maxWeightUser,
    minWeightUser,
    maxHeightUser,
    minHeightUser,
    averageWeight,
    averageHeight,
    nameWeight,
    nameHeight
  }
}

function findMaxWeightUser(users) {
  return users.reduce((prev, current) => {
    return (Number(prev.weight) > Number(current.weight)) ? prev : current
  })
} 

function findMinWeightUser(users) {
  return users.reduce((prev, current) => {
    return (Number(prev.weight) < Number(current.weight)) ? prev : current
  })
}

function findMaxHeightUser(users) {
  return users.reduce((prev, current) => {
    return (Number(prev.height) > Number(current.height)) ? prev : current
  })
}

function findMinHeightUser(users) {
  return users.reduce((prev, current) => {
    return (Number(prev.height) < Number(current.height)) ? prev : current 
  })
}

function calculateAverageWeight(users) {
  const totalWeight = users.reduce((prev, current) => {
    return prev + current.weight 
  }, 0)
  return totalWeight / users.length
}

function calculateAverageHeight(users) {
  const totalHeight = users.reduce((prev, current) => {
    return prev + current.height 
  }, 0)
  return totalHeight / users.length
}

function filterMaleUsersWeight(users) {
  return users.filter(user => user.gender === 'male').reduce((prev, current) => (prev.weight > current.weight) ? prev : current)
}

function filterMaleUsersHeight(users) {
  return users.filter(user => user.gender === 'male').reduce((prev, current) => (prev.height > current.height) ? prev : current)
}

function displayResults(results) {
  document.getElementById("outputMaxWeightUser").textContent =  results.maxWeightUser.weight + ' kg'
  document.getElementById("outputMinWeightUser").textContent =  results.minWeightUser.weight + ' kg'
  document.getElementById("outputMaxHeightUser").textContent =  results.maxHeightUser.height + ' sm'
  document.getElementById("outputMinHeightUser").textContent =  results.minHeightUser.height + ' sm'
  document.getElementById("outputAverageWeight").textContent =  results.averageWeight + ' kg'
  document.getElementById("outputAverageHeight").textContent =  results.averageHeight + ' sm'
  document.getElementById("outputNameWeight").textContent =  results.nameWeight.lastName
  document.getElementById("outputNameHeight").textContent =  results.nameHeight.lastName
}
