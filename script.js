
document.addEventListener("DOMContentLoaded", () => {
    // Example usage of randomuser.me API to add a random user to a portfolio section
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            console.log(`Random user: ${user.name.first} ${user.name.last}`);
        })
        .catch(error => console.log('Error fetching random user:', error));
});
