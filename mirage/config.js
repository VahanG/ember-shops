export default function() {
  this.namespace = '/api';
let shops=[
	{
		"type": "shops",
		"id": "s1",
		"attributes": {
			"name": "s1",
			"products": [
				{
					"name": "dress",
					"qty": 6,
					"price": 1300
				}
			]
		}
	},
	{
		"type": "shops",
		"id": "s12",
		"attributes": {
			"name": "s12",
			"products": [
				{
					"name": "dress",
					"qty": 7,
					"price": 1200
				},{
					"name": "qqq",
					"qty": 7,
					"price": 1200
				}
			]
		}
	},
	{
		"type": "shops",
		"id": "s13",
		"attributes": {
			"name": "s13",
			"products": [
				{
					"name": "dress",
					"qty": 8,
					"price": 1200
				}
			]
		}
	}
];
  this.get('/shops', function() {
    return {
      data: shops
    };
  });

  this.get('/shops/:id', function (db, request) {
      return { data: shops.find((shop) => request.params.id === shop.id) };
  });

}
