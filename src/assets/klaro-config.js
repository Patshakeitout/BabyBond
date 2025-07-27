window.klaroConfig = {
  version: 1,
  elementID: 'klaro',
  lang: 'de',                   // ← zwingt Deutsch
  storageMethod: 'localStorage',
  storageName: 'klaroStates',
  privacyPolicy: '/datenschutz',
  default: false,
  acceptAll: true,
  hideDeclineAll: false,

  translations: {
    de: {
      consentModal: {
        title: 'Wir verwenden Cookies',
        description:
          'Unsere Website nutzt Cookies für verschiedene Zwecke. ' +
          'Du kannst auswählen, welche Kategorien Du erlaubst. ' +
          'Mehr Informationen findest Du in unserer ' +
          '<a href="/datenschutz" target="_blank">Datenschutzerklärung</a>.'
      },
      consentNotice: {
        description:
          'Wir verwenden Cookies, um dir die bestmögliche Erfahrung zu bieten.',
        learnMore: 'Einstellungen anpassen',
        acceptAll: 'Alle akzeptieren',
        declineAll: 'Alle ablehnen'
      },
      services: {
        essential: {
          title: 'Technisch notwendige Cookies',
          description:
            'Diese Cookies sind für den Betrieb der Website erforderlich ' +
            'und können nicht deaktiviert werden.'
        },
        preferences: {
          title: 'Einstellungen speichern',
          description:
            'Speichert Deine Einstellungen, wie Sprache oder Anzeige­präferenzen.'
        },
        analytics: {
          title: 'Statistik (z. B. Google Analytics)',
          description:
            'Hilft uns zu verstehen, wie Besucher unsere Website nutzen, ' +
            'um sie zu verbessern.'
        },
        marketing: {
          title: 'Marketing & Werbung',
          description:
            'Ermöglicht personalisierte Werbung auf Drittanbieter­seiten.'
        }
      }
    }
  },

  services: [
    {
      name: 'essential',
      title: 'Technisch notwendige Cookies',
      purposes: ['essential'],
      default: false,       // ← nicht vorausgewählt
      hideIfNoCookies: false // ← auch anzeigen, wenn noch keine Cookies da sind
      // kein „required: true“ mehr
    },
    {
      name: 'preferences',
      title: 'Einstellungen speichern',
      purposes: ['preference'],
      cookies: [/^lang(_.*)?$/, 'theme']
    },
    {
      name: 'analytics',
      title: 'Statistik (z. B. Google Analytics)',
      purposes: ['analytics'],
      cookies: [/^_ga(_.*)?$/, /^_gid(_.*)?$/, /^_gat(_.*)?$/]
    },
    {
      name: 'marketing',
      title: 'Marketing & Werbung',
      purposes: ['marketing'],
      cookies: [/fbp/, /tr/],
      hideIfNoCookies: false
    }
  ]
};
