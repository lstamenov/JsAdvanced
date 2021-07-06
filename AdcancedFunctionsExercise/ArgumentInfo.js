let args = ['cat', 42, function () { console.log('Hello world!'); }];
let printArguments = (args) => {
    let arg = {
    };

    let stringCount = 0;
    let numberCount = 0;
    let functionCount = 0;

    for (let i = 0; i < args.length; i++) {
        if (Number(args[i])){
            if (arg.number){
                arg.number += ` ,${arg[i]}`;
            }else {
                arg.number = args[i];
            }
            numberCount++;
        }else {
            if (args[i] instanceof Function){
                if (arg.function){
                    arg.number += ` ,${arg[i].toString()}`;
                }else {
                    arg.function = args[i].toString();
                }
                functionCount++;
            }else {
                if (arg.string){
                    arg.string += ` ,${arg[i]}`;
                }else {
                    arg.string = args[i];
                }
                stringCount++;
            }
        }
    }

    console.log(arg);
    console.log(stringCount);
    console.log(numberCount);
    console.log(functionCount);
}

printArguments(args);
