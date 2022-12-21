const { getAll, getSum } = require("../controller/carousel.controller");

describe('string with a single number should result in the number itself', () => {
    const req = {
        query: {
            slides: '1'
        }
    }
    it('calculation', () => {
        const res = getSum(3);
        expect(res).toBe(6);
    })

    it('calculation', () => {
        const res = getSum(2);
        expect(res).toBe(6);
    })

});