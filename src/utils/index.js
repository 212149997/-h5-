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
