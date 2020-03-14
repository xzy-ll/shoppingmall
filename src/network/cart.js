import {
  request
} from "./request"

export function getcart(){
  return request({
    url:'/api/tab/2?start=0'
  })
}
// 本周上新的数据
// export function getcart12(){
//   return request({
//     url:'/api/column/3183'
//   })
// }
// 其他分类数据
export function getcart13(page,id){
  return request({
    url:'/api/'+page+'/'+id+'/items?start=0&sort=0'
  })
}