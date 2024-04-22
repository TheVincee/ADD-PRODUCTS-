$.ajax({
    url: "categories.php",
    dataType: "json"
}).done(function(data) {
    let result = data;
    console.log(result);

    var template = document.querySelector("#categoryRowTemplate");
    var parent = document.querySelector("#tablebody");

    result.forEach(item => {
      
        let clone = template.content.cloneNode(true);
        clone.querySelector("td.tdid").textContent = item.Category_ID;
        clone.querySelector("td.tdname").textContent = item.Name;
        clone.querySelector("td.tddate").textContent = item.Date;

        parent.appendChild(clone);
    });
}).fail(function(jqXHR, textStatus, errorThrown) {
    console.error("AJAX Error: " + textStatus, errorThrown);
});

loadData();

$("#btnSaveCategory").click(function(){
var categoryName = document.querySelector("#categoryName").value;
if(categoryName.length > 0){
    $.ajax({
        url:  "categories.create.php",
        type: "GET",
        data: {
            name: categoryName
        }
    }).done(function(data){
        let result = JSON.parse(data);
        if(result.res == "success"){
           
            loadData();
             //to hide modal
             $("#exampleModal").modal("toggle"); 
             //clear form
             document.querySelector("form").reset();
        }
    })
}
});