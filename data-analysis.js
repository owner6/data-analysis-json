const url = 'https://dummyjson.com/users';

function getData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((users) => processData(users))
    .then(displayResults)
}

function processData(users) {
  const maxWeightUser = findMaxWeightUser(users)
  const minWeightUser = findMinWeightUser(users)
  const maxHeightUser = findMaxHeightUser(users)
  const minHeightUser = findMinHeightUser(users)
  const averageWeight = calculateAverageWeight(users)
  const averageHeight = calculateAverageHeight(users)

  return {
    maxWeightUser,
    minWeightUser,
    maxHeightUser,
    minHeightUser,
    averageWeight,
    averageHeight
  }
}

function findMaxWeightUser(users) {
  return users.reduce((prev, current) => {
    return (Number(prev.weight) < Number(current.weight)) ? prev : current
  })
} 

function findMinWeightUser(users) {
  return users.reduce((prev, current) => {
    return (Number(prev.weight) > Number(current.weight)) ? prev : current
  })
}

function findMaxHeightUser(users) {
  return users.reduce((prev, current) => {
    return (Number(prev.height) < Number(current.height)) ? prev : current
  })
}

function findMinHeightUser(users) {
  return users.reduce((prev, current) => {
    return (Number(prev.height) > Number(current.height)) ? prev : current 
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

function displayResults(results) {
  document.getElementById("outputMaxWeightUser").textContent = 'Максимальный вес: ' + results.maxWeightUser;
  document.getElementById("outputMinWeightUser").textContent = 'Минимальный вес: ' + results.minWeightUser;
  document.getElementById("outputMaxHeightUser").textContent = 'Максимальный рост: ' + results.maxHeightUser;
  document.getElementById("outputMinHeightUser").textContent = 'Минимальный рост: ' + results.minHeightUser;
  document.getElementById("outputAverageWeight").textContent = 'Средний вес: ' + results.averageWeight;
  document.getElementById("outputAverageHeight").textContent = 'Средний рост: ' + results.averageHeight;
}
