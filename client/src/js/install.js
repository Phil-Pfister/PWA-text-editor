const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPromt = event;
    butInstall.style.visibility = 'visible';
    
});
// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPromt;   
    if (!promptEvent) {
        return
    }   
    promptEvent.prompt();
    window.deferredPromt = null;
    butInstall.style.visibility = 'hidden';    
        
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    butInstall.style.visibility = 'hidden';
    console.log('appinstalled', event);
});
