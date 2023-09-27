module.exports = {
    title: 'JourneyWisdomHub',
    description: 'This is a sample doc site.',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guides', link: '/guide/' },
            { text: 'About Me', link: '/aboutme/' },
        ],
        sidebar: {
            '/guide/': [
                '',
                'nextpage',
                'page2'
            ]
        }
    }
}