import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

export default {
    title: 'Arcrsr的小站',
    tagline:
        '记录工作生活中的点滴，分享我的心得体会。欢迎光临，让我们共同进步！',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://arcrsr.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh',
        locales: ['zh'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.jpg',
            },
            items: [
                { to: '/blog', label: '博客', position: 'left' },
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: '笔记',
                },
                { to: '/project', label: '项目', position: 'left' },
                { to: '/about', label: '关于我', position: 'right' },
                {
                    href: 'https://github.com/Arcrsr/arcrsr-website',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: '工作与生活',
                    items: [
                        {
                            label: '博客',
                            to: '/blog',
                        },
                        {
                            label: '笔记',
                            to: '/docs',
                        },
                        {
                            label: '项目',
                            to: '/project',
                        },
                    ],
                },
                {
                    title: '社交媒体',
                    items: [
                        {
                            label: '微信',
                            to: '/img/wechat.jpg',
                            target: '_blank',
                        },
                        {
                            label: 'QQ',
                            href: '/img/qq.jpg',
                            target: '_blank',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/Arcrsr',
                        },
                    ],
                },
                {
                    title: '更多',
                    items: [
                        {
                            label: '关于我',
                            to: '/about',
                        },
                    ],
                },
            ],
            copyright: `<p><a href="http://beian.miit.gov.cn/">京ICP备2024058975号-1</a></p><p>Copyright © ${new Date().getFullYear()} - PRESENT Arcrsr Built with Docusaurus.</p>`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
        docs: {
            sidebar: {
                hideable: true,
                autoCollapseCategories: true,
            },
        },
    } satisfies Preset.ThemeConfig,
} satisfies Config;
