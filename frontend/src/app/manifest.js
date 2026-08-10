export default function manifest() {
  return {
    name: 'Nix',
    short_name: 'Nix',
    description: 'Nix automatically quits Mac apps when their last window closes. Per-app rules, grace periods, zero telemetry.',
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
