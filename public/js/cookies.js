const createCookie = (name, cookieExpireDays) => {
  const currentDate = new Date();
  currentDate.setTime(currentDate.getTime() + (cookieExpireDays*24*60*60*1000));
  const expires = 'expires=' + currentDate.toUTCString();
  const consent = name + '; SameSite=Lax; Secure;';
  document.cookie = consent + expires;
 }

const cookieConsent = () => {
  const acceptCookie = document.querySelector('.acceptCookie');
  acceptCookie.addEventListener('click', () => {
    createCookie('consent=true', 30);
  });
}

const checkCookie = () => {
  const decodedCookie = decodeURIComponent(document.cookie);
  if (decodedCookie) document.querySelector('.cookiePopUp').classList.add('hidden');
  if (!decodedCookie) document.querySelector('.cookiePopUp').classList.remove('hidden');
}

const fireWhenReady = () => {
  document.addEventListener('DOMContentLoaded', () => {
    cookieConsent();
    checkCookie();
 });
};
fireWhenReady();