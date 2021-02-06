// 批量对post请求参数做类型转换，应对一些懒惰的后端

let data = {
    aaa: '123asdasd',
    bbb: '456',
    ccc: 666,
    ddd: {
        sname: 'hm'
    }
}


const transformType = (data = {}, types = []) => {
    let keys = Object.keys(data);
    if (keys.length !== types.length) throw new Error('参数个数与类型集合不匹配')
    let res = {};
    types.forEach((typeFn, index) => {
        let key = keys[index];
        let value = typeFn ? typeFn(data[key]) : data[key];
        res[key] = value;
    })
    return res;
}

const res = transformType(data, [parseFloat, Number, String, null])
console.log(res)

