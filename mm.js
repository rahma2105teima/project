// Define the URL of your API
const apiUrl = 'file:///C:/workspace/ht.html';

// Send a GET request to retrieve data from the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Use the retrieved data to update the table in the user interface
    const table = document.querySelector('table');
    data.forEach(person => {
      const row = table.insertRow(-1);
      row.innerHTML = `
        <td>${person.id}</td>
        <td>${person.name}</td>
        <td>${person.age}</td>
        <td>${person.email}</td>
        <td>
          <button onclick="editPerson(${person.id})">Edit</button>
          <button onclick="deletePerson(${person.id})">Delete</button>
        </td>
      `;
    });
  })
  .catch(error => console.error(error));