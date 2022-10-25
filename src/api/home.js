import request from "@/utils/request";

/**
 *
 * @param {Integer} limit - 品牌个数
 * @returns promise
 */

export const findBrand = (limit = 6) => {
  return request('/home/brand','get', {limit})
}
