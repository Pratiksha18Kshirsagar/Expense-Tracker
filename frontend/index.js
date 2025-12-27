let expAmt = document.getElementById("expAmt");
let expDesc = document.getElementById("desc");
let expCat = document.getElementById("cat");
let expenseForm = document.getElementById("expenseForm");
let tableBody = document.getElementById("tableBody");

let editId = null;

const fetchExpenses = async () => {
  const res = await fetch('http://localhost:4000/expense');
  const expenses = await res.json();
    console.log(expenses);

  tableBody.innerHTML = '';

  expenses.forEach(exp => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${exp.expenseAmount}</td>
      <td>${exp.description}</td>
      <td>${exp.category}</td>
      <td>
        <button onclick="startEdit(${exp.id}, '${exp.expenseAmount}', '${exp.description}', '${exp.category}')">Edit</button>
        <button onclick="deleteExpense(${exp.id})">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
};

expenseForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    expenseAmount: expAmt.value,
    description: expDesc.value,
    category: expCat.value
  };

  if (editId) {
    await fetch(`http://localhost:4000/expense/edit/${editId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    editId = null;
  } else {
    await fetch('http://localhost:4000/expense/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  }

  expenseForm.reset();
  fetchExpenses();
});

function startEdit(id, amt, desc, cat) {
  editId = id;
  expAmt.value = amt;
  expDesc.value = desc;
  expCat.value = cat;
}

async function deleteExpense(id) {
  await fetch(`http://localhost:4000/expense/delete/${id}`, {
    method: 'DELETE'
  });
  fetchExpenses();
}

window.onload = fetchExpenses;