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



function findMatching (drivers, string) {
	return drivers.filter((num) => num.toLowerCase() === string.toLowerCase())
};

function fuzzyMatch(drivers, string) {
	return drivers.filter((num) => num[0] === string[0])
};

function matchName(drivers, string) {
	return drivers.filter((num) => num['name'] === string)
};

