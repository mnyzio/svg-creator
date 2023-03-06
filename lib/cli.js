const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createSVG } = require('./svg');

class CLI {
    constructor() {
        this.svgText = '';
        this.svgTextColor = '';
        this.svgShape = '';
        this.svgShapeColor = '';
    }
    run() {
        return inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'svgText',
                    message: 'Please enter up to three characters for your svg logo text:'
                },
                {
                    type: 'text',
                    name: 'svgTextColor',
                    message: 'Please enter color for your text (color keyword or HEX#):'
                },                
                {
                    type: 'list',
                    name: 'svgShape',
                    message: 'Please select shaper for your svg:',
                    choices: ['circle', 'triangle', 'square']
                },                
                {
                    type: 'text',
                    name: 'svgShapeColor',
                    message: 'Please enter color for your shape (color keyword or HEX#):'
                }                
            ])
            .then((answers) => {
                this.svgText = answers.svgText;                
                this.svgTextColor = answers.svgTextColor;
                this.svgShape = answers.svgShape;
                this.svgShapeColor = answers.svgShapeColor;                
                // Write to file
                return writeFile(
                    join(__dirname, '..', 'examples', 'logo.svg'),
                    createSVG(this.svgText, this.svgTextColor, this.svgShape, this.svgShapeColor)
                );
            })
            .then(() => console.log("Generated logo.svg"))
            .catch((err) => {
                console.log(err);
                console.log('Oops. Something went wrong.');
            });
    }
}
module.exports = CLI;