const { Triangle } = require('../shape.js');

// Testing suite for Triangle
describe('Triangle', () => {
    describe('render', () => {
        it('should render svg code for triangle with blue fill', () => {
            const triangle = new Triangle();
            triangle.setColor("blue")
            expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
    
    describe('setColor', () => {
        it('should throw error is user entered invalid color keyword', () => {
            const triangle = new Triangle();
            const cb = () => triangle.setColor("btlue");
            const err = new Error('Color not recognized.');
            expect(cb).toThrowError(err);
        });

        it('should throw error is user entered invalid HEX#', () => {
            const triangle = new Triangle();
            const cb = () => triangle.setColor("#54");
            const err = new Error('Color not recognized.');
            expect(cb).toThrowError(err);
        });

        it('should return color provided by user', () => {
            const triangle = new Triangle();
            triangle.setColor("#545458");
            expect(triangle.color).toEqual('#545458');        
        });

        it('should return color provided by user', () => {
            const triangle = new Triangle();
            triangle.setColor("white");
            expect(triangle.color).toEqual('white');        
        });
    });
})