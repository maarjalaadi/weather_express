const express = require('express')
const app = express()
const path = require('path')
const fetch = require ('node-fetch')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const key = 'fb3d255f31635c74fcb59fc27da14134';
let city = '588335';

app.get('/', function(req,res) {
	fetch(`https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${key}`)
	.then((responce) => {
		return responce.json()
	})
	.then((data) => {
		let description = data.weather[0].description
		let city = data.name
		let temp = Math.round(parseFloat(data.main.temp)-273.15)
	res.render('index', {
		description: description,
		city: city,
		temp: temp
		})  
	}) 
	 
})

app.listen(3000)