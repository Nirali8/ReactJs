const records = [
  {
    name: "Pillow",
    description: "Sleeping well is important.",
    price: "8.99",
    category: "Personal",
  },
  {
    name: "Earphone",
    description: "You need this one if you love music.",
    price: "9.00",
    category: "Personal",
  },
  {
    name: "Mouse",
    description: "Very useful if you love your computer.",
    price: "11.35",
    category: "Personal",
  },
  {
    name: "Trash Can",
    description: "It will help you maintain cleanliness.",
    price: "3.95",
    category: "Sports",
  },
  {
    name: "Eye Glasses",
    description: "It will make you read better.",
    price: "6.00",
    category: "Sports",
  },
  {
    name: "Laptop",
    description: "Essential for work and study.",
    price: "999.00",
    category: "Electronics",
  },
  {
    name: "Keyboard",
    description: "Useful for typing.",
    price: "29.99",
    category: "Electronics",
  },
  {
    name: "Chair",
    description: "Comfortable seating.",
    price: "79.00",
    category: "Furniture",
  },
  {
    name: "Desk",
    description: "Perfect for workspaces.",
    price: "129.99",
    category: "Furniture",
  },
  {
    name: "Monitor",
    description: "Helps to extend display.",
    price: "199.00",
    category: "Electronics",
  },
];

let currentPage = 1;
const rowsPerPage = 5;

/*Load Records */
function loadRecords(page = 1) {
  const table = document
    .getElementById("recordTable")
    .getElementsByTagName("tbody")[0];
  table.innerHTML = ""; // Clear the table

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedRecords = records.slice(startIndex, endIndex);

  paginatedRecords.forEach((record, index) => {
    const row = table.insertRow();
    row.innerHTML = `
        <td><input type="checkbox" class="recordCheckbox"></td>
        <td>${record.name}</td>
        <td>${record.description}</td>
        <td>${record.price}</td>
        <td>${record.category}</td>
        <td>
          <button class="edit" onclick="editRecord(${
            startIndex + index
          })"><i class="fa-regular fa-pen-to-square"></i>Edit</button>
          <button class="delete" onclick="deleteRecord(${
            startIndex + index
          })"><i class="fa-solid fa-xmark"></i>Delete</button>
        </td>
      `;
  });
  document.getElementById("pageIndicator").textContent = `Page ${page}`;
}

function editRecord(index) {
  const name = prompt("Enter new name:", records[index].name);
  const description = prompt(
    "Enter new description:",
    records[index].description
  );
  const price = prompt("Enter new price:", records[index].price);
  const category = prompt("Enter new category:", records[index].category);

  if (name && description && price && category) {
    records[index] = { name, description, price, category };
    loadRecords(currentPage);
  }
}

function deleteRecord(index) {
  if (confirm("Are you sure you want to delete this record?")) {
    records.splice(index, 1);
    loadRecords(currentPage);
  }
}

function createRecord() {
  const name = prompt("Enter name:");
  const description = prompt("Enter description:");
  const price = prompt("Enter price:");
  const category = prompt("Enter category:");

  if (name && description && price && category) {
    records.push({ name, description, price, category });
    loadRecords(currentPage);
  }
}

function deleteSelected() {
  const checkboxes = document.querySelectorAll(".recordCheckbox:checked");
  if (
    checkboxes.length > 0 &&
    confirm("Are you sure you want to delete selected records?")
  ) {
    for (let i = checkboxes.length - 1; i >= 0; i--) {
      const rowIndex = checkboxes[i].closest("tr").rowIndex - 1;
      records.splice(rowIndex, 1);
    }
    loadRecords(currentPage);
  }
}

function selectAll() {
  const checkboxes = document.querySelectorAll(".recordCheckbox");
  const selectAllCheckbox = document.getElementById("selectAll");
  checkboxes.forEach(
    (checkbox) => (checkbox.checked = selectAllCheckbox.checked)
  );
}

function searchRecord() {
  const searchText = document.getElementById("search").value.toLowerCase();
  const rows = document.querySelectorAll("#recordTable tbody tr");
  rows.forEach((row) => {
    const cells = row.getElementsByTagName("td");
    const name = cells[1].textContent.toLowerCase();
    row.style.display = name.includes(searchText) ? "" : "none";
  });
}

function exportCSV() {
  let csv = "Name,Description,Price,Category\n";
  records.forEach((record) => {
    csv += `${record.name},${record.description},${record.price},${record.category}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("download", "records.csv");
  a.click();
}

function nextPage() {
  if (currentPage * rowsPerPage < records.length) {
    currentPage++;
    loadRecords(currentPage);
  }
}

function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    loadRecords(currentPage);
  }
}

  function goToPage() {
    const goToPageInput = document.getElementById("goToPageInput").value;
    const totalPages = Math.ceil(records.length / rowsPerPage);
    const pageNumber = parseInt(goToPageInput);

    if (pageNumber >= 1 && pageNumber <= totalPages) {
      currentPage = pageNumber;
      loadRecords(currentPage);
    } else {
      alert(
        `Invalid page number! Please enter a number between 1 and ${totalPages}.`
      );
    }
  }

window.onload = () => loadRecords(currentPage);
