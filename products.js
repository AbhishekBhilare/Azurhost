$(document).ready(()=>{
    $("#slideshow > div:gt(0)").hide();

    setInterval(function() { 
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    },  3000);


    // the code to add form
    $("#AddProducts").mouseover(()=>{
        $("#form").addClass("center")
        $("#form").attr("style","display:flex")
        $("#fContainer").attr("style","display:relaive")
        $("#con").attr("style","display:none")
        $("#contact").attr("style","display:none")
        $("#Abo").attr("style","display:none")
    });
    $("#connect").mouseover(()=>{
        $("#contact").attr("style","display:relative")
        $("#form").attr("style","display:none")
        $("#fContainer").attr("style","display:none")
        $("#con").attr("style","display:none")
        $("#Abo").attr("style","display:none")
    });

    $("#con1").mouseover(()=>{
        $("#contact").attr("style","display:none")
        $("#form").attr("style","display:none")
        $("#fContainer").attr("style","display:none")
        $("#con").attr("style","display:relative")
        $("#Abo").attr("style","display:none")
    });

    $("#About").mouseover(()=>{
        $("#contact").attr("style","display:none")
        $("#form").attr("style","display:none")
        $("#fContainer").attr("style","display:none")
        $("#con").attr("style","display:none")
        $("#Abo").attr("style","display:relative")
    });
    

    $("#button").click(()=>{
        var productName = $("#ProductName").val();
        var productId = $("#Productid").val();
        var stock = $("#stock").val();
        console.log(productName ,productId,stock);
        $("#fbox").append(`<div class="flex" id="product1"><button id="f1">close</button><p>Product Name:${productName}<br>Product ID:${productId}<br>Product Stock:${stock}<br></p></div>`)



        $("#ProductName").val("")
        $("#Productid").val("")
        $("#stock").val("")
    });

    $(document).on("click","#f1",function(e){
        console.log("into the event listner");
        $("#product1").remove();
    });

    $


});  
  
