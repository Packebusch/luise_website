# How to edit this website (for Luise)

1. open Terminal
2. navigate to website folder 

```sh
$ cd Workspace/luise_website
```
3. start dev-server
```sh
$ yarn start
```
4. open code editor
```sh
$ code .
```
5. make your changes (code like a hero)
6. save changes
```sh
$ git add .
$ git commit -m "describe your changes here"
$ git push
```
7. release changes to the world
```sh
$ yarn publish-gh-pages
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















`docs/doc-to-be-edited.md`

```markdown
---
id: page-needs-edit
title: This Doc Needs To Be Edited
---

Edit me...
```

For more information about docs, click [here](https://docusaurus.io/docs/en/navigation)

## Editing an existing blog post

Edit blog posts by navigating to `website/blog` and editing the corresponding post:

`website/blog/post-to-be-edited.md`

```markdown
---
id: post-needs-edit
title: This Blog Post Needs To Be Edited
---

Edit me...
```

For more information about blog posts, click [here](https://docusaurus.io/docs/en/adding-blog)

# Adding Content

## Adding a new docs page to an existing sidebar

1. Create the doc as a new markdown file in `/docs`, example `docs/newly-created-doc.md`:

```md
---
id: newly-created-doc
title: This Doc Needs To Be Edited
---

My new content here..
```

1. Refer to that doc's ID in an existing sidebar in `website/sidebars.json`:

```javascript
// Add newly-created-doc to the Getting Started category of docs
{
  "docs": {
    "Getting Started": [
      "quick-start",
      "newly-created-doc" // new doc here
    ],
    ...
  },
  ...
}
```

For more information about adding new docs, click [here](https://docusaurus.io/docs/en/navigation)

## Adding a new blog post

1. Make sure there is a header link to your blog in `website/siteConfig.js`:

`website/siteConfig.js`

```javascript
headerLinks: [
    ...
    { blog: true, label: 'Blog' },
    ...
]
```

2. Create the blog post with the format `YYYY-MM-DD-My-Blog-Post-Title.md` in `website/blog`:

`website/blog/2018-05-21-New-Blog-Post.md`

```markdown
---
author: Frank Li
authorURL: https://twitter.com/foobarbaz
authorFBID: 503283835
title: New Blog Post
---

Lorem Ipsum...
```

For more information about blog posts, click [here](https://docusaurus.io/docs/en/adding-blog)

## Adding items to your site's top navigation bar

1. Add links to docs, custom pages or external links by editing the headerLinks field of `website/siteConfig.js`:

`website/siteConfig.js`

```javascript
{
  headerLinks: [
    ...
    /* you can add docs */
    { doc: 'my-examples', label: 'Examples' },
    /* you can add custom pages */
    { page: 'help', label: 'Help' },
    /* you can add external links */
    { href: 'https://github.com/facebook/docusaurus', label: 'GitHub' },
    ...
  ],
  ...
}
```

For more information about the navigation bar, click [here](https://docusaurus.io/docs/en/navigation)

## Adding custom pages

1. Docusaurus uses React components to build pages. The components are saved as .js files in `website/pages/en`:
1. If you want your page to show up in your navigation header, you will need to update `website/siteConfig.js` to add to the `headerLinks` element:

`website/siteConfig.js`

```javascript
{
  headerLinks: [
    ...
    { page: 'my-new-custom-page', label: 'My New Custom Page' },
    ...
  ],
  ...
}
```

For more information about custom pages, click [here](https://docusaurus.io/docs/en/custom-pages).

# Full Documentation

Full documentation can be found on the [website](https://docusaurus.io/).
