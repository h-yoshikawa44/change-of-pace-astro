/* eslint-env browser */
import {
  PUBLIC_GOOGLE_ADSENSE_PUBLISHER_ID,
  PUBLIC_GOOGLE_ADSENSE_SLOT,
} from 'astro:env/client';

document.addEventListener('DOMContentLoaded', () => {
  if (!import.meta.env.PROD) return;

  const createGoogleAdsenseUnitElement = () => {
    const adUnit = document.createElement('ins');
    adUnit.className = 'adsbygoogle h-[280px] w-full md:h-[250px]';
    adUnit.style.display = 'inline-block';
    adUnit.dataset.adClient = PUBLIC_GOOGLE_ADSENSE_PUBLISHER_ID;
    adUnit.dataset.adSlot = PUBLIC_GOOGLE_ADSENSE_SLOT;
    adUnit.dataset.adFormat = 'rectangle, horizontal';
    adUnit.dataset.fullWidthResponsive = 'false';

    const adUnitPush = document.createElement('script');
    adUnitPush.innerHTML = '(adsbygoogle = window.adsbygoogle || []).push({});';

    return { adUnit, adUnitPush };
  };

  const googleAdsenseInit = () => {
    let ad = document.createElement('script');
    ad.type = 'text/javascript';
    ad.async = true;
    ad.crossOrigin = 'anonymous';
    ad.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${PUBLIC_GOOGLE_ADSENSE_PUBLISHER_ID}`;

    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode?.insertBefore(ad, firstScript);

    const gAdUnitBaseList = Array.from(
      document.getElementsByClassName('adsense-unit-base'),
    );
    gAdUnitBaseList.forEach((base) => {
      const { adUnit, adUnitPush } = createGoogleAdsenseUnitElement();
      base.insertAdjacentElement('beforeend', adUnit);
      base.insertAdjacentElement('beforeend', adUnitPush);
    });
  };

  let isLoaded = false;
  const onLazyLoad = () => {
    if (isLoaded === false) {
      isLoaded = true;

      // 1回目実行時に全てのリスナーをまとめて解除したいので、
      // once を使わず removeEventListener で解除する
      window.removeEventListener('scroll', onLazyLoad);
      window.removeEventListener('mousemove', onLazyLoad);
      window.removeEventListener('mousedown', onLazyLoad);
      window.removeEventListener('touchstart', onLazyLoad);
      window.removeEventListener('keydown', onLazyLoad);

      googleAdsenseInit();
    }
  };

  window.addEventListener('scroll', onLazyLoad);
  window.addEventListener('mousemove', onLazyLoad);
  window.addEventListener('mousedown', onLazyLoad);
  window.addEventListener('touchstart', onLazyLoad);
  window.addEventListener('keydown', onLazyLoad);
});
