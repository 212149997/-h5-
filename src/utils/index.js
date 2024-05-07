const ua = navigator.userAgent || '';

//兼容ipad air或ipad pro
export const isIpad = !!((/macintosh|mac os x/i.test(ua) && window.screen.height > window.screen.width && !ua.match(/(iPhone\sOS)\s([\d_]+)/)) || ua.match(/(iPad).*OS\s([\d_]+)/));

//android终端或者uc浏览器
export const isAndroid = /android|linux/i.test(ua);

export const isIOS = /iphone|ipad|ipod/i.test(ua) || !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || isIpad;

export const isPc = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|SymbianOS|Windows Phone/i.test(ua) === false && !isIOS;

/**
 * 获取一个 min 到 max 范围内的随机整数(包头包尾)
 * @param min 最小值
 * @param max 最大值
 */
export function getRandomNumber(min = 0, max = 1, isInteger = true) {
  if (isInteger) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  } else {
    return Math.random() * (max - min) + min;
  }
}

export function initGaoDeSDK(callback) {
  const script = document.createElement('script');
  script.src = 'https://webapi.amap.com/loader.js';
  script.async = true;
  script.defer = true;
  script.onload = () => {
    callback && callback();
  };
  document.body.appendChild(script);
}

export function generateRunningPace() {
  // 生成每公里的时间，范围在 5 分钟到 10 分钟之间
  let minutes = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  let seconds = Math.floor(Math.random() * 60);

  // 格式化时间，确保秒数显示为两位数
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // 构建跑步速度字符串
  let paceString = minutes + "'" + seconds + "''";

  return paceString;
}

export function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${remainingSeconds}`;
}
