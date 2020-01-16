## Material samples

This repo demos if I import `MatDatepickerModule` from `@angular/material` but not really using it in any `template`. The whole material bundle will be bundled into the finally `main.js` bundle.

Please check the `src/app.module.ts`.
And to reproduce.

- yarn build:prod
- yarn stats