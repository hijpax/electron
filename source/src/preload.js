const main =require('./main');
window.addEventListener('DOMContentLoaded', () => {
	const productForm = document.getElementById('productForm')
	const name = document.getElementById('name')
	const description = document.getElementById('description')
	const price = document.getElementById('price')

	productForm.addEventListener('submit', (e)=> {
		e.preventDefault()

		const newProduct= {
			name: name.value,
			price: price.value,
			description: description.value
		}

		main.createProduct(newProduct)
	})
})
