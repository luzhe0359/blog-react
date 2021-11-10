import moment from "moment";
/**
  * 日期差
  * @param {String} startDate 开始日期
  * @param {String} endDate 结束日期
  * @return {String} 日期差
  */
export function dateDiff (startDate, endDate) {
  // warning: value provided is not in a recognized RFC2822 or ISO format
  let t1 = moment(startDate)
  let t2 = moment(endDate)
  let duration = moment.duration(t2.diff(t1));
  let { _data } = duration;
  return `${_data.years}年${_data.months}月${_data.days}天${_data.hours}时${_data.minutes}分${_data.seconds}秒`
}