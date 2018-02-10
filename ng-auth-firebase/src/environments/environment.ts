// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAJYdMiHWpHz0Vlyjnb3kKYjWVYSa-aAxc",
    authDomain: "ng-auth-base.firebaseapp.com",
    databaseURL: "https://ng-auth-base.firebaseio.com",
    projectId: "ng-auth-base",
    storageBucket: "ng-auth-base.appspot.com",
    messagingSenderId: "649106629179"
  }
};
