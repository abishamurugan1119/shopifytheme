jQuery(document).ready(function ($) {
    $('head').prepend('<link href="https://cdn.shopify.com/s/files/1/0300/6735/9884/t/1/assets/currencySwitcherApp.css?v=1586841616" rel="stylesheet" type="text/css">');
    $('head').prepend('<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script>');
    $('head').prepend('<link href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/css/flag-icon.css" rel="stylesheet">');
    $('head').prepend('<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.12/css/select2.min.css" rel="stylesheet" type="text/css">');
    $('head').prepend('<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.12/js/select2.full.min.js"></script>');
   

    $.ajax({url: "https://currency-switcher-app.myshopify.com//products?view=currencyConverter", success: function(result){
            $('body').append(result);
        }
    });
   
}); 