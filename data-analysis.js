const url = 'https://dummyjson.com/users';
getData(url)
  .then(users => {
    const results = processData(users);
    displayResults(results);
  })

  function getData(url) {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
      return data.users;
      })
    }

function processData(users) {
  let maxWeight = 0
  let minWeight = Number.MAX_VALUE
  let maxHeight = 0
  let minHeight = Number.MAX_VALUE
  let maxWeightUser = null
  let minWeightUser = null
  let maxHeightUser = null
  let minHeightUser = null
  let totalWeight = 0
  let totalHeight = 0
  let malesHeight = []
  let malesWeight = []
  
  users.forEach(function(user) {
    if (user.weight > maxWeight) {
      maxWeight = user.weight;
      maxWeightUser = user;
    }
    if (user.weight < minWeight) {
    minWeight = user.weight;
      minWeightUser = user;
    }
  
    totalWeight += user.weight
    totalHeight += user.height

    if (user.height > maxHeight)  {
      maxHeight = user.height;
      maxHeightUser = user;
    }
    if (user.height < minHeight)  {
      minHeight = user.height;
      minHeightUser = user;
    }
    if (user.gender === "male") {
      malesHeight.push(user)
    }
    if (user.gender === "male") {
      malesWeight.push(user)
    }
   
  })

  const averageWeight = totalWeight / users.length
  const averageHeight = totalHeight / users.length

  const tallestMale = malesHeight.filter(user => user.gender === "male").reduce((prev, current) => (prev.height > current.height) ? prev : current);
  const tallestMaleWeight = malesWeight.filter(user => user.gender === "male").reduce((prev, current) => (prev.weight > current.weight) ? prev : current);
  
  return {
    maxWeight,
    minWeight,
    maxHeight,
    minHeight,
    maxWeightUser,
    minWeightUser,
    maxHeightUser,
    minHeightUser,
    averageWeight,
    averageHeight,
    tallestMale,
    tallestMaleWeight
  }
}

function displayResults(results) {
  document.getElementById("outputMaxWeight").textContent = 'Имя пользователя с максимальным весом: ' + results.maxWeightUser.firstName + ' Максимальный вес: ' + results.maxWeight
  document.getElementById("outputMinWeight").textContent = 'Имя пользователя с минимальным весом: ' + results.minWeightUser.firstName + ' Минимальный вес: ' + results.minWeight
  document.getElementById("outputMaxHeight").textContent = 'Имя пользователя с максимальным ростом: ' + results.maxHeightUser.firstName + ' Максимальный рост: ' + results.maxHeight
  document.getElementById("outputMinHeight").textContent = 'Имя пользователя с минимальным ростом: ' + results.minHeightUser.firstName + ' Минимальный рост: ' + results.minHeight
  document.getElementById("outputAverageWeight").textContent = 'Средний вес: ' + results.averageWeight;
  document.getElementById("outputAverageHeight").textContent = 'Средний рост: ' + results.averageHeight;
  document.getElementById("outputTallestMale").textContent = 'Имя самого высокого мужчины: ' + results.tallestMale.firstName
  document.getElementById("outputTallestMaleWeight").textContent = 'Имя самого тяжелого мужчины: ' + results.tallestMaleWeight.firstName
}
