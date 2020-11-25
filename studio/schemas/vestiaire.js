export const piumino = {
  name: 'piumino',
  title: 'Piumino',
  type: 'document',
  fields: [
    {
      name: 'frontFullImg',
      title: 'Frontal full size photo',
      type: 'image'
    },
    {
      name: 'rightFullImg',
      title: 'Right side full size photo',
      type: 'image'
    },
    {
      name: 'leftFullImg',
      title: 'Left side full size photo',
      type: 'image'
    },
    {
      name: 'backFullImg',
      title: 'Back full size photo',
      type: 'image'
    },
    {
      name: 'closeupImgs',
      title: 'Closeup photos',
      description: 'Foto dei dettagli, massimo 5.',
      type: 'array',
      of: [{ type: 'image' }],
      validation: Rule => Rule.max(5),
    },
    {
      name: 'CodiceCapo',
      title: 'Codice Capo',
      type: 'string',
    },
    {
      name: 'Sottocategoria',
      title: 'Sottocategoria',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'piuminoSottoCat' }]
        }
      ]
    },
    {
      name: 'Tema',
      title: 'Tema',
      type: 'reference',
      to: [
        { type: 'tema' }
      ]
    },
    {
      name: 'Funzionalita',
      title: 'Funzionalità',
      description: 'Massimo 100 carattere',
      type: 'string',
      validation: Rule => Rule.max(100)
    },

    {
      name: 'Brand',
      title: 'Brand',
      type: 'reference',
      to: [
        { type: 'brand' }
      ]
    },
    {
      name: 'AnnoProd',
      title: 'Anno Produzione',
      type: 'date'
    },
    {
      name: 'Taglia',
      title: 'Numero taglia',
      type: 'number'
    },
    {
      name: 'UnitaMisura',
      title: 'Unita di misura',
      type: 'reference',
      to: [{ type: 'unitaMisura' }]
    },
    {
      name: 'Fit',
      title: 'Fit',
      type: 'reference',
      to: [{ type: 'fit' }]
    },
    {
      name: 'Tessuti',
      title: 'Tessuti',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tessuto' }]
        }
      ]
    },
    {
      name: 'ColoreUnito',
      title: 'Colore Unito?',
      type: 'boolean'
    },
    {
      name: 'Colore',
      title: 'Colore',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'colore' }
          ]
        }
      ]
    },

    {
      name: 'Fantasia',
      title: 'Fantasia',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'fantasia' }
          ]
        }
      ]
    },
    {
      name: 'Fantasiaallover',
      title: 'Fantasia Allover?',
      type: 'boolean'
    },


    {
      title: 'Lunghezza',
      name: 'Lunghezza',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.max(1),
      options: {
        list: [
          { title: 'Corto', value: 'corto' },
          { title: 'Medio', value: 'medio' },
          { title: 'Lungho', value: 'lungho' },
        ]
      },
    },
    {
      title: 'Imbottitura',
      name: 'Imbottitura',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.max(1),
      options: {
        list: [
          { title: 'Leggera', value: 'leggera' },
          { title: 'Media', value: 'media' },
          { title: 'Pesante', value: 'pesante' },
        ]
      },
    },
    {
      name: 'Trapunta',
      title: 'Trapunta',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'trapunta' }]
        }
      ]
    },
    {
      name: 'Collo',
      title: 'Collo',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'collo' }]
        }
      ]
    },
    {
      name: 'Polsi',
      title: 'Polsi',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'polso' }]
        }
      ]
    },
    {
      name: 'TipoChiusura',
      title: 'Tipo di Chiusura',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tipoChiusura' }]
        }
      ]
    },
    {
      name: 'ChiusuraAssimetrica',
      title: 'Chiusura assimetrica',
      type: 'boolean'
    },
    {
      name: 'Colisse',
      title: 'Colisse',
      type: 'boolean'
    },
    {
      title: 'Posizione Colisse',
      name: 'PosColisse',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.max(1),
      options: {
        list: [
          { title: 'Vita', value: 'vita' },
          { title: 'Fondo Corpo', value: 'fondocorpo' },
          { title: 'Fondo Manica', value: 'fondomanica' },
        ]
      },
    },
    {
      name: 'Manica',
      title: 'Manica',
      type: 'reference',
      to: [
        { type: 'manica' }
      ]
    },
    {
      name: 'Tasche',
      title: 'Tasche',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tasche' }]
        }
      ]
    },
    {
      title: 'Ricami / Lavorazioni / Applicazioni',
      name: 'RicamiLavorazioniApplicazioni',
      type: 'boolean'
    },
    {
      title: 'Piazzamento Ricami / Lavorazioni / Applicazioni',
      name: 'PiazzamentoRLA',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.max(1),
      options: {
        list: [
          { title: 'Piazzata', value: 'piazzata' },
          { title: 'Allover', value: 'allover' },
        ]
      },
    },
    {
      title: 'Tipo Ricami / Lavorazioni / Applicazioni',
      name: 'TipoRLA',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tipoRLA' }]
        }
      ]
    },
    {
      title: 'Interno',
      name: 'interno',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'interno' }]
        }
      ]
    },
  ]
};
export const cappotto = {
  name: 'cappotto',
  title: 'Cappotto',
  type: 'document',
  fields: [
    {
      name: 'frontFullImg',
      title: 'Frontal full size photo',
      type: 'image'
    },
    {
      name: 'rightFullImg',
      title: 'Right side full size photo',
      type: 'image'
    },
    {
      name: 'leftFullImg',
      title: 'Left side full size photo',
      type: 'image'
    },
    {
      name: 'backFullImg',
      title: 'Back full size photo',
      type: 'image'
    },
    {
      name: 'closeupImgs',
      title: 'Closeup photos',
      description: 'Foto dei dettagli, massimo 5.',
      type: 'array',
      of: [{ type: 'image' }],
      validation: Rule => Rule.max(5),
    },
    {
      name: 'CodiceCapo',
      title: 'Codice Capo',
      type: 'string',
    },
    {
      name: 'Sottocategoria',
      title: 'Sottocategoria',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'cappottoSottoCat' }]
        }
      ]
    },
    {
      name: 'Tema',
      title: 'Tema',
      type: 'reference',
      to: [
        { type: 'tema' }
      ]
    },
    {
      name: 'Funzionalita',
      title: 'Funzionalità',
      description: 'Massimo 100 carattere',
      type: 'string',
      validation: Rule => Rule.max(100)
    },

    {
      name: 'Brand',
      title: 'Brand',
      type: 'reference',
      to: [
        { type: 'brand' }
      ]
    },
    {
      name: 'AnnoProd',
      title: 'Anno Produzione',
      type: 'date'
    },
    {
      name: 'Taglia',
      title: 'Numero taglia',
      type: 'number'
    },
    {
      name: 'UnitaMisura',
      title: 'Unita di misura',
      type: 'reference',
      to: [{ type: 'unitaMisura' }]
    },
    {
      name: 'Fit',
      title: 'Fit',
      type: 'reference',
      to: [{ type: 'fit' }]
    },
    {
      name: 'Tessuti',
      title: 'Tessuti',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tessuto' }]
        }
      ]
    },
    {
      name: 'ColoreUnito',
      title: 'Colore Unito?',
      type: 'boolean'
    },
    {
      name: 'Colore',
      title: 'Colore',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'colore' }
          ]
        }
      ]
    },

    {
      name: 'Fantasia',
      title: 'Fantasia',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'fantasia' }
          ]
        }
      ]
    },
    {
      name: 'Fantasiaallover',
      title: 'Fantasia Allover?',
      type: 'boolean'
    },


    {
      title: 'Lunghezza',
      name: 'Lunghezza',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.max(1),
      options: {
        list: [
          { title: 'Corto', value: 'corto' },
          { title: 'Medio', value: 'medio' },
          { title: 'Lungho', value: 'lungho' },
        ]
      },
    },
    {
      title: 'Imbottitura',
      name: 'Imbottitura',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.max(1),
      options: {
        list: [
          { title: 'Leggera', value: 'leggera' },
          { title: 'Media', value: 'media' },
          { title: 'Pesante', value: 'pesante' },
        ]
      },
    },
    {
      name: 'Trapunta',
      title: 'Trapunta',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'trapunta' }]
        }
      ]
    },
    {
      name: 'Collo',
      title: 'Collo',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'collo' }]
        }
      ]
    },
    {
      name: 'Polsi',
      title: 'Polsi',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'polso' }]
        }
      ]
    },
    {
      name: 'TipoChiusura',
      title: 'Tipo di Chiusura',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tipoChiusura' }]
        }
      ]
    },
    {
      name: 'ChiusuraAssimetrica',
      title: 'Chiusura assimetrica',
      type: 'boolean'
    },
    {
      name: 'Colisse',
      title: 'Colisse',
      type: 'boolean'
    },
    {
      title: 'Posizione Colisse',
      name: 'PosColisse',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.max(1),
      options: {
        list: [
          { title: 'Vita', value: 'vita' },
          { title: 'Fondo Corpo', value: 'fondocorpo' },
          { title: 'Fondo Manica', value: 'fondomanica' },
        ]
      },
    },
    {
      name: 'Manica',
      title: 'Manica',
      type: 'reference',
      to: [
        { type: 'manica' }
      ]
    },
    {
      name: 'Tasche',
      title: 'Tasche',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tasche' }]
        }
      ]
    },
    {
      title: 'Ricami / Lavorazioni / Applicazioni',
      name: 'RicamiLavorazioniApplicazioni',
      type: 'boolean'
    },
    {
      title: 'Piazzamento Ricami / Lavorazioni / Applicazioni',
      name: 'PiazzamentoRLA',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.max(1),
      options: {
        list: [
          { title: 'Piazzata', value: 'piazzata' },
          { title: 'Allover', value: 'allover' },
        ]
      },
    },
    {
      title: 'Tipo Ricami / Lavorazioni / Applicazioni',
      name: 'TipoRLA',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tipoRLA' }]
        }
      ]
    },
    {
      title: 'Interno',
      name: 'interno',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'interno' }]
        }
      ]
    },
  ]
};
export const giubbotto = {
  name: 'giubbotto',
  title: 'Giubbotto',
  type: 'document',
  fields: [
    {
      name: 'frontFullImg',
      title: 'Frontal full size photo',
      type: 'image'
    },
    {
      name: 'rightFullImg',
      title: 'Right side full size photo',
      type: 'image'
    },
    {
      name: 'leftFullImg',
      title: 'Left side full size photo',
      type: 'image'
    },
    {
      name: 'backFullImg',
      title: 'Back full size photo',
      type: 'image'
    },
    {
      name: 'closeupImgs',
      title: 'Closeup photos',
      description: 'Foto dei dettagli, massimo 5.',
      type: 'array',
      of: [{ type: 'image' }],
      validation: Rule => Rule.max(5),
    },
    {
      name: 'CodiceCapo',
      title: 'Codice Capo',
      type: 'string',
    },
    {
      name: 'Sottocategoria',
      title: 'Sottocategoria',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'giubbottoSottoCat' }]
        }
      ]
    },
    {
      name: 'Tema',
      title: 'Tema',
      type: 'reference',
      to: [
        { type: 'tema' }
      ]
    },
    {
      name: 'Funzionalita',
      title: 'Funzionalità',
      description: 'Massimo 100 carattere',
      type: 'string',
      validation: Rule => Rule.max(100)
    },

    {
      name: 'Brand',
      title: 'Brand',
      type: 'reference',
      to: [
        { type: 'brand' }
      ]
    },
    {
      name: 'AnnoProd',
      title: 'Anno Produzione',
      type: 'date'
    },
    {
      name: 'Taglia',
      title: 'Numero taglia',
      type: 'number'
    },
    {
      name: 'UnitaMisura',
      title: 'Unita di misura',
      type: 'reference',
      to: [{ type: 'unitaMisura' }]
    },
    {
      name: 'Fit',
      title: 'Fit',
      type: 'reference',
      to: [{ type: 'fit' }]
    },
    {
      name: 'Tessuti',
      title: 'Tessuti',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tessuto' }]
        }
      ]
    },
    {
      name: 'ColoreUnito',
      title: 'Colore Unito?',
      type: 'boolean'
    },
    {
      name: 'Colore',
      title: 'Colore',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'colore' }
          ]
        }
      ]
    },

    {
      name: 'Fantasia',
      title: 'Fantasia',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'fantasia' }
          ]
        }
      ]
    },
    {
      name: 'Fantasiaallover',
      title: 'Fantasia Allover?',
      type: 'boolean'
    },


    {
      title: 'Lunghezza',
      name: 'Lunghezza',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.max(1),
      options: {
        list: [
          { title: 'Corto', value: 'corto' },
          { title: 'Medio', value: 'medio' },
          { title: 'Lungho', value: 'lungho' },
        ]
      },
    },
    {
      title: 'Imbottitura',
      name: 'Imbottitura',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.max(1),
      options: {
        list: [
          { title: 'Leggera', value: 'leggera' },
          { title: 'Media', value: 'media' },
          { title: 'Pesante', value: 'pesante' },
        ]
      },
    },
    {
      name: 'Trapunta',
      title: 'Trapunta',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'trapunta' }]
        }
      ]
    },
    {
      name: 'Collo',
      title: 'Collo',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'collo' }]
        }
      ]
    },
    {
      name: 'Polsi',
      title: 'Polsi',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'polso' }]
        }
      ]
    },
    {
      name: 'TipoChiusura',
      title: 'Tipo di Chiusura',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tipoChiusura' }]
        }
      ]
    },
    {
      name: 'ChiusuraAssimetrica',
      title: 'Chiusura assimetrica',
      type: 'boolean'
    },
    {
      name: 'Colisse',
      title: 'Colisse',
      type: 'boolean'
    },
    {
      title: 'Posizione Colisse',
      name: 'PosColisse',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.max(1),
      options: {
        list: [
          { title: 'Vita', value: 'vita' },
          { title: 'Fondo Corpo', value: 'fondocorpo' },
          { title: 'Fondo Manica', value: 'fondomanica' },
        ]
      },
    },
    {
      name: 'Manica',
      title: 'Manica',
      type: 'reference',
      to: [
        { type: 'manica' }
      ]
    },
    {
      name: 'Tasche',
      title: 'Tasche',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tasche' }]
        }
      ]
    },
    {
      title: 'Ricami / Lavorazioni / Applicazioni',
      name: 'RicamiLavorazioniApplicazioni',
      type: 'boolean'
    },
    {
      title: 'Piazzamento Ricami / Lavorazioni / Applicazioni',
      name: 'PiazzamentoRLA',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.max(1),
      options: {
        list: [
          { title: 'Piazzata', value: 'piazzata' },
          { title: 'Allover', value: 'allover' },
        ]
      },
    },
    {
      title: 'Tipo Ricami / Lavorazioni / Applicazioni',
      name: 'TipoRLA',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tipoRLA' }]
        }
      ]
    },
    {
      title: 'Interno',
      name: 'interno',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'interno' }]
        }
      ]
    },
  ]
};
export const giacca = {
  name: 'giacca',
  title: 'Giacca',
  type: 'document',
  fields: [
    {
      name: 'frontFullImg',
      title: 'Frontal full size photo',
      type: 'image'
    },
    {
      name: 'rightFullImg',
      title: 'Right side full size photo',
      type: 'image'
    },
    {
      name: 'leftFullImg',
      title: 'Left side full size photo',
      type: 'image'
    },
    {
      name: 'backFullImg',
      title: 'Back full size photo',
      type: 'image'
    },
    {
      name: 'closeupImgs',
      title: 'Closeup photos',
      description: 'Foto dei dettagli, massimo 5.',
      type: 'array',
      of: [{ type: 'image' }],
      validation: Rule => Rule.max(5),
    },
    {
      name: 'CodiceCapo',
      title: 'Codice Capo',
      type: 'string',
    },
    {
      name: 'Sottocategoria',
      title: 'Sottocategoria',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'giaccaSottoCat' }]
        }
      ]
    },
    {
      name: 'Tema',
      title: 'Tema',
      type: 'reference',
      to: [
        { type: 'tema' }
      ]
    },
    {
      name: 'Funzionalita',
      title: 'Funzionalità',
      description: 'Massimo 100 carattere',
      type: 'string',
      validation: Rule => Rule.max(100)
    },

    {
      name: 'Brand',
      title: 'Brand',
      type: 'reference',
      to: [
        { type: 'brand' }
      ]
    },
    {
      name: 'AnnoProd',
      title: 'Anno Produzione',
      type: 'date'
    },
    {
      name: 'Taglia',
      title: 'Numero taglia',
      type: 'number'
    },
    {
      name: 'UnitaMisura',
      title: 'Unita di misura',
      type: 'reference',
      to: [{ type: 'unitaMisura' }]
    },
    {
      name: 'Fit',
      title: 'Fit',
      type: 'reference',
      to: [{ type: 'fit' }]
    },
    {
      name: 'Tessuti',
      title: 'Tessuti',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tessuto' }]
        }
      ]
    },
    {
      name: 'ColoreUnito',
      title: 'Colore Unito?',
      type: 'boolean'
    },
    {
      name: 'Colore',
      title: 'Colore',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'colore' }
          ]
        }
      ]
    },

    {
      name: 'Fantasia',
      title: 'Fantasia',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'fantasia' }
          ]
        }
      ]
    },
    {
      name: 'Fantasiaallover',
      title: 'Fantasia Allover?',
      type: 'boolean'
    },


    {
      title: 'Lunghezza',
      name: 'Lunghezza',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.max(1),
      options: {
        list: [
          { title: 'Corto', value: 'corto' },
          { title: 'Medio', value: 'medio' },
          { title: 'Lungho', value: 'lungho' },
        ]
      },
    },
    {
      title: 'Imbottitura',
      name: 'Imbottitura',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.max(1),
      options: {
        list: [
          { title: 'Leggera', value: 'leggera' },
          { title: 'Media', value: 'media' },
          { title: 'Pesante', value: 'pesante' },
        ]
      },
    },
    {
      name: 'Trapunta',
      title: 'Trapunta',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'trapunta' }]
        }
      ]
    },
    {
      name: 'Collo',
      title: 'Collo',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'collo' }]
        }
      ]
    },
    {
      name: 'Polsi',
      title: 'Polsi',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'polso' }]
        }
      ]
    },
    {
      name: 'TipoChiusura',
      title: 'Tipo di Chiusura',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tipoChiusura' }]
        }
      ]
    },
    {
      name: 'ChiusuraAssimetrica',
      title: 'Chiusura assimetrica',
      type: 'boolean'
    },
    {
      name: 'Colisse',
      title: 'Colisse',
      type: 'boolean'
    },
    {
      title: 'Posizione Colisse',
      name: 'PosColisse',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.max(1),
      options: {
        list: [
          { title: 'Vita', value: 'vita' },
          { title: 'Fondo Corpo', value: 'fondocorpo' },
          { title: 'Fondo Manica', value: 'fondomanica' },
        ]
      },
    },
    {
      name: 'Manica',
      title: 'Manica',
      type: 'reference',
      to: [
        { type: 'manica' }
      ]
    },
    {
      name: 'Tasche',
      title: 'Tasche',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tasche' }]
        }
      ]
    },
    {
      title: 'Ricami / Lavorazioni / Applicazioni',
      name: 'RicamiLavorazioniApplicazioni',
      type: 'boolean'
    },
    {
      title: 'Piazzamento Ricami / Lavorazioni / Applicazioni',
      name: 'PiazzamentoRLA',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.max(1),
      options: {
        list: [
          { title: 'Piazzata', value: 'piazzata' },
          { title: 'Allover', value: 'allover' },
        ]
      },
    },
    {
      title: 'Tipo Ricami / Lavorazioni / Applicazioni',
      name: 'TipoRLA',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tipoRLA' }]
        }
      ]
    },
    {
      title: 'Interno',
      name: 'interno',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'interno' }]
        }
      ]
    },
  ]
};