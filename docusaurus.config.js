module.exports = {
  title: 'pingg',
  tagline: 'Where better matches are made.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  onBrokenLinks: 'warn',
  themeConfig: {
    navbar: {
      title: 'pingg',
      logo: {
        alt: 'pingg logo',
        src: 'img/logo.svg',
      },

      items: [
	  {
	    label: 'Product Overview',
	    to: 'docs/product-overview/',
	    position: 'left',
	  },
	  {
	    label: 'Manual',
	    position: 'left',
	    items: [
	      {
	        label: 'Getting Started',
	        to: 'docs/getting-started/',
	        position: 'left',
	      },
	      {
	        label: 'Modes of Operation',
	        to: 'docs/modes-of-operation/',
	        position: 'left',
	      },
	    ],
	  },
	  {
	    label: 'Requirements Spec',
	    position: 'left',
	    items: [
	      {
	        label: 'Information Description',
	        to: 'docs/rspec/information-description/',
	        position: 'left',
	      },
	      {
	        label: 'Functional Description',
	        to: 'docs/rspec/functional-description/',
	        position: 'left',
	      },
	    ],
	  },
          {
            href: 'https://github.com/zpg6/pingg',
            label: 'GitHub',
            position: 'right',
          },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
