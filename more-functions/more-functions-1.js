// 1. Write a function in JavaScript that converts weights to grams.  The function should take two arguments.  The first argument will be a number, the second will be an abbreviation for a unit of weight, either "lbs", "oz", "kg", "g", or "mg".  Based on the second argument, convert the number to grams and return it.

const convertToGrams = (weight, units) => {
	let grams
	switch (units){
		case 'lbs':
			grams = weight * 454
			break
		case 'oz':
			grams = weight * 454 / 16
			break
		case 'kg':
			grams = weight * 1000
			break
		case 'g':
			grams = weight
			break
		case 'mg':
			grams = weight / 1000
			break
		default:
			grams = 'please provide units of "lbs", "oz", "kg", "g", or "mg"'
	}
	return grams
}

const coffeeWeight = convertToGrams(1,'lbs')
console.log(coffeeWeight)

const smallBagOfCoffeeWeight = convertToGrams(1,'Nt')
console.log(smallBagOfCoffeeWeight)

const waterInCup = convertToGrams(12,'oz')
console.log(waterInCup)
