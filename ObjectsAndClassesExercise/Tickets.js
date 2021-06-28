class Ticket {
    destination;
    price;
    status;

    constructor(destination, price, status) {
        this.destination = destination;
        this.price = Number(price);
        this.status = status;
    }

    get destination(){
        return this.destination;
    }

    get price(){
        return this.price;
    }

    get status(){
        return this.status;
    }
}

let input = ['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'];

let sortingCriteria = 'destination';

let getTickets = (input) => {
    let tickets = [];

    for (let i = 0; i < input.length; i++){
        let ticket = input[i].split("|");
        tickets.push(new Ticket(ticket[0], Number(ticket[1]), ticket[2]));
    }

    return tickets;
}

let tickets = getTickets(input);

let sortTicketsBy = (tickets, sortingCriteria) => {
    tickets.sort(function (a, b) {
        if (a[sortingCriteria] > b[sortingCriteria]){
            return 1;
        }else {
            return -1;
        }
    });
};

sortTicketsBy(tickets, sortingCriteria);
console.log(tickets);