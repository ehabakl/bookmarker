var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")
var tBody = document.querySelector("tbody")



if (localStorage.getItem("list") != null){
    BookMarkList = JSON.parse(localStorage.getItem("list"))
    display(BookMarkList)
}else{
    var BookMarkList = []
}


function submit(){
    console.log(validateSiteName ());
    console.log(validateSiteUrl ());
    
   if(validateSiteName () && validateSiteUrl ()){
       var bookMark = {
        WebsiteName : input1.value ,
        url:input2.value
    }
    BookMarkList.push(bookMark)
   
    display(BookMarkList)
    saveToLocalStorage(BookMarkList)
    
    console.log(BookMarkList)
   } else{
    alert("Not Valid ")
   }
    
 
}

function display (arr){
     var cartona = ""
    for(let i = 0 ; i < arr.length ;i++){
        console.log(arr[i])
      
           cartona += `
     <tr>
        <td>${i+1}</td>
        <td>${arr[i].WebsiteName}</td>
        <td>
          <a href="https://${arr[i].url}" target="_blank" class="btn btn-success" style="background-color:#a5b835; border-color:#a5b835;">
            <i class="fas fa-eye"></i> Visit
          </a>
        </td>
        <td>
          <button onClick="deleteItem(${i})" class="btn btn-danger">
            <i class="fas fa-trash-alt"></i> Delete
          </button>
        </td>
      </tr>
    `
    }
    console.log(cartona);
    
       tBody.innerHTML = cartona
}

function saveToLocalStorage (arr){
    localStorage.setItem("list",JSON.stringify(arr))
}

function deleteItem(index){
    console.log(BookMarkList)
BookMarkList.splice(index,1)
display(BookMarkList)
saveToLocalStorage(BookMarkList)
}

function validateSiteName (){
   let nameRegex = /^[a-zA-Z0-9\s\-]{3,50}$/;
   if (!nameRegex.test(input1.value)) {
  input1.classList.remove("is-valid")
  input1.classList.add("is-invalid")
  return false
}else{
    input1.classList.remove("is-invalid")
    input1.classList.add("is-valid")
    return true
}




}
function validateSiteUrl (){
let urlRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9\-]+\.[a-z]{2,6}(\/.*)?$/;
if (!urlRegex.test(input2.value)) {
   input2.classList.remove("is-valid")
  input2.classList.add("is-invalid")
  return false
  
}else{
    input2.classList.remove("is-invalid")
    input2.classList.add("is-valid")
    return true
}
}