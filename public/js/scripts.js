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
  const dialog = document.querySelector('.dialog');
  const externalLink = dialog.querySelector('a');
  const displayLink = dialog.querySelector('a span');
  const external = document.querySelectorAll('a[href*="http"');
  let link;

  external.forEach((a) =>
    a.addEventListener('click', (e) => {
      e.preventDefault();
      link = e.target.getAttribute('href');
      dimBackground();
      dialog.classList.remove('hidden');
      externalLink.setAttribute('href', link);
      displayLink.innerText = link.replace(/(^\w+:|^)\/\//, '');
    })
  );
}

const closeExternalLinkWarning = () => {
  const dialog = document.querySelector('.dialog');
  const back =  dialog.querySelector('p.button');
  const externalLink = dialog.querySelector('a');
  const displayLink = dialog.querySelector('a span');

  back.addEventListener('click', (e) => {
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

const copyrightYear = () => {
  document.querySelector('.copyright span').innerHTML = new Date().getFullYear();
}


const makeItSo = () => {
  document.addEventListener("DOMContentLoaded", () => {
    externalLinkWarning();
    closeExternalLinkWarning();
    copyrightYear();
    video();
    openNavigation();
    console.log("This website crafted by hand by Brendan Meachen");
 });
};
makeItSo();