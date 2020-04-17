const squareObject = new Proxy (new Object(), {
    get(object, key) {
        if (!isNaN(parseInt(key))) {
            return key*key;
        }
        return new Error('Oops');    
    }
})

squareObject[2] = 'number';
squareObject.text = 'text';

console.log(squareObject[2]);
console.log(squareObject.text);