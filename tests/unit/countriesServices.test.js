const axios = require('axios');
const { getAllCountries, getCountryByName } = require('../../src/services/countriesServices');
const { Api404Error, Api500Error } = require('../../src/utils/baseError');

jest.mock('axios');

describe('countriesController', () => {
  describe('getAllCountries', () => {
    test('should return all countries', async () => {
      // Mockear la respuesta de la API
      const countriesData = [{ name: 'Country 1', population: 100 }, { name: 'Country 2', population: 200 }];
      const response = { data: countriesData };
      axios.get.mockResolvedValue(response);
      const result = await getAllCountries();
      expect(result).toEqual(countriesData);
      expect(axios.get).toHaveBeenCalledWith('https://restcountries.com/v3.1/all');
    });

    test('should throw error when API call fails', async () => {
      const error = new Error('API error');
      axios.get.mockRejectedValue(error);
      await expect(getAllCountries()).rejects.toThrow('Error al obtener los países');
      expect(axios.get).toHaveBeenCalledWith('https://restcountries.com/v3.1/all');
    });
  });

  describe('getCountryByName', () => {
    test('should return country by name', async () => {
      const countryData = { name: 'Country 1', population: 100 };
      const response = { data: [countryData] };
      axios.get.mockResolvedValue(response);
      const result = await getCountryByName('Country 1', 'name,population');

      expect(result).toEqual([countryData]);
      expect(axios.get).toHaveBeenCalledWith('https://restcountries.com/v3.1/name/Country 1?fields=name,population');
    });

    test('should throw Api404Error when country not found', async () => {
      const error = { response: { status: 404 } };
      axios.get.mockRejectedValue(error);
      await expect(getCountryByName('Nonexistent Country', 'name,population')).rejects.toThrow(Api404Error);
      expect(axios.get).toHaveBeenCalledWith('https://restcountries.com/v3.1/name/Nonexistent Country?fields=name,population');
    });

    test('should throw Api500Error when API call fails with status other than 404', async () => {
      const error = { response: { status: 500 } };
      axios.get.mockRejectedValue(error);
      await expect(getCountryByName('Country 1', 'name,population')).rejects.toThrow(Api500Error);
      expect(axios.get).toHaveBeenCalledWith('https://restcountries.com/v3.1/name/Country 1?fields=name,population');
    });
  });
});
