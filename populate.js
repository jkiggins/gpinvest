var http = require('http');

var api_key = "5G5MBKMY2EB14QDJ";
var base_url = "https://www.alphavantage.co/query";

var stocks = [
    {name: 'APPL'}
    ,{name: 'GOOGL'}
    ,{name: 'TSLA'}
];

for (var stock in stocks){
    var url = buildAlphaUrl(base_url, {
        "apikey": api_key
        ,"function": "TIME_SERIES_WEEKLY"
        ,"symbol": stock.name
    });

    console.log(url);
}

function buildAlphaUrl(options, base_url)
{
    if(!options.hasOwnProperty("apikey") || !options.hasOwnProperty("function")){
        throw "apikey and function are required";
    }

    base_url += "?";

    for(key in options)
    {
        if(options.hasOwnProperty(key)){
            base_url += key + "=" + options[key];
        }
    }

    return base_url;
}