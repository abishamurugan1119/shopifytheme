$('head').append('<link rel="stylesheet" href="https://cdn.shopify.com/s/files/1/0300/6735/9884/t/1/assets/mengaMenuCss.css?v=1596095285" type="text/css" />');
$('head').append('<script src="//cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>');
   
   function search_collection(){
       var input = $('#search_collection').val();
       input=input.toLowerCase(); 
       let x = $('.collection_list'); 

         
       $( ".collection_list" ).each(function( index ) {
           var str = $(this).text().toLowerCase();
           if (str.indexOf(input)  !== -1 ) {
              $( this ).removeClass('megamenu_hide_li');
           }else{
              $( this ).addClass('megamenu_hide_li');
           }
       });
          
       $('.alpha').each(function( index ) {
           var alpha = $(this);
           if(alpha.find('li:not(.megamenu_hide_li)').size() == 0 ){
               alpha.hide();
           }else{
               alpha.show();
           }
       });

      }

   
    
   $.ajax({
       url: "https://currency-switcher-app.myshopify.com//products?view=shopifymegamenu", 
       success: function(result){
           var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
       
           menu_string = '';
           var wordContainer= '';
           $.each( alpha, function( key, word){
               var upperLetter = word.toUpperCase();
               wordContainer += '<div class="alpha customCollectionList" id="alpha_'+ word +'">'+ upperLetter +'</div>';
              
               menu_string +='<div class="collectionsListItems alpha_'+ word +'">';
               $.each( [{"collectionName":"Art and handicraft","handle":"art-and-handicraft"},{"collectionName":"Bike","handle":"bike"},{"collectionName":"Books","handle":"books"},{"collectionName":"car","handle":"car"},{"collectionName":"Computer","handle":"computer"},{"collectionName":"Electronics Appliances","handle":"electronics-appliances"},{"collectionName":"Favorites","handle":"favorites"},{"collectionName":"Gift Cards","handle":"gift-cards"},{"collectionName":"kid's Fashion","handle":"kids-fashion"},{"collectionName":"Men's Fashion","handle":"mens-fashion"},{"collectionName":"Mobiles","handle":"summer-collection"},{"collectionName":"Schools & colleges","handle":"schools-colleges"},{"collectionName":"Sports","handle":"sports"},{"collectionName":"Toys","handle":"toys"},{"collectionName":"Women's Fashion","handle":"womens-fashion"},{"collectionName":"Wooden Appliances","handle":"wooden-appliances"}] , function( i, l ){
                   var str = (l.collectionName).toLowerCase();
                   var letter =  str.substr(0, 1);
                   if (word == letter) {
                    if(0){
                        menu_string += '<li class="collection_list"><a href ="//currency-switcher-app.myshopify.com/collections/'+l.handle+'" id="megaMenuCollectionLink">'+l.collectionName+'</a></li>';
                    }
                    else{
                        menu_string += '<li class="collection_list"><span id="menuCollectionItem">'+l.collectionName+'</span></li>';
                    }
                   }
                    
               });
               menu_string += '</div>';
              
           });

           $("html").find("ul.site-nav>li:nth-child("+ result +")").append('<div class="navigation_megamenu" style="display:none;"><div class="searchContainer"><input onkeyup="search_collection()" id="search_collection" type="text" name="search_collection"  placeholder="searach.."></div><div class="megaMenuGrid"><div class="word_cont">'+ wordContainer +'</div><div class="allCollections">'+ menu_string +'</div></div></div>'); 

           $('.collectionsListItems').each(function( index ) {  
               if($(this).find("li").length==0){ 
                   var className=$(this).attr("class"). split(' ');
                   $(this).remove();
                   $("#"+className[1]).remove();
               }
          });
       
           $("html").find("ul.site-nav  li:nth-child("+ result +")").css("position","unset");
           var menuitem=$("html").find("ul.site-nav>li:nth-child("+ result +")");
            var margin,width;
            var a=$(window).width();
            var position=menuitem.offset();
            var windowWidth=$(window).width()+'px';
            var width='150px'.replace(/[^0-9\.]/g, '');

            if('150px'=='100vw'){
                console.log("check");
            }
          
            if(!(0) && width>=995 && width<=a && '150px'!='100vw'){
                var containerWidth='150px'.replace(/[^0-9\.]/g, '');
                var widthCalculation=parseInt(a-containerWidth);
                margin= (widthCalculation-position.left);
                console.log("first");
            }

            if(!(0) && width<=994 && '150px'!='100vw'){
                margin=0;
                console.log("second");
            }

            if(!(0) && ('150px'=='100vw' || width>=a)){
                var containerwid=windowWidth.replace(/[^0-9\.]/g, '');
                var widthCalculation1=parseInt(a-containerwid);
                margin= (widthCalculation1-position.left);
                $(".navigation_megamenu").css("width",windowWidth);  
                console.log("third");     
            }
           
            $(".navigation_megamenu").css("margin-left",margin+"px");  

            if((0) && (width>a || '150px'=='100vw')){
                console.log("center");
                $(".navigation_megamenu").css("width",windowWidth);
            }         

           if('click'=='hover')
           {
                $("html").find("ul.site-nav>li:nth-child("+ result +")").hover(
                    function () {
                        $(".navigation_megamenu").show();
                    },
                    function () {
                        $(".navigation_megamenu").hide();
                    }
                );
           }
          
           if('click'=='click')
           {
                $(".navigation_megamenu").hide();
                $("html").find("ul.site-nav>li:nth-child("+ result +")").click(
                    function (e) {
                        e.preventDefault();
                        console.log("hello");
                        $(".navigation_megamenu").toggle();
                        return false;
                    }
                );
                            
                $(".navigation_megamenu").click(function(e){
                    e.stopPropagation();
                });

                $("body").click(function(){
                    $('.navigation_megamenu').off("click");
                    if ($(".navigation_megamenu").css('display')=="block") {
                        console.log("true");
                        $(".navigation_megamenu").hide();
                    }
                });
           }
           $(".customCollectionList").hover(function(){
                var id=$(this).attr("id");
                $(".collectionsListItems").css("display","none");
                $('.'+id).css('display','block');
            },function () {
                var id1=$(this).attr("id");
                $('.'+id1).css('display','none');
           });
       }
   });
   