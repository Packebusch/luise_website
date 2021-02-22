/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.

const siteConfig = {
  title: 'Luise Scholz', // Title for your website.
  tagline: 'Autorin von binär',
  url: 'https://luisescholz.de', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'luise_website',
  organizationName: 'Packebusch',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    // {href: "/#howItWorks", label: "How it works"},
    // {href: "/aboutUs", label: "About us"},
    // {doc: 'manifest', label: 'Manifesto'},
    // {blog: true, label: 'Blog'},
  ],

  /* path to images for header/footer */
  headerIcon: '',
  footerIcon: '',
  favicon: '',

  /* Colors for website */
  colors: {
    primaryColor: '#FFF',
    secondaryColor: '#FFF',
  },

  pictures: {
    about: '/img/profil.png',
    roman: '/img/binaer.png',
    shortStories: '/img/kurzgeschichten.png',
    contact: '/img/kontakt.png',
  },
  /* Custom fonts for website */


  // fonts: {
  //   myFont: [
  //     "Times New Roman",
  //     "Serif"
  //   ],
  //   myOtherFont: [
  //     "-apple-system",
  //     "system-ui"
  //   ]
  // },


  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Coopreneurs G`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js', 'https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js'],
  

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
