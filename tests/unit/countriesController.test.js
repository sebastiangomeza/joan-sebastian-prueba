const axios = require('axios');
const { getAllCountries, getCountryByName } = require('../../src/controllers/countriesController');

jest.mock('axios'); 

describe('countriesController', () => {
    describe('getAllCountries', () => {
        test('should return all countries', async () => {
            const countriesData = [
                { name: 'Country 1', population: 100 },
                { name: 'Country 2', population: 200 },
            ];
            const response = { data: countriesData };
            axios.get.mockResolvedValue(response);

            const req = {};
            const res = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis(),
            };
            await getAllCountries(req, res);

            expect(res.json).toHaveBeenCalledWith(countriesData);
            expect(res.status).not.toHaveBeenCalled();
        });

        test('should handle error when getting countries', async () => {
            const error = new Error('API error');
            axios.get.mockRejectedValue(error);
            const req = {};
            const res = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis(),
            };
            await getAllCountries(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: 'Server Error' });
        });

        test('should return only a country countries', async () => {
            const countriesData = [
                { name: 'Country_1', population: 100, area: 10 },
            ];
            const response = { data: countriesData };
            axios.get.mockResolvedValue(response);

            const req = {
                params: {
                    name: 'Country_1'
                }
            };

            const res = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis(),
            };
            await getCountryByName(req, res);
            expect(axios.get).toHaveBeenCalledWith('https://restcountries.com/v3.1/name/Country_1?fields=name,area,population');
            expect(res.json).toHaveBeenCalledWith(countriesData);
            expect(res.status).not.toHaveBeenCalled();
        });



        test('should handle error when getting countries', async () => {
            const error = new Error('API error');
            axios.get.mockRejectedValue(error);

            const req = {
                params: {
                    name: 'Country_1'
                }
            }; const res = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis(),
            };
            await getCountryByName(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: 'Server Error' });
        });
    });

});
