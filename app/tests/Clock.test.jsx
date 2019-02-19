var React= require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

/////////////////

describe('Clock',()=>{
    it('Should Exists',()=>{
        expect(Clock).toExist();

    });

    describe('formateSeconds',()=>{
        it('Should formate Seconds',()=>{
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 615;
            var expect = '10.15';
            var func = clock.formateSeconds(seconds);

            expect(func).toBe(expect);
            
        });
    
        });

});