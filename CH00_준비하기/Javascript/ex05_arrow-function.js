/**
 * 화살표 함수
 * 
 */

//map()과 ()=>{}
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];
// 첫번쨰 파라미터 value, 두 번째 index
materials.map((e, idx)=>{
  console.log(idx, e);
});


let newArr = materials.map((e, idx)=>{
  return e.length*2;
});
console.log(newArr);

// 회문
let palindromes = [
  '스위스',
  '팥콩밭',
  '별똥별',
  '우영우'
];
const contents = palindromes.filter((str)=>{
  if(str === str.split('').reverse("").join('')){
    return str;
  } 
});
console.log(contents);