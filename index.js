const express = require('express')
const algotrader = require('algotrader');
const Data = algotrader.Data;

const AlphaVantage = algotrader.Data.AlphaVantage;
const av = new AlphaVantage(`${process.env.AV_KEY}`);

const app = express();

// Get real time intraday price information
av.timeSeriesIntraday("AAPL", "1min").then(array => {
    // Returns an array of Quote objects for every minute since market open
    array.forEach(quote => {
        console.log( quote.getOpen() );   // 174.78
        console.log( quote.getVolume() ); // 13523
    });
});
// Get relative strength index
av.rsi("AAPL", "daily", 14, "close").then(array => {
    // Returns an array of objects representing the RSI on each day
    array.forEach(rsi => {
        // { date: 2017-11-17T00:00:00.000Z, RSI: '57.3707' }
    });
});