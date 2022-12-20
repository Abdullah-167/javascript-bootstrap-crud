var selectdRow = null;


// Show Alerts

function showAlert(message, className) {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;

  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const main = document.querySelector(".main")
  container.insertBefore(div, main);

  setTimeout(() => document.querySelector(".alert").remove(), 3000)
}

//Clear All Fields

function clearFields() {
  document.querySelector("#firstName").value = "";
  document.querySelector("#lastName").value = "";
  document.querySelector("#rollNo").value = "";
}


//Add Data 

document.querySelector("#student-form").addEventListener("submit", (e) => {
  e.preventDefault();

  //Get Form Value

  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const rollNo = document.querySelector("#rollNo").value;

  //     // validate 

  if (firstName == "" || lastName == "" || rollNo == "") {
    showAlert("Please Fill All Fields", "danger");
  }
  else {
    if (selectdRow == null) {
      const list = document.querySelector("#student-list");
      const row = document.createElement("tr");

      row.innerHTML = `

                 <td>${firstName}</td>
                 <td>${lastName}</td>
                 <td>${rollNo}</td>
                 <td>
                 <a href="#" class=" btn btn-primary primary  btn-sm copy">Copy</a>
                 <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                 <a href="#" class=" btn btn-danger danger  btn-sm delete">Delete</a>
                

                 </td>
          `;
      list.appendChild(row);
      showAlert("Student Added", "success")
      selectdRow = null;
    }



    else {
      selectdRow.children[0].textContent = firstName;
      selectdRow.children[1].textContent = lastName;
      selectdRow.children[2].textContent = rollNo;
      selectdRow = null;
      showAlert("Student Info Edited", "info")
    }
    clearFields();



  }


});


//Copy Data 

document.querySelector("#student-list").addEventListener("click", (e) => {
  target = e.target;
  const list = document.querySelector("#student-list");

  if (target.classList.contains("copy")) {
    selectdRow = target.parentElement.parentElement;
    const clone = selectdRow.cloneNode(true);
    list.appendChild(clone);
    showAlert("Successfully copy created!", "success")
    selectdRow = null;
  }
})
//Edit Data 

document.querySelector("#student-list").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("edit")) {
    selectdRow = target.parentElement.parentElement;
    document.querySelector("#firstName").value = selectdRow.children[0].textContent;
    document.querySelector("#lastName").value = selectdRow.children[1].textContent;
    document.querySelector("#rollNo").value = selectdRow.children[2].textContent;
  }
})

// Delete Data

document.querySelector("#student-list").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
    showAlert("Student Data Deleted", "danger")
  }
})


