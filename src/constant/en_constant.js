import BookOnlineOutlinedIcon from '@mui/icons-material/BookOnlineOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import PriceCheckOutlinedIcon from '@mui/icons-material/PriceCheckOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';

let en_iconFrame = {
    icon: {
        height: '70px',
        width: '70px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -100%)',
        fontSize: '1px',
        color: 'white',
        backgroundColor: '#22985C',
        borderRadius: '50%',
        padding: '10px',
        borderRadius: '50%',
    },
};

export let en_SDT = '+84373577867';
export let en_com_name = 'Taxi Gia Re Company Limited';

export let en_links = {
    home: '/',
    about: '/about',
    contact: '/contact',
    news: '/news',
};

export let en_noti_text =
    'TAXIGIARE.COM: 20% discount on all trips from 1/9 - 3/9. Hurry up and book a car to receive this offer!';
export let en_title = 'Taxigiare.com';
export let en_lang = {
    code: 'EN',
    image: 'https://emojigraph.org/media/joypixels/flag-united-states_1f1fa-1f1f8.png',
};
export let en_detail_links = [
    {
        id: 0,
        title: 'Home',
        url: '/',
    },
    {
        id: 1,
        title: 'About',
        url: '/about',
    },
    // {
    //     id: 2,
    //     title: 'Liên hệ',
    //     url: '/contact',
    // },
    // {
    //     id: 3,
    //     title: 'Liên hệ',
    //     url: '/contact',
    // },
];

export let en_content_footer = {
    title: 'Taxigiare.com - Cheap, fast and convenient online taxi booking system.',
    com_name: en_com_name,
    name: 'Nguyen Van A',
    address: 'Buon Ma Thuot, Dak Lak',
    email: 'abc@gmail.com',
    phone: en_SDT,
    copy_right: 'Mr. Aducanha © 2024. All Rights Reserved.',
};

export let en_slides = [
    {
        id: 0,
        url: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg',
        text: 'Online taxi booking platform',
        title: 'Safe, convenient, cheap',
        content: ['Book a taxi online', 'Pay by card', 'Diversified taxi system', 'Quality service', '24/7 support'],
    },
    {
        id: 1,
        url: 'https://images.pexels.com/photos/314374/pexels-photo-314374.jpeg',
        text: 'Professional driver team',
        title: 'Quality taxi service',
        content: [
            'Professional driver team',
            'Enthusiastic driver',
            'Professional driver',
            'Cheap price',
            'Convenient',
        ],
    },
    {
        id: 2,
        url: 'https://images.pexels.com/photos/296492/pexels-photo-296492.jpeg',
        text: 'Diverse taxi system',
        title: 'Book cheap taxi',
        content: ['Diverse taxi system', 'Safe', 'Convenient', '24/7 support', 'Quality service'],
    },
];

export let en_info_content = [
    {
        id: 0,
        title: 'Book a taxi online',
        content: 'Book a taxi online quickly, conveniently, and cheaply. Diverse taxi system, quality service.',
        icon: (
            <BookOnlineOutlinedIcon
                // className={cx('icon_img2')}
                style={en_iconFrame.icon}
            />
        ),
        url: '/book',
    },
    {
        id: 1,
        title: 'Quality service',
        content:
            'Quality taxi service, enthusiastic and professional drivers. We always listen and serve customers best.',
        icon: (
            <SupportAgentOutlinedIcon
                // className={cx('icon_img2')}
                style={en_iconFrame.icon}
            />
        ),
        url: '/book',
    },
    {
        id: 2,
        title: 'No additional fees',
        content: 'We guarantee no additional costs. Prices are fixed and clear. We are always committed.',
        icon: (
            <PriceCheckOutlinedIcon
                // className={cx('icon_img2')}
                style={en_iconFrame.icon}
            />
        ),
        url: '/book',
    },
    {
        id: 3,
        title: 'Inner and outer province routes',
        content: 'Our application makes it easy to book a Taxi. With just a few simple steps, you can book a Taxi.',
        icon: (
            <AddLocationAltOutlinedIcon
                // className={cx('icon_img2')}
                style={en_iconFrame.icon}
            />
        ),
        url: '/book',
    },
];

export let en_info_commit = {
    background: 'https://images.pexels.com/photos/4606338/pexels-photo-4606338.jpeg',
    title: 'We are committed and expect you',
    content: [
        {
            title: 'We are committed',
            content: [
                'Quality, diverse, rich services',
                'Professional, enthusiastic drivers',
                'Competitive prices, no additional fees',
                'Support 24/7, 365 days/year',
                'Safe, convenient, fast',
            ],
        },
        {
            title: 'We expect you',
            content: [
                'Book a car 30 minutes in advance',
                'Pay by card',
                'Rate the service',
                'Call for support',
                'Share information with us',
            ],
        },
    ],
};

export let en_info_feetback = {
    background: 'https://cdn.pixabay.com/photo/2013/07/12/14/16/mail-148102_960_720.png',
    title: 'Customer Reviews',
    content: [
        {
            name: 'Nguyen Van A',
            avatar: 'https://cdn.pixabay.com/photo/2016',
            content: 'I have experienced the service, the driver is very enthusiastic.',
        },

        {
            name: 'Nguyen Van B',
            avatar: 'https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg',
            content:
                'Good service, cheap price, enthusiastic and professional driver. Very satisfied with the company' +
                "'" +
                's service.',
        },
        {
            name: 'Nguyen Van C',
            avatar: 'https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg',
            content: 'I will book a taxi from this company if I have a chance to come back here.',
        },
        {
            name: 'Nguyen Van D',
            avatar: 'https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg',
            content: 'In general, there is nothing to complain about.',
        },
        {
            name: 'Nguyen Van E',
            avatar: 'https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg',
            content: 'I am very satisfied with the taxi service here.',
        },
    ],
};

