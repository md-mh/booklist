const bookName      = document.querySelector("#bname");
const author        = document.querySelector("#author");
const year          = document.querySelector("#year");
const submit        = document.querySelector("#submit");
const showBooks     = document.querySelector("#showBooks");
const remove        = document.querySelector("#r").innerHTML= "Remove";
var newRow;
var delet;

submit.addEventListener('click',  function(e){
    e.preventDefault();

    if(  bookName.value  == ""  ||  author.value == ""  || year.value == "" ){
        document.getElementById('error').innerHTML = "Field Must Not Be Empty!";
    }
    else{
        newRow = document.createElement('tr');
        showBooks.appendChild(newRow);
    
        const newBookName = document.createElement('td');
        newBookName.innerHTML = bookName.value;
        newRow.appendChild(newBookName);
    
        const newAuthor = document.createElement('td');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);
    
        const newYear = document.createElement('td');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);
    
        delet = document.createElement('td');
        delet.innerHTML = remove;
        newRow.appendChild(delet);
    }


    bookName.value  = "";
    author.value    = "";
    year.value      = "";

    delet.addEventListener('click', function(){
        showBooks.removeChild(newRow);
    });

} );

