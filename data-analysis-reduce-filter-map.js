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
    })
}

function findMaxWeight(users) {
  let maxWeight = users.reduce(function(sum, current) {
    if (sum.weight > current.weight) {
      return sum
    } else {
      return current
    }
  })
  return maxWeight.weight
}

function findMinWeight(users) {
  let minWeight = users.reduce(function(min, current) {
    if (min.weight < current.weight) {
      return min
    } else {
      return current
    }
  })
  return minWeight.weight
}

function findMaxHeight(users) {
  let maxHeight = users.reduce(function(max, current){
    if (max.height > current.height) {
      return max
    } else {
      return current
    }
  })
  return maxHeight.height
}

function findMinHeight(users) {
  let minHeight = users.reduce(function(min, current){
    if (min.height < current.height) {
      return min
    } else {
      return current
    }
  })
  return minHeight.height
}

function findAverageWeight(users) {
  let averageWeight = users.reduce(function(total, current){
    return total + current.weight
  }, 0)
  return averageWeight / users.length
}

function findAverageHeight(users) {
  let averageHeight = users.reduce(function(total, current){
    return total + current.height
  }, 0)
  return averageHeight / users.length
}

function filterMaleUsersWeight(users) {
  return users.filter(user => user.gender === 'male').reduce((prev, current) => (prev.weight > current.weight) ? prev : current)
}

function filterMaleUsersHeight(users) {
  return users.filter(user => user.gender === 'male').reduce((prev, current) => (prev.height > current.height) ? prev : current)
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
