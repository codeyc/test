module.exports = {
	"dburl": "mongodb://localhost:27017/ecastDB",
	"routerUrls": [{
		"reqUrl": "/nodejs/httpTest",
		"resUrl": "./routes/httpTest"
	}, {
		"reqUrl": "/nodejs/AccessoriesValueRelationship",
		"resUrl": "./routes/AccessoriesValueRelationship"
	}]
}