const dimBackground = () => {
  const dialog = document.querySelector('.dialog');
  const video = document.querySelector('.video.show');
  const backdrop = document.querySelector('.backdrop');
  backdrop.classList.remove('hidden');

  backdrop.addEventListener('click', (e) => {
    dialog.classList.add('hidden');
    backdrop.classList.add('hidden');
    video.classList.add('hidden');
    video.classList.remove('show');
  })
}

const externalLinkWarning = () => {
  const dialog = document.querySelector('.dialog.link');
  const externalLink = dialog.querySelector('a');
  const displayLink = dialog.querySelector('a span');
  const external = document.querySelectorAll('a[href*="http"]');
  let link;
  let displayDest;

  external.forEach((a) => {
    if (a.classList.value !== 'internal') {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        link = e.target.getAttribute('href');
        displayDest = e.target.getAttribute('data-destination');
        dimBackground();
        dialog.classList.remove('hidden');
        externalLink.setAttribute('href', link);
        if (displayDest) displayLink.innerText = displayDest;
        if (!displayDest) displayLink.innerText = link.replace(/(^\w+:|^)\/\//, '');
      })
    }
  });
}

const closeExternalLinkWarning = () => {
  const dialog = document.querySelector('.dialog');
  const back =  dialog.querySelector('a.close');
  const externalLink = dialog.querySelector('a');
  const displayLink = dialog.querySelector('a span');

  back.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.classList.add('hidden');
    document.querySelector('.backdrop').classList.add('hidden');
    externalLink.removeAttribute('href');
    displayLink.innerText = '';
  })

};

const video = () => {
  const link = document.querySelectorAll('.tile a.video');
  const closeVideo = document.querySelectorAll('div.video .close');

  link.forEach((a) =>
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const video = e.target.parentElement.parentElement.nextElementSibling;
      video.classList.remove('hidden');
      video.classList.add('show');
      dimBackground();
    })
  );

  closeVideo.forEach((c) =>
    c.addEventListener('click', (e) => {
      const video = e.target.parentElement;
      video.classList.add('hidden');
      video.classList.remove('show');
      document.querySelector('.backdrop').classList.add('hidden');
    })
  );
}

const openNavigation = () => {
  const nav = document.querySelector('header nav');
  const burger = document.querySelector('header button');

  burger.addEventListener('click', (e) => {
    nav.classList.toggle('show');
    nav.classList.toggle('hide');
  })
}

const createCookie = (cookieExpireDays) => {
  const currentDate = new Date();
  currentDate.setTime(currentDate.getTime() + (cookieExpireDays*24*60*60*1000));
  const expires = 'Expires=' + currentDate.toUTCString();
  const name = `patient=1; Path=/; SameSite=Lax; Secure;`;
  document.cookie = name + expires;
 }

const getCookie = (cookieName) => {
  let cookie = {};
  document.cookie.split(';').forEach((co) => {
    let [key,value] = co.split('=');
    cookie[key.trim()] = value;
  })
  return cookie[cookieName];
}


const patientPrompt = () => {
  const curtain = document.querySelector('.curtain');
  const dialog = document.querySelector('.dialog.patient');
  const confirm = document.querySelector('.patient .button');
  const footer = document.querySelector('footer');

  curtain.classList.remove('hidden');
  dialog.classList.remove('hidden');
  footer.classList.add('sticky');

  confirm.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.classList.add('hidden');
    curtain.classList.add('hidden');
    footer.classList.remove('sticky');
    createCookie(1);
  })
}

const firstTimeVisit = () => {
  const domain = (new URL(document.URL)).hostname;
  let prevDomain;
  const page = document.URL;
  const firstTime = getCookie('patient');
  if (document.referrer)
    {prevDomain = (new URL(document.referrer)).hostname;}
    if ((prevDomain === null && !firstTime) || (prevDomain !== domain && !firstTime)) {
      patientPrompt();
    }
}

const copyrightYear = () => {
  document.querySelector('.copyright span').innerHTML = new Date().getFullYear();
}


const makeItSo = () => {
  document.addEventListener("DOMContentLoaded", () => {
    firstTimeVisit();
    externalLinkWarning();
    closeExternalLinkWarning();
    copyrightYear();
    video();
    openNavigation();
    console.log("This website crafted by hand by Brendan Meachen");
 });
};
makeItSo();