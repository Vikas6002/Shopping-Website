const res=document.getElementById("result");
const products=[
    {id:1,name:"Product 1",prize:10,image:"./images/product1.jpg"},
    {id:2,name:"Product 2",prize:15,image:"./images/product2.jpg"},
    {id:3,name:"Product 3",prize:20,image:"./images/product3.jpg"},
    {id:4,name:"Product 4",prize:25,image:"./images/product4.jpg"},
    {id:5,name:"Product 5",prize:30,image:"./images/product5.jpg"},
]
const cart=[]
function AddToCart(pid)
{
    products.forEach(p=>
    {
        if(p.id==pid)
        {
                cart.push(p.id)
            const prod=document.createElement("div");        
                        prod.innerHTML=`
                        <h3>${p.name}:$${p.prize.toFixed(2)}</h3>
                        <br>`
            rsection.appendChild(prod);
            
        }
    })
}
function display(){
    const psection =document.getElementById("product-section");
    products.forEach(p=>
    {
        const prod=document.createElement("div");
        prod.classList.add("product-card");
        prod.innerHTML=`
        <img src="${p.image}" alt="p.name">
        <h3>${p.name}</h3>
        <p>$${p.prize.toFixed(2)}</p>
        <button class="ATC" onclick="AddToCart(${p.id})">Add To Cart</button>
        `
        psection.appendChild(prod);
    }
    );
}
display()

function CheckOut(){
    let amt=0;
    cart.forEach(cp=>
    {
        products.forEach(p=>
            {
                 if(p.id==cp){
                     amt+=p.prize;
                    const prod=document.createElement("div");        
                    prod.innerHTML=`
                    <h3>${p.name}:$${p.prize.toFixed(2)}</h3>
                    <br>`
        rsection.appendChild(prod);
                 }
            }
    )
    }
    );
    const res=document.getElementById("amt");
    console.log(cart)
    console.log(amt)
    res.textContent=`The Total Amout is $${amt}.`;
    
}
function ClearCart(){
    cart=[];
}
const user = document.getElementById("user");
const pass = document.getElementById("pass");

function Register() {
    const user = document.getElementById("user");
    const pass = document.getElementById("pass");
    
    if (!user || !pass) {
        console.error("Could not find input elements");
        return;
    }
    
    const username = user.value.trim();
    const password = pass.value.trim();
    
    console.log("Username:", username);
    console.log("Password:", password);
    
    if (username === "" || password === "") {
        alert("Please fill in both username and password!");
        return;
    }
    
    if (password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return;
    }
    
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '{}');
    
    if (existingUsers[username]) {
        alert("Username already exists! Please choose a different username.");
        return;
    }
    
    existingUsers[username] = {
        password: password,
        registeredDate: new Date().toISOString()
    };
    
    localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));
    
    console.log("Registration data saved:");
    console.log({
        username: username,
        password: password
    });
    
    alert("Registration successful! You can now login.");
    
    // Clear the form
    user.value = "";
    pass.value = "";
    
    // Optional: Redirect to login page
    // window.location.href = './Login.html';
}

function Login() {
    // Get the elements and their values directly inside the function
    const user = document.getElementById("user");
    const pass = document.getElementById("pass");
    
    // Check if elements exist
    if (!user || !pass) {
        console.error("Could not find input elements");
        return;
    }
    
    const username = user.value.trim();
    const password = pass.value.trim();
    
    console.log("Login attempt:");
    console.log("Username:", username);
    console.log("Password:", password);
    
    // Validation
    if (username === "" || password === "") {
        alert("Please fill in both username and password!");
        return;
    }
    
    // Get registered users from localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '{}');
    
    // Check if user exists
    if (!registeredUsers[username]) {
        alert("User not found! Please register first.");
        console.log("Available users:", Object.keys(registeredUsers));
        return;
    }
    
    // Check if password matches
    if (registeredUsers[username].password !== password) {
        alert("Incorrect password! Please try again.");
        return;
    }
    
    // Successful login
    console.log("Login successful for user:", username);
    alert("Login successful! Welcome back, " + username + "!");
    
    // Save current logged-in user
    localStorage.setItem('currentUser', username);
    
    // Clear the form
    user.value = "";
    pass.value = "";
    
    // Optional: Redirect to main shopping page
    // window.location.href = './index.html';
}

// Utility function to check all registered users (for debugging)
function showAllUsers() {
    const users = JSON.parse(localStorage.getItem('registeredUsers') || '{}');
    console.log("All registered users:", users);
    return users;
}

// Utility function to clear all users (for testing)
function clearAllUsers() {
    localStorage.removeItem('registeredUsers');
    localStorage.removeItem('currentUser');
    console.log("All users cleared");
    alert("All user data cleared!");
}

// Function to check if user is currently logged in
function getCurrentUser() {
    return localStorage.getItem('currentUser');
}

// Function to logout
function logout() {
    localStorage.removeItem('currentUser');
    alert("Logged out successfully!");
    console.log("User logged out");
}
