const main =require('./main');
window.addEventListener('DOMContentLoaded', () => {
	const productForm = document.getElementById('productForm')
	const name = document.getElementById('name')
	const description = document.getElementById('description')
	const price = document.getElementById('price')
	let productsList = document.getElementById('products')
	let products = []

	//Guardar producto al hacer submit
	productForm.addEventListener('submit', (e)=> {
		e.preventDefault()

		const newProduct= {
			name: name.value,
			price: price.value,
			description: description.value
		}

		main.createProduct(newProduct)
		getProducts()
		productForm.reset()
	})

	//renderizar lista de productos
	function renderProductos(products){
		productsList.innerHTML = ''
		products.forEach(product => {
			productsList.innerHTML += `<div class="card card-body my-2 animated bounceIn">
										<h4>${product.name}</h4>
										<p>${product.description}</p>
										<h3>${product.price}</h3>
										<p>
											<button class="btn btn-danger delete" onclick="deleteProduct(${product.id})">Delete</button>
											<button class="btn btn-warning">Edit</button>
										</p>
									</div>`
		})
	}

	const getProducts = async() => {
		products = await main.getProducts()
		renderProductos(products)
	}

	function deleteProduct(id){
		const result = main.deleteProduct(id)
		console.log(result)
		getProducts()
	}

	function init(){
		getProducts()
	}

	init()
})
