

var navLinks=document.getElementById("navLinks");
    function showMenu(){
        navLinks.style.right="0";
    }
    function hideMenu(){
        navLinks.style.right="-200px";
    }
    const customers = [
        {
            firstName: "John",
            middleName: "Doe",
            lastName: "Smith",
            city: "St.Catharines",
            province: "Ontario",
            phoneNumber: "555-123-4567",
            email: "john@gmail.com",
            equipmentOwn: ["Lawn Mower 1", "Lawn Mower 2"],
        },
        {
            firstName: "Mark",
            middleName: "A.",
            lastName: "Alexander",
            city: "Welland",
            province: "Ontario",
            phoneNumber: "534-453-8484",
            email: "mark@gmail.com",
            equipmentOwn: ["Lawn Mower 3"],
        },
        {
            firstName: "Emily",
            middleName: "M.",
            lastName: "Anderson",
            city: "Toronto",
            province: "Ontario",
            phoneNumber: "416-789-1234",
            email: "emily@gmail.com",
            equipmentOwn: ["Lawn Mower 4"],
        },
        {
            firstName: "James",
            middleName: "B.",
            lastName: "Johnson",
            city: "Vancouver",
            province: "British Columbia",
            phoneNumber: "604-555-7890",
            email: "james@gmail.com",
            equipmentOwn: ["Lawn Mower 5", "Lawn Mower 6"],
        },
        {
            firstName: "Anna",
            middleName: "E.",
            lastName: "Davis",
            city: "Calgary",
            province: "Alberta",
            phoneNumber: "403-987-6543",
            email: "anna@gmail.com",
            equipmentOwn: ["Lawn Mower 7"],
        },
        {
            firstName: "Michael",
            middleName: "F.",
            lastName: "White",
            city: "Ottawa",
            province: "Ontario",
            phoneNumber: "613-321-5678",
            email: "michael@gmail.com",
            equipmentOwn: ["Lawn Mower 8"],
        },
    ];
    

    function searchCustomers() {
        const searchTerm = document.getElementById("customerSearch").value.toLowerCase();
        const searchResults = customers.filter((customer, index) => {
            const fullName = `${customer.name} ${customer.middleName} ${customer.lastName}`.toLowerCase();
            return fullName.includes(searchTerm);
        });

        displaySearchResults(searchResults);
    }

    function displaySearchResults(results) {
        const searchResultsContainer = document.getElementById("searchResults");
        searchResultsContainer.innerHTML = "";

        if (results.length === 0) {
            searchResultsContainer.innerHTML = "No results found.";
            return;
        }

        results.forEach((customer, index) => {
            const customerDiv = document.createElement("div");
            customerDiv.className = "customer-result";
            customerDiv.textContent = `${customer.name} ${customer.middleName} ${customer.lastName}`;
            customerDiv.addEventListener("click", () => {
                showCustomerDetails(index);
            });
            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.onclick = () => editCustomerDetails(index);
            const viewButton = document.createElement("button");
            viewButton.textContent = "View";
            viewButton.onclick = () => viewCustomerDetails(index);
            const newButton = document.createElement("button");
            newButton.textContent = "New";
            newButton.onclick = () => newCustomerDetails(index);

            customerDiv.appendChild(newButton);
            customerDiv.appendChild(editButton);
            customerDiv.appendChild(viewButton);

            searchResultsContainer.appendChild(customerDiv);
        });
    }

    function showCustomerDetails(index) {
        if (index >= 0 && index < customers.length) {
            const customer = customers[index];
            // Replace these lines with the actual HTML elements where you want to display the customer details.
            document.getElementById("customerName").textContent = customer.name;
            document.getElementById("customerMiddleName").textContent = customer.middleName;
            document.getElementById("customerLastName").textContent = customer.lastName;
            document.getElementById("customerCity").textContent = customer.city;
            document.getElementById("customerProvince").textContent = customer.province;
            document.getElementById("customerPhoneNumber").textContent = customer.phoneNumber;
            document.getElementById("customerEmail").textContent = customer.email;

            // Set the selected customer index in the hidden input field
            document.getElementById("selectedCustomerIndex").value = index;
        }
    }

    function editCustomerDetails(index) {
        if (index >= 0 && index < customers.length) {
            // Get the selected customer index from the hidden input field
            const selectedCustomerIndex = document.getElementById("selectedCustomerIndex").value;

            if (selectedCustomerIndex !== null && selectedCustomerIndex !== "") {
                // Pass the customer data as query parameters to the editCustomer.html page
                const selectedCustomer = customers[selectedCustomerIndex];
                const queryString = `?customerIndex=${selectedCustomerIndex}&name=${selectedCustomer.name}&middleName=${selectedCustomer.middleName}&lastName=${selectedCustomer.lastName}&city=${selectedCustomer.city}&province=${selectedCustomer.province}&phoneNumber=${selectedCustomer.phoneNumber}&email=${selectedCustomer.email}`;
                window.location.href = 'editCustomer.html' + queryString;
            } else {
                alert("Please select a customer to edit.");
            }
        }
    }

    function viewCustomerDetails(index) {
        if (index >= 0 && index < customers.length) {
            // Get the selected customer index from the hidden input field
            const selectedCustomerIndex = document.getElementById("selectedCustomerIndex").value;

            if (selectedCustomerIndex !== null && selectedCustomerIndex !== "") {
                // Use the selected customer index to navigate to the viewCustomer.html page
                window.location.href = 'viewCustomer.html?customerIndex=' + selectedCustomerIndex;
            } else {
                alert("Please select a customer to view.");
            }
        }
    }

    function newCustomerDetails(index) {
        if (index >= 0 && index < customers.length) {
            // Use the selected index to navigate to the newCustomer.html page
            window.location.href = 'customer.html';
        }
    }

    function showCustomerDetails(customer) {
        document.getElementById("customerName").textContent = customer.name;
        document.getElementById("customerMiddleName").textContent = customer.middleName;
        document.getElementById("customerLastName").textContent = customer.lastName;
        document.getElementById("customerCity").textContent = customer.city;
        document.getElementById("customerProvince").textContent = customer.province;
        document.getElementById("customerPhoneNumber").textContent = customer.phoneNumber;
        document.getElementById("customerEmail").textContent = customer.email;
    }
    // Create buttons for each customer
    for (let i = 0; i < customers.length; i++) {
        const customer = customers[i];
        const button = document.createElement("button");
        button.textContent = `${customer.name} ${customer.middleName} ${customer.lastName}`;
        button.addEventListener("click", () => {
            showCustomerDetails(customer);
            customerDetails.style.display = "block";
        });
        customerList.appendChild(button);
    }
    //action after clicking the New Customer Button
    const newCustomerButton = document.getElementById("newCustomerButton");
            newCustomerButton.addEventListener("click", function() {
                // Use window.location to navigate to the customer page
                window.location.href = "customer.html";
            });


           