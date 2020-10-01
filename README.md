# Adding Sponsorship Logos

There is a file called `sponsors.js` inside of `src`. You can edit this file based on the examples provided inside it to add new companies to appear on the sponsorship page.

To hide the information for people to sponsor KHE (aka, when we're a week or two out and we close the ability to sponsor us), you can adjust `allowSponsorship` inside `App.vue`'s data.

Logos can be added by putting them inside `src/assets/sponsors` and then referencing them as per the example HacksuLogo inside of sponsors.js
Logos can also be used remotely by specifying a link to an already existing asset.

# Pushing to live

Add live remote (if you haven't already)
```
git remote add live ssh://root@khe.io/var/www/kenthackenough-ui-2020.git
```

Push to live
```
git push live master
# log in with KHE server password. You can find in social accounts/server document.
```


# kenthackenough-ui-2019

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
# kenthackenough-ui-2019
