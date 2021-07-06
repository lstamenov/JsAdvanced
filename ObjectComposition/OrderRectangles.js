let input = [[10,5],[5,12]];

function getRectangles(input) {
    let array = [];
    for (let i = 0; i < input.length; i++) {
        let rectangle = {
            width: input[i][0],
            height: input[i][1],
            area: () => {
                return rectangle.width * rectangle.height;
            },
            compareTo: (anotherRectangle) => {
                if (rectangle.area() > anotherRectangle.area()){
                    return 1;
                }else if (rectangle.area() < anotherRectangle.area()){
                    return -1;
                }else {
                    return 0;
                }
            }
        };
        array.push(rectangle);
    }

    return array;
}

let rectangles = getRectangles(input);
console.log(rectangles);

let firstRectangle = rectangles[0];
let secondRectangle = rectangles[1];

console.log(firstRectangle.compareTo(secondRectangle));