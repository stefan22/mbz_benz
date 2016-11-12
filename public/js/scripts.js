(function() {

	function Animal(name,type,legs) {
		this.name = name;
		this.type = type;
		this.legs = legs;
	};

	var animal1 = new Animal();

	animal1.name = 'liene';
	animal1.type = 'dog';
	animal1.legs = 6;

	var animal3 = new Animal();

	animal1.name = 'loone';
	animal1.type = 'duck';
	animal1.legs = 555;

})();