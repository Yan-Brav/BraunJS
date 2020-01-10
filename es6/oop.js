const Car = (function () {

	const carProps = new WeakMap();

	class Car{
		constructor(make, model, vin) {
		this.make = make;
		this.model = model;
		this._userGears = ['P', 'N', 'R', 'D'];
		this.vin = vin;
		carProps.set(this, { userGear: this._userGears[0] });
		}

		get userGear(){ return carProps.get(this).userGear; }
		set userGear(value){
		if(this._userGears.indexOf(value) < 0){
			throw new Error(`It is error gear: ${value}`);
		}
		carProps.get(this).userGear = value;
	}
		toString(){
			return `${this.make} ${this.model}: ${this.vin}`;
		}
		shift(gear){this.userGear = gear;}
	}

	return Car;
}) ();

class InsurancePolicy () {}
	function makeInsurable(o){
		o.addInsurancePolicy = function(p) { this.insurancePolicy = p; }
		o.getInsurancePolicy = function() { return this.insurancePolicy; }
		o.isInsured = function() { return !!this.insurancePolicy; }
	}

	const car1 = new Car();
	makeInsurable(car1);
	car1.addInsurancePolicy(new InsurancePolicy());

	// const car1 = new Car("ZAZ", "Forza", 1);
	// const car2 = new Car("Mazda", "3i", 2);
	// console.log(car1.shift === Car.prototype.shift);
	// car1.shift('D');
	// console.log(car1.userGear);
	// console.log(car1.shift === car2.shift);
	// car1.shift = function(gear) { this.userGear = gear.toUpperCase();}
	// console.log(car1.shift === Car.prototype.shift);
	// console.log(car1.shift === car2.shift);
	// car1.shift('d');
	// console.log(car1.userGear);
	// console.log(car1.toString());
	// console.log(car2.toString());
	// console.log( "---------------------------" );















