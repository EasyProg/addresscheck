/**
 * Created by Михаил on 19.03.2018.
 */
import checkAddress from '../checkAddress';
   test('should got passed',()=>{
       expect(checkAddress('0x0b078896a3d9166da5c37ae52a5809aca48630d4')).toBe('true');
   });
test('shouldnt got passed',()=>{
    expect(checkAddress('www.sddds.ru')).toBe('false');
});