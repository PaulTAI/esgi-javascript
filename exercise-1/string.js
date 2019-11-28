function ucfirst(mon_text){
    let holly;

    holly = mon_text.charAt(0).toUpperCase() + mon_text.substring(1).toLowerCase();

    console.log(holly);
}

ucfirst('hello world');

function capitalize(mon_text){
    let words = mon_text.split(' ');

    var ArrayTab = [];

    for(let i = 0; i < 2; i++){
        var temp;
        temp = words[i].charAt(0).toUpperCase() + words[i].substring(1).toLowerCase();
        ArrayTab.push(temp);
    }
    console.log(ArrayTab.join(" "));
    return ArrayTab.join(" ");
}

capitalize('hello world');

function camelCase(mon_text){
    var newValue;

    newValue = capitalize(mon_text).split(' ');
    newValue.join("");

    console.log(newValue.join(""));
    return newValue.join("");
}

camelCase('hello world');

function snake_case(mon_text){
    let ma_phrase = mon_text.split(' ');

    var ArrayTab = [];

    for(let i = 0; i < 2; i++){
        var temp;
        temp = ma_phrase[i].substring(0).toLowerCase();
        ArrayTab.push(temp);
    }
    console.log(ArrayTab.join("-"));
    return ArrayTab.join("-");
}

snake_case('hello world');

function leet(mon_text){
    var newValue;
    for(let i = 0; i < mon_text.length; i++){
        let lettre = mon_text.charAt(i);
        if(lettre == 'a' | 'A'){
            newValue = mon_text.replace(lettre, '4');
        }
    }
    console.log(newValue);
}

leet('hello world');