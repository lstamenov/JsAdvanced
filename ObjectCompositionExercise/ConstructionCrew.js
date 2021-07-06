let worker = { weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true };

let solve = (worker) => {
    if (worker.dizziness){
        let millilitres = 0.1 * Number(worker.weight) * Number(worker.experience);
        worker.dizziness = false;
        worker.levelOfHydrated += millilitres;
    }

    return worker;
}

console.log(solve(worker));