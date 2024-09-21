export default function manifest() {
    return {
        name: 'Taxi Tien Chuyen Daklak',
        short_name: 'Taxi Tien Chuyen Daklak',
        description: 'Taxi Tien Chuyen Daklak giá rẻ, tiện lợi. Chuyên nhận các chuyến xe đường ngắn, đường dài, đi sân bay, bệnh viện, khu vực Buôn Ma Thuột, Đăk Lăk ngoại tỉnh!',
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