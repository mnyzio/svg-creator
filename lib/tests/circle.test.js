const { Circle } = require('../shape.js');

// Testing suite for circle
describe('circle', () => {
    describe('render', () => {
        it('should render svg code for circle with blue fill', () => {
            const circle = new Circle();
            circle.setColor("blue")
            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
        })
    })
    
    describe('setColor', () => {
        it('should throw error is user entered invalid color keyword', () => {
            const circle = new Circle();
            const cb = () => circle.setColor("btlue");
            const err = new Error('Color not recognized.');
            expect(cb).toThrowError(err);
        });

        it('should throw error is user entered invalid HEX#', () => {
            const circle = new Circle();
            const cb = () => circle.setColor("#54");
            const err = new Error('Color not recognized.');
            expect(cb).toThrowError(err);
        });

        it('should return color provided by user', () => {
            const circle = new Circle();
            circle.setColor("#545458");
            expect(circle.color).toEqual('#545458');        
        });

        it('should return color provided by user', () => {
            const circle = new Circle();
            circle.setColor("white");
            expect(circle.color).toEqual('white');        
        });
    });
})