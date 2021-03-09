const {BrowserWindow} = require('electron') //esta clase sirve para crear ventanas
const path = require('path')
const {getConnection} = require('./database.js')

async function createProduct(product){
	const conn = await getConnection()
	product.price = parseFloat(product.price)
	const result = await conn.query('INSERT INTO product SET ?',product)
	console.log(result);
}

const getProducts = async () => {
  const conn = await getConnection();
  const results = await conn.query("SELECT * FROM product ORDER BY id DESC");
  return results;

};

const deleteProduct = async (id) => {
  const conn = await getConnection();
  const result = await conn.query("DELETE FROM product WHERE id = ?", id);
  return result;
};

const getProductById = async (id) => {
  const conn = await getConnection();
  const result = await conn.query("SELECT * FROM product WHERE id = ?", id);
  return result[0];
};

const updateProduct = async (id, product) => {
  const conn = await getConnection();
  const result = await conn.query("UPDATE product SET ? WHERE Id = ?", [
    product,
    id,
  ]);
  console.log(result)
};


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
	createProduct,
	getProducts,
	deleteProduct,
	getProductById,
	updateProduct
}