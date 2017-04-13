module.exports = function(req, res, next) { //vai ser um filtro para permitir que o backend seja acessado por outra app
	res.header('Access-Control-Allow-Origin', '*') //qualquer origem
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'),
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	next()

}