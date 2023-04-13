	fetch('https://dummyjson.com/users')
  .then(res => res.json())
  .then(users => {
		users.forEach(user => {
			console.log(user.email)
		});
	})
	