
fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
  // Converting received data to JSON
  .then((response) => response.json())
  // .then(response => console.log(JSON.stringify(response)))
  .then((json) => {

    let li = `<tr><th>No</th><th>Team</th><th>Matches</th><th>Won</th> <th>Lost</th><th>Tied</th><th>NRR</th><th>Points</th></tr>`;

    json.forEach((user) => {
      li += `<tr>
        <td>${user.No}</td>
        <td>${user.Team} </td>
        <td>${user.Matches}</td>
        <td>${user.Won}</td>
        <td>${user.Lost}</td>
        <td>${user.Tied}</td>
        <td>${user.NRR}</td>
        <td>${user.Points}</td>
      </tr>`;
    });

    // 4. DOM Display result
    document.getElementById("users").innerHTML = li;
  });

// main.js

// 5. POST request using fetch()
