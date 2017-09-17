// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCzhX0EXEn0uDJaM6_EJcAlysxzjdoRi1o",
    authDomain: "angular-itl.firebaseapp.com",
    databaseURL: "https://angular-itl.firebaseio.com",
    projectId: "angular-itl",
    storageBucket: "angular-itl.appspot.com",
    messagingSenderId: "7110772765"
  }
};
