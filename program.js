process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function(){
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.toString().trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/version':
                console.log(process.versions.node);
                break;
            case '/lang':
                console.log(process.env.LC_CTYPE);
            default:
                process.stderr.write('Wrong instruction!\n');
        }
        // if (instruction === '/exit') {
        //     process.stdout.write('Quitting app!\n');
        //     process.exit();
        // } else {
        //     process.stderr.write('Wrong instruction!\n');
        // }
    }
});
