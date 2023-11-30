// import axios, { AxiosResponse } from 'axios';
// import { fetchData } from './apiService';
// jest.mock('axios');

// describe('fetchData', () => {
//     it('should returns data for a successful request', async () => {
//         const mockData = 'Mocked data';
//         (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({
//             data: mockData,
//           } as AxiosResponse<string, any>);
      
//         const result = await fetchData();
      
//         expect(result).toEqual(mockData);
//     });
// });