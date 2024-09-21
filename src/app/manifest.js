export default function manifest() {
    return {
        name: 'Taxi Buôn Ma Thuột',
        short_name: 'Taxi Buôn Ma Thuột',
        description: 'Đặt taxi Buôn Ma Thuột giá rẻ, tiện lợi. Đặt 5 phút sau tài xế có mặt ngay',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}