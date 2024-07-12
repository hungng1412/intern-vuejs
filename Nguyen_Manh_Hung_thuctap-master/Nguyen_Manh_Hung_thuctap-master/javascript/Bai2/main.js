let array = Array.from({length:300}, (v,i)=>({
    name:`Name ${i}`,
    age: Math.floor(Math.random()*100),
}))

function displayTable(data) {
    const tableContainer = document.getElementById("table-container");
  const table = document.createElement("table");

  // Tạo tiêu đề bảng
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headers = ["Name", "Age"];

  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Tạo các hàng dữ liệu
  const tbody = document.createElement("tbody");

  data.forEach((item) => {
    const row = document.createElement("tr");

    Object.values(item).forEach((text) => {
      const cell = document.createElement("td");
      cell.textContent = text;
      row.appendChild(cell);
    });

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  tableContainer.appendChild(table);
}
function sortByAge(data) {
    let arr = [...data]
    arr = arr.sort((a,b)=>{
        if (a.age < b.age) return -1;
        if (a.age > b.age) return 1;
        return 0;
    })
    displayTable(arr)
}
sortByAge(array);
// displayTable(array);

// console.table(array);