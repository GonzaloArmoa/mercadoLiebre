const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
	index: (req, res) => {
		// Do the magic
		res.render('index', {
			visited : products.filter(product => product.category === "visited"),
			sale : products.filter(product => product.category === "in-sale"),
			toThousand
		})
	},
	search: (req, res) => { 
		// Do the magic
		const keywords = req.query.keywords
		const results = products.filter(product => product.name.toLowerCase().includes(keywords.toLowerCase()))
		return res.render('results', {
			results,
			toThousand,
			keywords
		})
	}
}
