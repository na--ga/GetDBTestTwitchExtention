   const twitch = window.Twitch.ext;

   twitch.onAuthorized((auth) => {
       console.log('The extension is now authorized!');
   });

   twitch.onContext((context, delta) => {
       console.log('The context changed!', context, delta);
   });
