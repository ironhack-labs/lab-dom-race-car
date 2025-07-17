function displayUsers(users) {
    const app = document.getElementById("app");

    app.innerHTML = '';

    // Create a <ul> element
    const ul = document.createElement('ul');

    users.forEach(user => {
        const li = document.createElement('li');
        li.classList.add('user-name');
        li.innerText = user;
        ul.appendChild(li);
        console.log(ul)
    });

    app.appendChild(ul);
}

displayUsers(['Alice', 'Bob', 'Charlie', 'David', 'Eve']);