import {
  request
} from './request'

export function getdetail(idx) {
  return request({
    url: '/api/detail?id='+ idx +'&normal=1&sa='
  })
}
