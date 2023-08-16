let data;


//1) richiamare  api tramite async await, gestire l'errore tramite try e catch

  window.onload = async () =>{
try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
     data = await response.json();
   console.log(data);
} catch (error) {
    console.log(error);
}



  }

//2) creare una funzione che mi filtri dati di users in base name, email, usename e il campo input di search

function checkUsers(){
debugger;
     let input = document.getElementById('inputValue').value;

     //elementi del dropdown:
     let selectElement = document.querySelector('#select1').value; 

  let prompDaControllare = "";

  if(selectElement === "name"){
    prompDaControllare = "name"
  }else if(selectElement === "username"){
    prompDaControllare = "username"
  }else if(selectElement === "email"){
    prompDaControllare = "email"
  }

  let filterUsers = data.filter(utente => utente[prompDaControllare].toLowerCase().includes(input.toLowerCase()) ); // mi restituisce un array

 

  let tbody = document.getElementById('tBody');
let elemtsMapped = filterUsers.map((user, index)  => `

<tr>
<th scope="row">${index +1}</th>
<td>${user.name}</td>
<td>${user.username}</td>
<td>${user.email}</td>
</tr>

`).join("");

tbody.innerHTML = elemtsMapped
  
  


}


//let filterUsers = data.filter(utente => utente.name.toLocalLowerCase());
 // console.log(filterUsers);


