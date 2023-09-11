// Golf Code
// In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.
//
//     Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):
//
// Strokes	Return
// 1	"Hole-in-one!"
// <= par - 2	"Eagle"
// par - 1	"Birdie"
// par	"Par"
// par + 1	"Bogey"
// par + 2	"Double Bogey"
// >= par + 3	"Go Home!"
// par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.
//
//     Tests
// Waiting:golfScore(4, 1) should return the string Hole-in-one!
//     Waiting:golfScore(4, 2) should return the string Eagle
// Waiting:golfScore(5, 2) should return the string Eagle
// Waiting:golfScore(4, 3) should return the string Birdie
// Waiting:golfScore(4, 4) should return the string Par
// Waiting:golfScore(1, 1) should return the string Hole-in-one!
//     Waiting:golfScore(5, 5) should return the string Par
// Waiting:golfScore(4, 5) should return the string Bogey
// Waiting:golfScore(4, 6) should return the string Double Bogey
// Waiting:golfScore(4, 7) should return the string Go Home!
//     Waiting:golfScore(5, 9) should return the string Go Home!

//SOLUTION

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes === 1) {
        return "Hole-in-one!";
    } else if (strokes <= par - 2) {
        return "Eagle";
    } else if (strokes === par - 1) {
        return "Birdie";
    } else if (strokes === par) {
        return "Par";
    } else if (strokes === par + 1) {
        return "Bogey";
    } else if (strokes === par + 2) {
        return "Double Bogey";
    } else {
        return "Go Home!";
    }
}