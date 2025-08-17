document.addEventListener("keydown", function (event) {
  const keyDetails = document.querySelector(".key-details");

  keyDetails.innerHTML = `
    <style>
        table, th, td {
            border: 1px solid #ccc;
        }
        td, th {
            padding: 8px;
        }
    </style>

    <table>
      <thead>
        <tr>
          <th>Key Name</th>
          <th>Key Code</th>
          <th>Code</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${event.key}</td>
          <td>${event.keyCode}</td>
          <td>${event.code}</td>
        </tr>
      </tbody>
    </table>
  `;
});
