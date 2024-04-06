// Initialize an empty expenses array and a totalAmount variable set to 0
let expenses = []
let totalAmount = 0;

// Get references to various HTML elements
const categorySelect = document.getElementById('category_select')
const amountInput = document.getElementById('amount_input')
const InfoInput = document.getElementById('info')
const dateInput = document.getElementById('date_input')
const addBtn = document.getElementById('add_btn')
const expenseTableBody = document.getElementById('expense-table-body')
const totalAmountCell = document.getElementById('total-amount')

// Add a click event listener to the addBtn
addBtn.addEventListener('click',function(){

    // Get the selected category, amount, info, and date from the HTML elements
    const category=categorySelect.value;
    const info=InfoInput.value;
    const amount =Number(amountInput.value);
    const date = dateInput.value;

    // Validate the category, amount, info, and date inputs
    if(category ===''){
        alert('please select a category');
        return;
    }
    if(isNaN(amount) || amount<=0){
        alert('please enter a valid amount');
        return;
    }
    if(info ===''){
        alert('please enter a valid amount info');
        return;
    }
    if(date ===''){
        alert('please select a date');
        return;
    }

    // Add the new expense to the expenses array
    expenses.push({category,amount,info,date})

    // Update the totalAmount based on the category of the new expense
    if(category === 'Income'){
        totalAmount+=amount;
    }
    if(category === 'Expense'){
        totalAmount-=amount;
    }
     totalAmountCell.textContent = totalAmount;

     // Create a new row in the expense table and add cells for the category, amount, info, date, and a delete button
     const newRow = expenseTableBody.insertRow();

     const categoryCell = newRow.insertCell();
     const AmountCell = newRow.insertCell();
     const InfoCell = newRow.insertCell();
     const dateCell = newRow.insertCell();
     const deleteCell = newRow.insertCell();

     const deleteBtn = document.createElement('button');
     deleteBtn.textContent ='Delete';
     deleteBtn.classList.add('delete-btn');
     deleteBtn.addEventListener('click', function(){
        // When the delete button is clicked, remove the expense from the expenses array and update the totalAmount
        expenses.splice(expenses.indexOf(expense),1);
        if(category === 'Income'){
            totalAmount-=amount;
        }
        if(category === 'Expense'){
            totalAmount+=amount;
        }

        totalAmountCell.textContent=totalAmount;
        expenseTableBody.removeChild(newRow)
     })
     const expense = expenses[expenses.length-1];
     categoryCell.textContent=expense.category;
     AmountCell.textContent=expense.amount;
     InfoCell.textContent=expense.info;
     dateCell.textContent=expense.date;
     deleteCell.appendChild(deleteBtn);
});

// Loop through the existing expenses and add them to the expense table
for(const expense of expenses){
    if(category === 'Income'){
        totalAmount+=amount;
    }
    if(category === 'Expense'){
        totalAmount-=amount;
    }
     totalAmountCell.textContent = totalAmount;

     const newRow = expenseTableBody.insertRow();

     const categoryCell = newRow.insertCell();
     const AmountCell = newRow.insertCell();
     const InfoCell = newRow.insertCell();
     const dateCell = newRow.insertCell();
     const deleteCell = newRow.insertCell();

     const deleteBtn = document.createElement('button');
     deleteBtn.textContent ='Delete';
     deleteBtn.classList.add('delete-btn');
     deleteBtn.addEventListener('click', function(){
        expenses.splice(expenses.indexOf(expense),1);
        if(category === 'Income'){
            totalAmount-=amount;
        }
        if(category === 'Expense'){
            totalAmount+=amount;
        }

        totalAmountCell.textContent=totalAmount;
        expenseTableBody.removeChild(new Row)
     })
     const expense = expenses[expenses.length-1];
     categoryCell.textContent=expense.category;
     AmountCell.textContent=expense.amount;
     InfoCell.textContent=expense.info;
     dateCell.textContent=expense.date;
     deleteCell.appendChild(deleteBtn);
}