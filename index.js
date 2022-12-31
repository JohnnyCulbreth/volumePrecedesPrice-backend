const express = require('express')
const algotrader = require('algotrader');
const Data = algotrader.Data;

const AlphaVantage = algotrader.Data.AlphaVantage;
const av = new AlphaVantage(`${process.env.AV_KEY}`);

const app = express();