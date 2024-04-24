let data = [
{id: 1, FirstName:"Afolabi", LastName:"Bossman", class:"jss1" };
  {id: 2, FirstName:"Kunle", LastName:"Boss", class:"jss2" };
]


function readAll(){
localStorage.setItem("object", JSON.stringify((data));

var tabledata = document.querySelector(".data_table");

var object = localstorage.getItem('object');

var objectdata = JSON.parse(object);

var elements ="";


objectdata.map(record => {
  elements += `<tr>
  <td>${record.FirstName}</td>
  <td>${record.LastName}</td>
  <td>${record.class}</td>
  <td>
  <button>Edit</button>
  <button>Delete</button>
  </td>
  </tr>`

})
tabledata.innerHTML = elements;

}
