//вес
let url = 'https://dummyjson.com/users';
fetch(url)
  .then(response => response.json())
  .then(data => {
		let maxWeight = 0
    data.users.forEach(function(user) {
			if(user.weight > maxWeight)  {
				maxWeight = user.weight
			}
    })
		console.log('Максимлаьный вес: ', maxWeight)
  })

fetch(url)
	.then(response => response.json())
	.then(data => {
		let minWeight = Number.MAX_VALUE;
		data.users.forEach(function(user) {
			if (user.weight < minWeight) {
				minWeight = user.weight;
			}
		});
		console.log('Минимальный вес: ', minWeight);
	});

fetch(url)
	.then(response => response.json())
	.then(data => {
		let totalWeight = 0
		data.users.forEach(function(user) {
			totalWeight += user.weight
		})
		let averageWeight = totalWeight / data.users.length
		console.log(averageWeight)
	});

//рост
fetch(url)
  .then(response => response.json())
  .then(data => {
		let maxHeight = 0
    data.users.forEach(function(user) {
			if(user.height > maxHeight)  {
				maxHeight = user.height
			}
    })
		console.log('Максимальный рост: ', maxHeight)
  })

fetch(url)
	.then(response => response.json())
	.then(data => {
		let minHeight = Number.MAX_VALUE;
		data.users.forEach(function(user) {
			if (user.height < minHeight) {
				minHeight = user.height;
			}
		})
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
	






