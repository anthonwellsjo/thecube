// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
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
    },

    ///////////////////////////////////////////////////////////////////////Piumino
    {
      name: 'piuminoSottoCat',
      title: 'Sottocategoria Piumino',
      type: 'document',
      fields: [
        {
          name: 'piuminoSottoCat',
          title: 'Sottocategoria Piumino',
          type: 'string'
        }
      ]
    },






    ////////////////////////////////////////////////////////////////////////Types


    {
      name: 'brand',
      title: 'Brand',
      type: 'document',
      fields: [
        {
          name: 'brand',
          title: 'Brand Name',
          type: 'string'
        }
      ]
    },
    {
      name: 'colore',
      title: 'Colore',
      type: 'document',
      fields: [
        {
          name: 'colore',
          title: 'Colore',
          type: 'string'
        }
      ]
    },
    {
      name: 'fantasia',
      title: 'Fantasia',
      type: 'document',
      fields: [
        {
          name: 'fantasia',
          title: 'Fantasia',
          type: 'string'
        }
      ]
    },
    {
      name: 'tessuto',
      title: 'Tessuto',
      type: 'document',
      fields: [
        {
          name: 'tessuto',
          title: 'Tessuto',
          type: 'string'
        }
      ]
    },
    {
      name: 'tema',
      title: 'Tema',
      type: 'document',
      fields: [
        {
          name: 'tema',
          title: 'Tema',
          type: 'string'
        }
      ]
    },
    {
      name: 'unitaMisura',
      title: 'UnitaMisura',
      type: 'document',
      fields: [{
        name: 'unitaMisura',
        title: 'UnitaMisura',
        type: 'string'
      }
      ]
    },
    {
      name: 'fit',
      title: 'Fit',
      type: 'document',
      fields: [{
        name: 'fit',
        title: 'Fit',
        type: 'string'
      }
      ]
    },
    {
      name: 'trapunta',
      title: 'Trapunta',
      type: 'document',
      fields: [{
        name: 'trapunta',
        title: 'Trapunta',
        type: 'string'
      }
      ]
    },
    {
      name: 'collo',
      title: 'Collo',
      type: 'document',
      fields: [{
        name: 'collo',
        title: 'Collo',
        type: 'string'
      }
      ]
    },
    {
      name: 'polso',
      title: 'Polso',
      type: 'document',
      fields: [{
        name: 'polso',
        title: 'Polso',
        type: 'string'
      }
      ]
    },
    {
      name: 'tipoChiusura',
      title: 'Tipo di Chiusura',
      type: 'document',
      fields: [{
        name: 'tipoChiusura',
        title: 'Tipo di chiusura',
        type: 'string'
      }
      ]
    },
    {
      name: 'manica',
      title: 'Manica',
      type: 'document',
      fields: [{
        name: 'manica',
        title: 'Manica',
        type: 'string'
      }
      ]
    },
    {
      name: 'tasche',
      title: 'Tasche',
      type: 'document',
      fields: [{
        name: 'tasche',
        title: 'Tasche',
        type: 'string'
      }
      ]
    },
    {
      name: 'tipoRLA',
      title: 'TipoRLA',
      type: 'document',
      fields: [{
        name: 'tipoRLA',
        title: 'TipoRLA',
        type: 'string'
      }
      ]
    },
    {
      name: 'interno',
      title: 'Interno',
      type: 'document',
      fields: [{
        name: 'interno',
        title: 'Interno',
        type: 'string'
      }
      ]
    },
  ]),
})
