//вес
let url = 'https://dummyjson.com/users';
fetch(url)
  .then(response => response.json())
  .then(data => {
		let maxWeight = 0
		let maxWeightUser = null
    data.users.forEach(function(user) {
			if(user.weight > maxWeight)  {
				maxWeight = user.weight
				maxWeightUser = user
			}
    })
		console.log('Имя пользователя с максимальным весом: ', maxWeightUser.firstName)
		console.log('Максимлаьный вес: ', maxWeight)
  })

fetch(url)
	.then(response => response.json())
	.then(data => {
		let minWeight = Number.MAX_VALUE;
		let minWeightUser = null
		data.users.forEach(function(user) {
			if (user.weight < minWeight) {
				minWeight = user.weight;
				minWeightUser = user
			}
		});
		console.log('Имя пользователя с минимальным весом: ', minWeightUser.firstName)
		console.log('Минимальный вес: ', minWeight)
	})

fetch(url)
	.then(response => response.json())
	.then(data => {
		let totalWeight = 0
		data.users.forEach(function(user) {
			totalWeight += user.weight
		})
		let averageWeight = totalWeight / data.users.length
		console.log('Средний вес', averageWeight)
	});

//рост
fetch(url)
  .then(response => response.json())
  .then(data => {
		let maxHeight = 0
		let maxHeightUser = null
    data.users.forEach(function(user) {
			if(user.height > maxHeight)  {
				maxHeight = user.height
				maxHeightUser = user
			}
    })
		console.log('Имя пользователя c максимальным ростом: ', maxHeightUser.firstName)
		console.log('Максимальный рост: ', maxHeight)
  })

fetch(url)
	.then(response => response.json())
	.then(data => {
		let minHeight = Number.MAX_VALUE;
		let minHeightUser = null
		data.users.forEach(function(user) {
			if (user.height < minHeight) {
				minHeight = user.height;
				minHeightUser = user
			}
		})
		console.log('Имя пользователя c минимальным ростом: ', minHeightUser.firstName)
		console.log('Минимальный вес: ', minHeight);
	})

	fetch(url)
	.then(response => response.json())
	.then(data => {
		let totalHeight = 0
		data.users.forEach(function(user) {
			totalHeight += user.height
		})
		let averageHeight = totalHeight / data.users.length
		console.log('Средний рост', averageHeight)
	})

	
	







