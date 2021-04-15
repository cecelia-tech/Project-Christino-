const headerData = {
    logo: {
        imgPath: '../img/portfolio/',
        mainLogo: 'logotipas.png',
        alt: 'Cristino logo',
    },
    nav:[{
        type: 'link',
        href: '#',
        text: 'Home',
    },
    {
        type: 'link',
        href: '#',
        text: 'Services',
    },
    {
        type: 'link',
        href: '#',
        text: 'Resume',
    },
    {
        type: 'link',
        href: '#',
        text: 'Projects',
    },
    {
        type: 'link',
        href: '#',
        text: 'Blog',
    },
    {
        type: 'link',
        href: '#',
        text: 'Contact',
    },
    {
        type: 'link',
        href: '#',
        text: 'Pages',
        submenu:[
            {type: 'link', href: '#', text: 'Blog'},
            {type: 'link', href: '#', text: 'Blog Detail'},
            {type: 'link', href: '#', text: 'Portfolio'},
            {type: 'link', href: '#', text: 'Portfolio Detail'},
        ],
        submenuDirection: 'bottom',
    },
    ],
    socials:[
        {facebook: 'fa-facebook-square'},
        {twitter: 'fa-twitter-square'},
        {instagram: 'fa-instagram'}
    ]

}
export { headerData}