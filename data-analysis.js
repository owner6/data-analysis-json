//вес
let url = 'https://dummyjson.com/users';
fetch(url)
  .then(response => response.json())
  .then(data => {
		
		let maxWeight = 0
		let minWeight = Number.MAX_VALUE;
		let maxHeight = 0
		let minHeight = Number.MAX_VALUE;
		let maxWeightUser = null
		let minWeightUser = null
		let maxHeightUser = null
		let minHeightUser = null
		let totalWeight = 0
		let totalHeight = 0
    
		data.users.forEach(function(user) {
			if(user.weight > maxWeight)  {
				maxWeight = user.weight
				maxWeightUser = user
			}
			if(user.weight < minWeight) {
				minWeight = user.weight;
				minWeightUser = user
			}
			totalWeight += user.weight
			totalHeight += user.height
			
			if(user.height > maxHeight)  {
				maxHeight = user.height
				maxHeightUser = user
			}
			if(user.height < minHeight)  {
				minHeight = user.height
				minHeightUser = user
			}
    })
		
		let averageWeight = totalWeight / data.users.length
		let averageHeight = totalHeight / data.users.length
		
		let outputDiv = document.getElementById("output")
		outputDiv.textContent = 'Имя пользователя с максимальным весом: ' + maxWeightUser.firstName + '\nМаксимальный вес: ' + maxWeight;
	
		let outputDiv1 = document.getElementById("output1")
		outputDiv1.textContent = 'Имя пользователя с минимальним весом: ' + minWeightUser.firstName + '\nМинимальный вес: ' + minWeight;
	
		let outputDiv3 = document.getElementById("output3")
		outputDiv3.textContent = 'Имя пользователя с максимальным ростом: ' + maxHeightUser.firstName + '\nМаксимальный рост: ' + maxHeight;

		let outputDiv4 = document.getElementById("output4")
		outputDiv4.textContent = 'Имя пользователя с минимальним ростом: ' + minHeightUser.firstName + '\nМинимальный рост: ' + minHeight;

		let outputDiv2 = document.getElementById("output2")
		outputDiv2.textContent =  'Средний вес: ' + averageWeight;

		let outputDiv5 = document.getElementById("output5")
		outputDiv5.textContent =  'Средний рост: ' + averageHeight;
  })
