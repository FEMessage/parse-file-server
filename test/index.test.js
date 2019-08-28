const {getPhone, getEmail} = require('../utils')
describe('extract infomation', () => {
  test('getPhone', () => {
	  const str1 = '电\n 话：\n 18614250055'
	  const str2 = '手机：\n 18614250055'
		const str3 = '手机：13810968321 | 邮箱：13810968321@163.com'

		expect(getPhone(str1)).toBe('18614250055')
		expect(getPhone(str2)).toBe('18614250055')
		expect(getPhone(str3)).toBe('13810968321')
		expect(getPhone('phone')).toBe('')
		expect(getPhone('')).toBe('')
	})

	test('getEmail', () => {
	  const str1 = '邮\n \n 箱：\n 443633568@qq.com'
	  const str2 = '邮件地址：\n 443633568@qq.com'
		const str3 = '手机：13810968321 | 邮箱：13810968321@163.com'

		expect(getEmail(str1)).toBe('443633568@qq.com')
		expect(getEmail(str2)).toBe('443633568@qq.com')
		expect(getEmail(str3)).toBe('13810968321@163.com')
		expect(getPhone('email')).toBe('')
		expect(getPhone('')).toBe('')
	})
})
