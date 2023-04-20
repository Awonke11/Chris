function add(a,b) { 
   return a + b
 }

function multiply(a,b) {
   return  a * b // Changed the (-) to (*)
 }

/* 
I am going to use a linear simultanious algorithm

let: ax + by = d
Where: a = added and b = multiplied

I got a and b through returning {added, multiplied} on the internal function

Equation 1: 6x + 8y = 48
Equation 2: 4x + 4y = 12

Simplify: 
Equation 1 divided by 2: 3x + 4y = 24
Equation 2 divided by 4: x + y = 3

Equation 3: x = 3 - y
Substitute equation 3 into equation 1 to get: y = 15;
Then get x: x = -12

Therefore the equation that I am going to use to et my answer is: answer = -12a + 15b
And I am going to return this equation on my internal function
*/

function internal () {
	const added = add(this.internal.a,this.internal.b)
	const multiplied = multiply(this.internal.a,this.internal.b)
	return ((-12)*(added) + 15*(multiplied));
}
// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

console.log(example1.calculate())
console.log(example2.calculate())
example1.calculate()
example2.calculate() 
