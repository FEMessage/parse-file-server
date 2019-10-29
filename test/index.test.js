const {getPhone, getEmail, getName} = require('../utils')

describe('extract infomation', () => {
  test('getPhone', () => {
    const str1 = '电\n 话：\n 18614250055'
    const str2 = '手机：\n 18614250055'
    const str3 = '手机：13810968321 | 邮箱：13810968321@163.com'
    const str4 = '手机：      173-5465-1891'

    expect(getPhone(str1)).toBe('18614250055')
    expect(getPhone(str2)).toBe('18614250055')
    expect(getPhone(str3)).toBe('13810968321')
    expect(getPhone(str4)).toBe('17354651891')
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

  test('getName', () => {
    const self1 = 'https://deepexi-serverless.oss-cn-shenzhen.aliyuncs.com/Web前端技术leader_姓名-1566355077284.pdf'
    const self2 = 'https://deepexi-serverless.oss-cn-shenzhen.aliyuncs.com/简历-姓名-1566994913729.pdf'
    const lagou = '前端开发工程师2-姓名-拉勾招聘-1566994913729.pdf'
    const boss = '【web前端 _ 广州8-16K】姓名 2年-1566994913729.pdf'

    const name = '姓名'

    expect(getName(self1)).toBe(name)
    expect(getName(self2)).toBe(name)
    expect(getName(lagou)).toBe(name)
    expect(getName(boss)).toBe(name)

  })
})
