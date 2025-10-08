function mix(s1, s2) {
    // delete spaces
    let newS1 = s1.replace(/\s+/g, '').split('').map(String);
    let countedS1 = [];
    let newS2 = s2.replace(/\s+/g, '').split('').map(String);
    let countedS2 = [];

    // make an object for each string 
    for (let i = 0; i < newS1.length; i++) {
        numFound = newS1.filter(c => c === newS1[i]);
        if (!countedS1.find(c => c.symbol === newS1[i]) && numFound.length > 1) {
            countedS1.push({ symbol: newS1[i], occurances: numFound.length, arr: '1' });
        }
    }
    for (let i = 0; i < newS2.length; i++) {
        numFound = newS2.filter(c => c === newS2[i]);
        if (!countedS2.find(c => c.symbol === newS2[i]) && numFound.length > 1) {
            countedS2.push({ symbol: newS2[i], occurances: numFound.length, arr: '2' });
        }
    }

    // connect 2 arrays if dublicates push one with higher occurance
    let combined = [];

    for (let i = 0; i < countedS1.length; i++) {
        combined.push({ symbol: countedS1[i].symbol, c1: countedS1[i].occurances, c2: 0 });
    }

    for (let j = 0; j < countedS2.length; j++) {
        let sym = countedS2[j].symbol;
        let found = false;
        for (let k = 0; k < combined.length; k++) {
            if (combined[k].symbol === sym) {
                combined[k].c2 = countedS2[j].occurances;
                found = true;
                break;
            }
        }
        if (!found) {
            combined.push({ symbol: sym, c1: 0, c2: countedS2[j].occurances });
        }
    }

    // make an object { source: '1' '2' or '=', symbol, count, value } 1, b, 5, bbbbb only if count > 1
    let resArr = []; 

    for (let i = 0; i < combined.length; i++) {
        const item = combined[i];
        const maxCount = item.c1 > item.c2 ? item.c1 : item.c2;
        if (maxCount <= 1) continue;

        let source;
        if (item.c1 > item.c2) source = '1';
        else if (item.c2 > item.c1) source = '2';
        else source = '=';

        resArr.push({
            source,
            symbol: item.symbol,
            count: maxCount,
            value: item.symbol.repeat(maxCount)
        });
    }

    // order the object
    const sourceOrder = { '1': 0, '2': 1, '=': 2 };
    resArr.sort((a, b) => {
        if (b.count !== a.count) return b.count - a.count;
        if (sourceOrder[a.source] !== sourceOrder[b.source])
            return sourceOrder[a.source] - sourceOrder[b.source];
        return a.symbol.localeCompare(b.symbol);
    });


    return resArr.map(e => `${e.source}:${e.value}/`).join('').slice(0, -1);
}

s1 = "Are they here"
s2 = "yes, they are here"
console.log(mix(s1, s2));