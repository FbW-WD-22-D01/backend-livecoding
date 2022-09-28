console.log('hallo welt')
console.log(process.argv.slice(2));

let arguments = process.argv.slice(2);

console.log(arguments[0]);

switch (arguments[0]) {
    case "-a":
        console.log("Das Programm scheint erste klasse zu sein");
        break;
    case "-b":
        console.log("Das Programm scheint zweite klasse zu sein");
        break;
    case "--keineAhnung":
        console.log("Das Programm scheint keine Ahnung zu haben");
        break;
    default:
       console.error("Dein Argument: ", arguments[0]," existiert nicht" );
       process.exit();
        break;
}
setInterval(() => console.log("Computer sagt nein"), 5000);
