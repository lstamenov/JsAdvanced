class Point {
    #x
    #y

    constructor(x, y) {
        this.#y = y;
        this.#x = x;
    }

    get x(){
        return this.#x;
    }

    get y(){
        return this.#y;
    }

    static distance(point1, point2){
        let count = 0;
        let x1 = point1.x;
        let y1 = point1.y;
        let x2 = point2.x;
        let y2 = point2.y;
        
        if (x1 > x2){
            while (x1 > x2){
                x1--;
                count++;
            }
            if (y1 > y2){
                while (y1 > y2){
                    y1--;
                    count++;
                }
            }else {
                while (y1 < y2){
                    y1++;
                    count++;
                }
            }
        }else if (x1 < x2){
            while (x1 < x2){
                x1++;
                count++;
            }
            if (y1 > y2){
                while (y1 > y2){
                    y1--;
                    count++;
                }
            }else {
                while (y1 < y2){
                    y1++;
                    count++;
                }
            }
        }else {
            if (y1 > y2){
                while (y1 > y2){
                    y1--;
                    count++;
                }
            }else {
                while (y1 < y2){
                    y1++;
                    count++;
                }
            }
        }
        return count;
    }
}

let point1 = new Point(5, 5);
let point2 = new Point(9, 8);

console.log(Point.distance(point1, point2));