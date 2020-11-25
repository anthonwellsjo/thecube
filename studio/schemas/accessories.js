export const scarpe = {
  name: 'scarpe',
  title: 'Scarpe',
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
          to: [{ type: 'scarpeSottoCat' }]
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
export const borsaZainoValigia = {
  name: 'borsaZainoValigia',
  title: 'Borsa/Zaino/Valigia',
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
          to: [{ type: 'borsaZainoValigiaSottoCat' }]
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
