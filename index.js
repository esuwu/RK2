function squareObj () {
    this.square = data => {
        if (parseInt(data) === data) {
            return data*data;
        }
    
        if (typeof data === 'string') {
            return new Error('Oops');
        }
    }
}

const obj1 = new squareObj();

console.log(obj1.square(2));
