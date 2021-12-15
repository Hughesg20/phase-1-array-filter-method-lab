// const drivers = [
// 	{
// 		name: 'Bobby',
// 		hometown: 'Pittsburgh'
// 	},
// 	{
// 		name: 'Sammy',
// 		hometown: 'New York'
// 	},
// 	{
// 		name: 'Sally',
// 		hometown: 'Cleveland'
// 	},
// 	{
// 		name: 'Annette',
// 		hometown: 'Los Angeles'
// 	},
// 	{
// 		name: 'Bobby',
// 		hometown: 'Tampa Bay'
// 	}
// ];

// expect(matchName(drivers, 'Bobby')).to.eql([
// 	{
// 		name: 'Bobby',
// 		hometown: 'Pittsburgh'
// 	},
// 	{
// 		name: 'Bobby',
// 		hometown: 'Tampa Bay'
// 	}
// ]);



function findMatching (drivers, nameToMatchTo) {
	return drivers.filter((num) => num.toLowerCase() === nameToMatchTo.toLowerCase())
};

function fuzzyMatch(drivers, string) {
	return drivers.filter((num) => num[0] === string[0])
};

function matchName(drivers, string) {
	return drivers.filter((num) => num['name'] === string)
};

function findMatching(driversArray,nameToMatchTo) {
    //returning a function that cycles through the items in the array while checking if they are equal to "nameToMatchTo" and if they do it returns that item
}