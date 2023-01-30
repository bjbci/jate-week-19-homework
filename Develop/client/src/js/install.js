const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {


});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {


});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {


});


// /registering a workbox service worker info- go to:
// chrome developer tools
// workbox/docs/a service workers life/registration=example code:

  // Don't register the service worker
  // until the page has fully loaded
//   window.addEventListener('load', () => {
//     // Is service worker available?
//     if ('serviceWorker' in navigator) {
//       navigator.serviceWorker.register('/sw.js').then(() => {
//         console.log('Service worker registered!');
//       }).catch((error) => {
//         console.warn('Error registering service worker:');
//         console.warn(error);
//       });
//     }
//   });
// /////   CLASS EXAMPLE
//   export function registerSW(){
//     window.addEventListener('load',()=>{

//         if('serviceWorker' in navigator){
//             navigator.serviceWorker
//             .register('service-worker.js')
//             .then(registration=>{
//                 console.log('Service Worker registered!!!!!')
//                 console.log(registration)
//             })
//             .catch(error=>{
//                 console.log('Error NO Service Worker registered!!!!!')
//                 console.log(error)

//             })
//         }else{
//             console.log('sorry-service worker not supported')
//         }

//   })
// }