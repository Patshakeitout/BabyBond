export const NAV_LINKS = [
  {
    title: 'Wer ich bin',
    route: '/wer-ich-bin',
    children: [
      { title: 'Über mich', route: '/wer-ich-bin/ueber-mich' },
      { title: 'Preise', route: '/wer-ich-bin/preise' },
      { title: 'Netzwerk', route: '/wer-ich-bin/netzwerk' }
    ]
  },
  {
    title: 'Was ich mache',
    route: '/beratung',
    children: [
      { title: 'Stillbegleitung', route: '/beratung/stillbegleitung' },
      { title: 'Flaschenernährung', route: '/beratung/formularberatung' },
      { title: 'Beikostberatung', route: '/beratung/beikostberatung' },
      { title: 'Picky Eaters', route: '/beratung/picky-eaters' },
      { title: 'vegane Säuglingsernährung', route: '/beratung/vegan' },
      { title: 'Trageberatung', route: '/beratung/trageberatung' }
    ]
  },
  { title: 'Kontakt', route: '/contact' },
  { title: 'AGB', route: '/gtc' },
  { title: 'Datenschutz', route: '/data-privacy-policy' },
  { title: 'Impressum', route: '/disclaimer' }
];