export let en_title_info = [
    {
        title: 'Book a car easily and quickly anytime, anywhere',
        content:
            'With just a few simple steps on the mobile application, you can easily book a car without having to go out to hail a taxi or make a phone call. We provide a friendly and easy-to-use interface, helping you find the right driver in a snap. No need to wait long, within just a few minutes, the car will pick you up at your door.',
    },
    {
        title: 'A team of professional, friendly drivers',
        content:
            'We are proud to have a team of well-trained drivers who always comply with traffic safety rules and are familiar with the routes in the city. Each driver is carefully selected and undergoes a rigorous testing process, ensuring that they are not only good at driving skills but also friendly, polite and ready to support customers.',
    },
    {
        title: 'High-quality, absolutely safe cars',
        content:
            'Our cars are always maintained and inspected periodically to ensure absolute safety for each trip. You can be completely assured of the quality of the car with clean, airy interiors and modern amenities such as air conditioning, free wifi, phone charging... We are committed to bringing you the most comfortable and relaxing experience.',
    },
    {
        title: 'Transparent, competitive prices',
        content:
            'With us, you don' +
            "'" +
            't need to worry about costs. The fare is clearly displayed on the app right from the time you book, helping you easily manage your budget for the trip. No more worries about being charged high prices or hidden costs! In addition, we often have attractive promotions, helping you save costs while still experiencing the best service.',
    },
    {
        title: '24/7 customer support',
        content:
            'We are always ready to listen and support you 24/7. Whatever the problem is related to the service, our customer care team will help you resolve it quickly and enthusiastically. Your satisfaction is our top goal!',
    },
    {
        title: 'A wide range of vehicles to suit all needs',
        content:
            'We provide a variety of vehicles from 4-seater, 7-seater to luxury cars for family trips, business trips, or airport shuttles. Whatever your needs, we can meet them in the best way.',
    },
    {
        title: '🎁 SPECIAL: Get 20% off your first trip when you call us today! 🎁',
        content:
            'Don' +
            "'" +
            't hesitate, experience the difference with our taxi service. We are committed to bringing you the safest, most convenient and comfortable trips.',
    },
];

export let en_title_part = [
    {
        code: 'home',
        content: [
            {
                title: 'General introduction',
                content: `"TAXIGIARE.COM is a cheap, fast and convenient online taxi booking system. We
        provide quality taxi services, a team of professional drivers, a diverse, safe,
        convenient taxi system and 24/7 support. Book a car today to experience the best service from us."`,
            },
            {
                title: 'Commitment',
                content: '',
            },
            {
                title: 'Learn more',
                content: [
                    {
                        title: 'Information about ',
                        content: 'We are highly appreciated by many customers.',
                    },
                    {
                        title: 'Connect with ',
                        content: '',
                    },
                    {
                        title: 'Daily news',
                        content: 'Our blog provides a lot of useful information for Friend.',
                    },
                ],
            },
        ],
    },
    {
        code: 'about',
        content: [
            {
                title: 'Taxigiare.com',
                content: ['Online taxi booking system', 'Cheap, fast and convenient', './en_background_info.png'],
            },
            {
                title: '🚖 MODERN, FAST, SAFE TAXI BOOKING SERVICE - TOP CHOICE FOR EVERY TRIP! 🚖',
                content: `Are you looking for a reliable, safe and convenient taxi service? Let us help you
        experience great trips with the leading taxi booking service today! With a commitment to bring customers absolute comfort and safety, we are proud to introduce to you our superior taxi service with many outstanding advantages.`,
            },
            {
                title: '🚖 POPULAR SERVICES 🚖',
                content: '',
            },
            {
                title: '🚖 CUSTOMER REVIEWS 🚖',
                content: '',
            },
        ],
    },
];

export let en_call_text = 'Call us now!';

export let en_content_title_footer = [
    {
        title: 'About us',
        content: ['', 'Address', 'Legal representative', 'Email', 'Phone number'],
    },
    {
        title: 'About the developer',
        content: ['aducanha@gmail.com', '0373577867', 'Thu Duc - Ho Chi Minh'],
    },
    {
        title: 'Follow us',
        content: ['Sign up to receive notifications', 'Enter email!'],
    },
];

export let en_service_info = {
    title: 'We created our taxi to help you find the highest quality and most reliable taxi services, anytime, anywhere. We provide online taxi services, making it easy for you. All our drivers are uniformed and fully licensed.',
    content: [
        {
            title: 'Get Address',
            content: 'We always pick up customers on time, ready to serve 24/7.',
        },
        {
            title: 'Airport Pickup',
            content: 'We specialize in providing 24/7 airport pick-up services.',
        },
        {
            title: 'Long Distance',
            content: 'We provide you with long-distance taxi services to anywhere.',
        },
        {
            title: 'Taxi Tours',
            content: 'We provide taxi tours of various durations and complexities.',
        },
    ],
};

export let en_socials = ['https://facebook.com', 'https://instagram.com', 'https://twitter.com', 'https://youtube.com'];
