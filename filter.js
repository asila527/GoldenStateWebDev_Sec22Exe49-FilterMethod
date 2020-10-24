const validUserNames = (arr) => arr.filter(x => x.length < 10);
console.log(validUserNames(['loooooongname', 'shortname', 'medium']));