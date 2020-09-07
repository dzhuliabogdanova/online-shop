$(document).ready(documentReady);

function documentReady(){
    $('.menuItem').click(btnClicked);
     $( '.breakfast' ).click( breakfastBtnClicked );
     $( '.lunch' ).click( lunchBtnClicked );
     $( '.dinner' ).click( dinnerBtnClicked );
     $( '.dessert' ).click( dessertBtnClicked );

   
}

function btnClicked(){
 
 var navHeader = document.getElementById("navContainer");
 var btns = navHeader.getElementsByClassName("menuItem");
 
 for (var i=0; i<btns.length; i++){
     btns[i].addEventListener("click", function(){
         var current = document.getElementsByClassName("active");
         current[0].className = current[0].className.replace("active", "");
         this.className += " active";
     });
    }
}

function dislayItems(){
  
    
    for(var i=0; i<breakfastItems.length; i++){

        var items = $(`<section class="items">
        
    <figure>
     <div id="itemsOutOfStock${i}" class="soldOut">
     <i class="soldOutText">Sold out</i>
     </div>
        <img src="imgs/`+ breakfastItems[i].image +`.jpg" alt="" class="rounded"/>
       <figcaption>
       <p class=name>`+ breakfastItems[i].ProductName +`</p>
            <i class="material-icons">credit_card</i><p>`+ breakfastItems[i].UnitPrice +`</p>
            <i class="material-icons">add_shopping_cart</i><p>`+ ' Portions left: ' + breakfastItems[i].UnitsInStock +`</p>
            <i class="material-icons"> departure_board </i><p>`+ ' Delivery in ' + breakfastItems[i].DeliveryOn + ' mins ' +`</p>
        </figcaption>
       
    </figure>
    
</section>`);


           $('main').append(items);
            console.log(breakfastItems[i]["UnitsInStock"]);

           if( parseInt(breakfastItems[i]["UnitsInStock"]) == 0) {
            $('#itemsOutOfStock' + i).removeClass('soldOut');
          }
        }
}


function dislayLunchItems(){
    for(var i=0; i<lunchItems.length; i++){

        var itemsLunch = $(`<section class="itemsLunch">
    <figure>
    <div id="itemsOutOfStock${i}" class="soldOut">
     <i class="soldOutText">Sold out</i>
     </div>
        <img src="imgs/`+ lunchItems[i].image +`.jpg" alt="" class="rounded"/>
       <figcaption>
       <p class=name>`+ lunchItems[i].ProductName +`</p>
            <i class="material-icons">credit_card</i><p>`+ lunchItems[i].UnitPrice +`</p>
            <i class="material-icons">add_shopping_cart</i><p>`+ ' Portions left: ' + lunchItems[i].UnitsInStock +`</p>
            <i class="material-icons"> departure_board </i><p>`+ ' Delivery in ' + lunchItems[i].DeliveryOn + ' mins ' +`</p>
        </figcaption>
    </figure>
</section>`);
           $('main').append(itemsLunch);

           if( parseInt(lunchItems[i]["UnitsInStock"]) == 0) {
            $('#itemsOutOfStock' + i).removeClass('soldOut');
          }
    }
}

function dislayDinnerItems(){
    for(var i=0; i<dinnerItems.length; i++){

        var itemsDinner = $(`<section class="itemsDinner">
    <figure>
    <div id="itemsOutOfStock${i}" class="soldOut">
     <i class="soldOutText">Sold out</i>
     </div>
        <img src="imgs/`+ dinnerItems[i].image +`.jpg" alt="" class="rounded"/>
       <figcaption>
       <p class=name>`+ dinnerItems[i].ProductName +`</p>
            <i class="material-icons">credit_card</i><p>`+ dinnerItems[i].UnitPrice +`</p>
            <i class="material-icons">add_shopping_cart</i><p>`+ ' Portions left: ' + dinnerItems[i].UnitsInStock +`</p>  
            <i class="material-icons"> departure_board </i><p>`+ ' Delivery in ' + dinnerItems[i].DeliveryOn + ' mins ' +`</p>
        </figcaption>
    </figure>
</section>`);

           $('main').append(itemsDinner);

           if( parseInt(dinnerItems[i]["UnitsInStock"]) == 0) {
            $('#itemsOutOfStock' + i).removeClass('soldOut');
          }
         
    }
}

function dislayDessertItems(){

    for(var i=0; i<dessertItems.length; i++){
  
        var itemsDessert = $(`<section class="itemsDessert">
    <figure>
    <div id="itemsOutOfStock${i}" class="soldOut">
     <i class="soldOutText">Sold out</i>
     </div>
        <img src="imgs/`+ dessertItems[i].image +`.jpg" alt="" class="rounded"/>
       <figcaption>
       <p class=name>`+ dessertItems[i].ProductName +`</p>
            <i class="material-icons">credit_card</i><p>`+ dessertItems[i].UnitPrice +`</p>
            <i class="material-icons">add_shopping_cart</i><p>`+ ' Portions left: ' + dessertItems[i].UnitsInStock +`</p>
            <i class="material-icons"> departure_board </i><p>`+ ' Delivery in ' + dessertItems[i].DeliveryOn + ' mins ' +`</p>
        </figcaption>
    </figure>
</section>`);

           $('main').append(itemsDessert);

           if( parseInt(dessertItems[i]["UnitsInStock"]) == 0) {
            $('#itemsOutOfStock' + i).removeClass('soldOut');
          }
    }
}

function breakfastBtnClicked(){

    $('main').html(' ');
    $('.itemContainer').append('<h1>Choose your favourite meal</h1>');

    dislayItems();
   
    $('.itemsLunch').remove();
    $('.itemsDinner').remove();
    $('.itemsDessert').remove();
    $('h2').remove();
    
}


function lunchBtnClicked(){
    $('main').html(' ');
    $('.itemContainer').append('<h1>Choose your favourite meal</h1>');
    $('.items').remove();
    $('.itemsDinner').remove();
    $('.itemsDessert').remove();
    $('h2').remove();

    dislayLunchItems();
}

function dinnerBtnClicked(){
    $('main').html(' ');
    $('.itemContainer').append('<h1>Choose your favourite meal</h1>');
    $('.items').remove();
    $('.itemsLunch').remove();
    $('.itemsDessert').remove();
    $('h2').remove();

    dislayDinnerItems();
}


function dessertBtnClicked(){
    $('main').html(' ');
    $('.itemContainer').append('<h1>Choose your favourite meal</h1>');
    $('.items').remove();
    $('.itemsLunch').remove();
    $('.itemsDinner').remove();
    $('h2').remove();

    dislayDessertItems();

}
