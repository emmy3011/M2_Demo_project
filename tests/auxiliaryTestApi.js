const { expect } = require("chai");
const api = require('../public/js/auxiliaryAPI');

describe('celsiusToFahrenheit()', () => {
    it('should return NaN because function uses wrong variable name "celsius"', () => {
        const result = api.celsiusToFahrenheit(10);
        expect(result).to.be.NaN; // chai-Version
    });
});

describe('fahrenheitToCelcius()', () => {
    it('should correctly convert 32°F to 0°C', () => {
        const result = api.fahrenheitToCelcius(32);
        expect(result).to.equal(0);
    });

    it('should correctly convert 212°F to 100°C', () => {
        const result = api.fahrenheitToCelcius(212);
        expect(result).to.equal(100);
    });
});

describe('getGreetingDependOnTime()', () => {
    it('should return "Guten Abend" at 12:00 (between 06:00 and 22:00)', () => {
        const d = new Date('2020-01-01 12:00');
        const result = api.getGreetingDependOnTime(d);
        expect(result).to.equal('Guten Abend');
    });

    it('should return "Guten Morgen" at 23:00 (>= 22:00)', () => {
        const d = new Date('2020-01-01 23:00');
        const result = api.getGreetingDependOnTime(d);
        expect(result).to.equal('Guten Morgen');
    });

    it('should return "Guten Morgen" at 05:00 (< 06:00)', () => {
        const d = new Date('2020-01-01 05:00');
        const result = api.getGreetingDependOnTime(d);
        expect(result).to.equal('Guten Morgen');
    });
});
