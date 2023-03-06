const { Shape, Triangle, Circle, Square, Text } = require('../shape.js');

// Testing suite for Shape
describe('Shape', () => {
    describe('setColor', () => {
        it('should throw error is user entered invalid color keyword', () => {
            const shape = new Shape();
            const cb = () => shape.setColor("btlue");
            const err = new Error('Color not recognized.');
            expect(cb).toThrowError(err);
        });

        it('should throw error is user entered invalid HEX#', () => {
            const shape = new Shape();
            const cb = () => shape.setColor("#54");
            const err = new Error('Color not recognized.');
            expect(cb).toThrowError(err);
        });

        it('should return color provided by user', () => {
            const shape = new Shape();
            shape.setColor("#545458");
            expect(shape.color).toEqual('#545458');        
        });

        it('should return color provided by user', () => {
            const shape = new Shape();
            shape.setColor("white");
            expect(shape.color).toEqual('white');        
        });
    });

    describe('render', () => {
        it('should throw error to the user', () => {
            const shape = new Shape();
            const cb = () => shape.render();
            const err = new Error('Child class must implement a render() method.');
            expect(cb).toThrowError(err);
        });
    });
});

// Testing suite for Triangle
describe('Triangle', () => {
    describe('triangle', () => {
        it('should create triangle', () => {
            const triangle = new Triangle();
            triangle.setColor("blue");
            expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
    
    describe('setColor', () => {
        it('should throw error is user entered invalid color keyword', () => {
            const triangle = new Triangle();
            const cb = () => triangle.setColor("btlue");
            const err = new Error('Color not recognized.')
            expect(cb).toThrowError(err);
        })
    })
})

// Testing suite for Circle
describe('Circle', () => {
    describe('circle', () => {
        it('should create circle', () => {
            const circle = new Circle();
            circle.setColor("blue");
            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
        })
    })
    
    describe('setColor', () => {
        it('should throw error is user entered invalid color keyword', () => {
            const circle = new Circle();
            const cb = () => circle.setColor("btlue");
            const err = new Error('Color not recognized.')
            expect(cb).toThrowError(err);
        })
    })
})

// Testing suite for Square
describe('Square', () => {
    describe('square', () => {
        it('should create square', () => {
            const square = new Square();
            square.setColor("blue");
            expect(square.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="blue" />');
        })
    })
    
    describe('setColor', () => {
        it('should throw error is user entered invalid color keyword', () => {
            const square = new Square();
            const cb = () => square.setColor("btlue");
            const err = new Error('Color not recognized.')
            expect(cb).toThrowError(err);
        })
    })
})