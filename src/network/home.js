import {
  request
} from "./request"

export function gethomemutlidata() {
  return request({
    // url: 'home/multidata'
    url: '/api/tab/1?start=0'
  })
}
export function gethomegoods(id, page) {
  return request({
    url: '/api/sub_column/'+id+'/items?start='+page+'',
  })
}
