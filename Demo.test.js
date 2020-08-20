import { runCallback, createObject, getData } from './Demo'
import axios from 'axios'
jest.mock('axios');

// 1. 捕获函数的调用和返回结果，以及this和调用顺序
// 2. 他可以让我们自由的设置返回结果
// 3. 改变函数的内部实现

 test.only('测试 runCallback', () => {
   const func = jest.fn();
    func.mockImplementation(() => {
      console.log('1231223')
      return 'abc'
    })
    // func.mockReturnThis();
   runCallback(func);
   runCallback(func);
   expect(func.mock.calls.length).toBe(2);
   expect(func.mock.calls[0]).toEqual(['abc', 'bac']) // 第一次调用
   expect(func).toBeCalledWith('abc', 'bac') // 每次调用
   console.log(func.mock);
 })

 test('测试 createObject', () => {
   const func = jest.fn();
   createObject(func);
   console.log(func.mock);
 })

 test('测试 getData', async () => {
  //  第三个用处是改变函数的内部实现
  axios.get.mockResolvedValueOnce({data: 'hello'});
  axios.get.mockResolvedValueOnce({data: 'world'});
  await getData().then((data) => {
    expect(data).toBe('hello');
  })
  await getData().then((data) => {
    expect(data).toBe('world');
  })
 })