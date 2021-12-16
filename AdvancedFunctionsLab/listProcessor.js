function solve(list){

    function commandProcessor(){
        let result = [];
        for(let item of list){
            let[command, string] = item.split(', ');

            switch(command){
                case 'add':
                    function add(){
                        result.push(string);
                    }
                    break;
                case 'remove':
                    function remove(){
                        result.removeAll(string);
                    }
                    break;
                case 'print':
                    console.log(result.join(','));
            }
        }
    }
}
let solution = solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
commandProcessor();

