//alert("hello")
console.log('hello')

 

function fun(){
     var Book_name=document.getElementById('book_name');
     var Book_price=document.getElementById('book_price');
     var Book_pages=document.getElementById('book_pages');
     console.log(Book_name,Book_price,Book_pages)
      var url="savebook/?bookname="+Book_name.value+"&bookpages="+Book_pages.value+"&bookprice="+Book_price.value;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          if (this.responseText=="yes") {
            alert("You have successfully added the books ")
            Book_name.value=""
            Book_pages.value=""
            Book_price.value=""
          } else {
            alert("somethig went wrong")
          }
        }
      };
      xhttp.open("GET", url, true);
      xhttp.send();
      Book_name.innerHTML="";
      Book_pages.innerHTML="";
      Book_price.innerHTML="";
      

    }

function showbooks( ) {
  //alert("hello")
  url="getAllBooks";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    data=eval(this.responseText)
    
    var div=document.getElementById('show')
    var table=document.createElement('TABLE')
    div.innerHTML=""
    var row=table.insertRow(0)
    var n=row.insertCell(0);
    var name=row.insertCell(1);
    var price=row.insertCell(2);
    var pages=row.insertCell(3);
 
    n.innerHTML="Book No. "
    name.innerHTML="Book name"
    price.innerHTML="Book price"
    pages.innerHTML="Book pages"
    
    
    for(var i=0;i<data.length;i++){
      var row=table.insertRow(i+1)

      var n=row.insertCell(0)
      var name=row.insertCell(1);
      var price=row.insertCell(2)
      var pages=row.insertCell(3)
     

      

      //alert(data[i].id + data[i].Bookname)
      n.innerHTML=i+1;
      name.innerHTML=data[i].Bookname;
      price.innerHTML=data[i].Bookprice;
      pages.innerHTML=data[i].Bookpages;
       
       
    }
       
    table.className="table text-center table-hover"
    div.appendChild(table)
    }
  };
  xhttp.open("GET",url, true);
  xhttp.send();
}
 
alert(deleteboook)
function Delete(){
  //alert("hello")

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     var div= document.getElementById("delete")
     div.innerHTML=""
      var data=eval(this.responseText)
      var table=document.createElement("table")
      var row =table.insertRow(0)
      var no= row.insertCell(0)
      var Bookname=row.insertCell(1)
      var del=row.insertCell(2) 
      
      no.innerHTML="Book No."
      Bookname.innerHTML="Book Name"
      del.innerHTML="Delete"
      div.className="table tabel-center table-hover table-Secondary"
      
     for(var i=0;i<data.length;i++)
     {
      var row =table.insertRow(i+1)
      var no= row.insertCell(0)
      var Bookname=row.insertCell(1)
      var del=row.insertCell(2) 
      
      no.innerHTML=i+1;
      Bookname.innerHTML=data[i].Bookname
      var check=document.createElement("input") 
      check.setAttribute("type","checkbox");
      check.setAttribute("value",'data[i].id')
      check.setAttribute('name','Deletebooks')
      //check.setAttribute("onclick","godeletebook();")
      check.id=data[i].id
      del.appendChild(check)
      //alert("hello")
       
     
     }

     
      div.appendChild(table)
    }
  };
  xhttp.open("GET", "getAllBooks", true);
  xhttp.send();
}

 
function deletebooks(){
  var delitem=[]
  

  var n = $( "input:checked" );  
  for(var i=0;i<n.length;i++){
     delitem.push(n[i].id)
 }
// var data={
//   'list':delitem
// }
if(delitem.length==0){
  alert("No book is selected")
}
else{
  if (confirm("Are You sure you want to delete these books ?")) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if(this.responseText=="yes"){
          alert("you have successfully delete these books --Thank You")
          window.location.reload()
        }
        else{
          alert("fuck")
        }
       }
    };
    xhttp.open("GET", "deletebook/?deletebookArray="+JSON.stringify(delitem), true);
    xhttp.send();
     
  } else {
     alert("fuck")
     window.location.reload()
  }
  
}


 
 
 


}
