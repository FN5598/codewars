function toCamelCase(str){
    str = str.split(/[-_]/);
    for(let i = 1; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }
    return str.join('');
}

str = `the_stealth_warrior` // theStealthWarrior

console.log(toCamelCase(str));