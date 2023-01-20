
export function createSyle(obj) {
    let str = Object.entries(obj)
    .map(([key, value]) => '.' +[key]+ '{'+ Object.entries(value)
      .map(([subKey, subValue]) => subKey +':' +subValue +';')
      .join('')+'}')
    .join(' ');
    return str
}
// export function createSyle(obj) {
// let str = Object.entries(obj)
//   .map(([key, value]) => `${key}{${Object.entries(value)
//     .map(([subKey, subValue]) => `${subKey}:${subValue};`)
//     .join('')}}`)
//   .join(' ');
// console.log(str);
// }
