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
	let maxWeight = 0;
	let minWeight = Number.MAX_VALUE;
	let maxHeight = 0;
	let minHeight = Number.MAX_VALUE;
	let maxWeightUser = null;
	let minWeightUser = null;
	let maxHeightUser = null;
	let minHeightUser = null;
	let totalWeight = 0;
	let totalHeight = 0;
	
	users.forEach(function(user) {
		if (user.weight > maxWeight) {
			maxWeight = user.weight;
			maxWeightUser = user;
		}
		if (user.weight < minWeight) {
		minWeight = user.weight;
			minWeightUser = user;
		}
	
		totalWeight += user.weight;
		totalHeight += user.height;

		if (user.height > maxHeight)  {
			maxHeight = user.height;
			maxHeightUser = user;
		}
		if (user.height < minHeight)  {
			minHeight = user.height;
			minHeightUser = user;
		}
	})

	const averageWeight = totalWeight / users.length;
	const averageHeight = totalHeight / users.length;

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
		averageHeight
	}
}

function displayResults(results) {
	document.getElementById("output").textContent = 'Имя пользователя с максимальным весом: ' + results.maxWeightUser.firstName + ' Максимальный вес: ' + results.maxWeight;
	document.getElementById("output1").textContent = 'Имя пользователя с минимальным весом: ' + results.minWeightUser.firstName + ' Минимальный вес: ' + results.minWeight;
	document.getElementById("output3").textContent = 'Имя пользователя с максимальным ростом: ' + results.maxHeightUser.firstName + ' Максимальный рост: ' + results.maxHeight;
	document.getElementById("output4").textContent = 'Имя пользователя с минимальным ростом: ' + results.minHeightUser.firstName + ' Минимальный рост: ' + results.minHeight;
	document.getElementById("output2").textContent = 'Средний вес: ' + results.averageWeight;
	document.getElementById("output5").textContent = 'Средний рост: ' + results.averageHeight;
}
