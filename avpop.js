var http = require('http');

var api_key = "5G5MBKMY2EB14QDJ";
var base_url = "https://www.alphavantage.co/query";


// Eventually I want to load this list from a JSON file, and be able to add entries from a web interface
var stocks = [
    {
        symbol: 'AAPL'
    }
    ,{
        name: 'GOOGL'
    }
    ,{
        name: 'TSLA'
    }
];

for (var i in stocks){
    var url = buildAlphaUrl(base_url, {
        "apikey": api_key
        ,"function": "TIME_SERIES_WEEKLY"
        ,"symbol": stocks[i].symbol
    });

    console.log(url);
}

function buildAlphaUrl(base_url, options)
{
    if(!options.hasOwnProperty("apikey") || !options.hasOwnProperty("function")){
        throw "apikey and function are required";
    }

    base_url += "?";

    for(key in options)
    {
        if(options.hasOwnProperty(key)){
            base_url += key + "=" + options[key] + "&";
        }
    }

    base_url = base_url.substr(0, base_url.length - 1);

    return base_url;
}