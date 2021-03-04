const {BrowserWindow} = require('electron') //esta clase sirve para crear ventanas
const path = require('path')
const {getConnection} = require('./database.js')

async function createProduct(product){
	const conn = await getConnection()
	product.price = parseFloat(product.price)
	const result = await conn.query('INSERT INTO product SET ?',product)
	console.log(result);
}
function createWindow(){
	const window = new BrowserWindow({
		width: 800,
		height:600,
		webPreferences: { //Para poder importar modulos de node dentro de la ventana
			nodeIntegration: true,
			preload: path.join(__dirname, 'preload.js')
		}
	})
	window.loadFile('src/ui/index.html')
}

module.exports = {
	createWindow,
	createProduct
}