# How to edit this website (for Luise)

1. open Terminal
2. navigate to website folder 

```sh
cd Workspace/luise_website
```
3. start dev-server
```sh
yarn start
```
4. open code editor
```sh
code .
```
5. make your changes (code like a hero)
6. save changes
```sh
git add .
git commit -m "describe your changes here"
git push
```
7. release changes to the world
```sh
yarn publish-gh-pages
```

# How to change your website

Your project file structure should look something like this

```
luise_website/
  docs/ 
  website/
    blog/
    core/
    node_modules/
    pages/ (This are the individual pages of your website. If you want to change something there you need to change it in e.g. kontakt.js)
      cafe.js
      impressum.js
      index.js
      kontakt.js
      kurzgeschichten.js
      leseprobe.js
      matilda.js
      roman.js
      tribadie.js
      uebermich.js
    static/
      css/
      img/ (here are your images - put new ones here)
    package.json
    sidebars.json
    siteConfig.js (sometimes you need this)
```

## Editing Pages

### index.js
index.js is your homepage with the pictures.

Change things here if you want to edit `index.html`.

If you want to change the pictures, you need to change them in siteConfig.js in line 48 (pictures)


### roman.js
Change things here if you want to edit `roman.html`.

Make your changes in these variables at the top section. 
+ **headline** => `HEADLINE`
+ **interview** => `INTERVIEW`
+ **button** => `BUTTON`

### leseprobe.js
Change things here if you want to edit `leseprobe.html`.

Make your changes in these variables at the top section. 
+ **headline** => `HEADLINE`
+ **leseprobe content** => `CONTENT`
+ **copyright** => `COPYRIGHT`
+ **button** => `BUTTON`


### uebermich.js
Change things here if you want to edit `uebermich.html`.

Make your changes in these variables at the top section. 
+ **text** => `ABOUT`
+ **button** => `BUTTON`

### kurzgeschichten.js
Change things here if you want to edit `kurzgeschichten.html`.

Make your changes in these variables at the top section. 
+ **headline** => HEADING
+ **kurzgeschichten** => KURZGESCHICHTEN
+ **button** => BUTTON

### cafe.js
Change things here if you want to edit `cafe.html`.

Make your changes in these variables at the top section. 
+ **headline** => `HEADLINE`
+ **kurzgeschichte content** => `CONTENT`
+ **copyright** => `COPYRIGHT`
+ **button** => `BUTTON`

### matilda.js
Change things here if you want to edit `matilda.html`.

Make your changes in these variables at the top section. 
+ **headline** => `HEADLINE`
+ **kurzgeschichte content** => `CONTENT`
+ **copyright** => `COPYRIGHT`
+ **button** => `BUTTON`

### tribadie.js
Change things here if you want to edit `tribadie.html`.

Make your changes in these variables at the top section. 
+ **headline** => `HEADLINE`
+ **kurzgeschichte content** => `CONTENT`
+ **copyright** => `COPYRIGHT`
+ **button** => `BUTTON`

### kontakt.js
Change things here if you want to edit `kontakt.html`.


### impressum.js
Change things here if you want to edit `impressum.html`.

 