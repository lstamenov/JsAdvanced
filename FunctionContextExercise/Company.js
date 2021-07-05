class Company {
    departments;

    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department){
        if (username && salary && position && department){
            if (salary > 0){
                let employee = {
                    username: username,
                    salary: salary,
                    position: position,
                    department: department
                };

                let index = this.groupWith(department);
                if (index === this.departments.length){
                    this.departments[index] = new Array(0);
                }
                this.departments[index].push(employee);
            }else {
                console.log('Invalid input!');
            }
        }else {
            console.log('Invalid input!');
        }
    }

    groupWith(department){
        for (let i = 0; i < this.departments.length; i++) {
            for (let j = 0; j < this.departments[i].length; j++) {
                if (this.departments[i][j].department === department){
                    return i;
                }
            }
        }
        return this.departments.length;
    }

    bestDepartment(){
        let bestDepartment = '';
        let highestAverageSalary = 0;

        for (let i = 0; i < this.departments.length; i++) {
            let averageSalary = this.getAverageSalary(i);
            if (averageSalary > highestAverageSalary){
                bestDepartment = this.departments[i][0].department;
                highestAverageSalary = averageSalary;
            }
        }

        let bestDepIndex = this.groupWith(bestDepartment);
        this.departments[bestDepIndex].sort(function (a, b) {
           if (a.salary > b.salary){
               return 1;
           }else if (b.salary > a.salary){
               return -1;
           }else {
               if (a.username > b.username){
                   return a;
               }else {
                   return b;
               }
           }
        });

        console.log(`Best Department is: ${bestDepartment}`);
        console.log(`Average salary: ${highestAverageSalary}`);
        for (let i = 0; i < this.departments[bestDepIndex].length; i++) {

            let username = this.departments[bestDepIndex][i].username;
            let salary = this.departments[bestDepIndex][i].salary;
            let position = this.departments[bestDepIndex][i].position;

            console.log(`${username} ${salary} ${position}`);
        }
    }

    getAverageSalary(i) {
        let salary = 0;
        for (let j = 0; j < this.departments[i].length; j++) {
            salary += Number(this.departments[i][j].salary);
        }

        return salary / this.departments[i].length;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
