const {sum, app} = require('../sum');
const supertest = require('supertest');

test('It adds 2 numbers together', () => {
    expect(1+3).toBe(4);
})

test('Check number is greater than or not', () => {
    let a = 7;
    expect(a).toBeGreaterThan(6);
})

test('Check number is less than or not', () => {
    let a = 7;
    expect(a).toBeLessThan(8);
})

test('It compare objects', () => {
    let obj1 = {name: "Madan"};
    let obj2 = {name: "Madan"};
    expect(obj1).toBe(obj1);
})

test('Check it is not_a_number', () => {
    let a = 7-'A';
    expect(a).toBeNaN(); 
})

test('check result from sum function', () => {
    expect(sum(1,3)).toBe(4); 
})

test('check result from sum function', () => {
    expect(sum(1,3)).toEqual(4); 
})

test('check result from sum function', () => {
    expect(sum('Hellow','World')).toMatch(/Hellow/); 
})

describe('GET API /getProduct', function() {
    test('It should return product list', async function() {
        const response = await supertest(app).get('/getProduct')
        expect(response.statusCode).toBe(200)
    })
})


