export default function manifest() {
  return {
    name: 'Nix',
    short_name: 'Nix',
    description: 'Nix - Modern Mac App',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
