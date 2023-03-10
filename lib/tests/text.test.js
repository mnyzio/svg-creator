const { Text } = require('../shape.js');

// Testing suite for Text
describe('Text', () => {
    describe('setColor', () => {      
        it('should throw error is user entered invalid color keyword', () => {
            const text = new Text();
            const cb = () => text.setColor("btlue");
            const err = new Error('Color not recognized.');
            expect(cb).toThrowError(err);
        });

        it('should throw error is user entered invalid HEX#', () => {
            const text = new Text();
            const cb = () => text.setColor("#54");
            const err = new Error('Color not recognized.');
            expect(cb).toThrowError(err);
        });

        it('should return color provided by user', () => {
            const text = new Text();
            text.setColor("#545458");
            expect(text.color).toEqual('#545458');        
        });

        it('should return color provided by user', () => {
            const text = new Text();
            text.setColor("white");
            expect(text.color).toEqual('white');        
        });
    });

    describe('setText', () => {
        it('should throw error message is user entered invalid number of charachters', () => {
            const text = new Text();
            const cb = () => text.setText("hello");
            const err = new Error('Invalid number of characters. Max 3 characters are allowed.');
            expect(cb).toThrowError(err)
        })

        it('should add the text to string returned by render method', () => {
            const text = new Text();
            text.setColor("blue")
            text.setText("abc");
            '<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">abc</text>'
            expect(text.render()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">abc</text>')
        })
    })
});

