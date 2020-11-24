import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Contenuti')
    .items([
      S.listItem()
        .title('Design Sito')
        .child(
          S.list()
            .title('Design Sito')
            .items([
              S.listItem()
                .title('Iconi Ricerca Sito Vestiaire')
                .schemaType('IconiRicercaSitoVestiaire')
                .child(S.documentTypeList('IconiRicercaSitoVestiaire').title('Iconi Ricerca Sito Vestiaire')),
              S.listItem()
                .title('Iconi Ricerca Sito Accessori')
                .schemaType('IconiRicercaSitoAccessories')
                .child(S.documentTypeList('IconiRicercaSitoAccessories').title('Iconi Ricerca Sito Accessori')),
              S.listItem()
                .title('Iconi Ricerca Sito Temi')
                .schemaType('IconiRicercaSitoTemi')
                .child(S.documentTypeList('IconiRicercaSitoTemi').title('Iconi Ricerca Sito Temi')),
            ])
        ),
      S.listItem()
        .title('Capi')
        .child(
          S.list()
            .title('Vestiaire')
            .items([
              S.listItem()
                .title('Piumini')
                .schemaType('piumino')
                .child(S.documentTypeList('piumino').title('Piumini'))]
            )
        ),
      S.listItem()
        .title('Proprietà')
        .child(
          S.list()
            .title('Proprietà')
            .items([
              S.listItem()
                .title('Brands')
                .schemaType('brand')
                .child(S.documentTypeList('brand').title('Brands')),
              S.listItem()
                .title('Colori')
                .schemaType('colore')
                .child(S.documentTypeList('colore').title('Colori')),
              S.listItem()
                .title('Fantasie')
                .schemaType('fantasia')
                .child(S.documentTypeList('fantasia').title('Fantasie')),
              S.listItem()
                .title('Tessuti')
                .schemaType('tessuto')
                .child(S.documentTypeList('tessuto').title('Tessuti')),
              S.listItem()
                .title('Temi')
                .schemaType('tema')
                .child(S.documentTypeList('tema').title('Temi')),
              S.listItem()
                .title('Unitá di misure')
                .schemaType('unitaMisura')
                .child(S.documentTypeList('unitaMisura').title('Unitá di misure')),
              S.listItem()
                .title('Fit')
                .schemaType('fit')
                .child(S.documentTypeList('fit').title('Fit')),
              S.listItem()
                .title('Tipo di Trapunta')
                .schemaType('trapunta')
                .child(S.documentTypeList('trapunta').title('Tipo di Trapunta')),
              S.listItem()
                .title('Colli')
                .schemaType('collo')
                .child(S.documentTypeList('collo').title('Colli')),
              S.listItem()
                .title('Polsi')
                .schemaType('polso')
                .child(S.documentTypeList('polso').title('Polsi')),
              S.listItem()
                .title('Tipo di Chiusura')
                .schemaType('tipoChiusura')
                .child(S.documentTypeList('tipoChiusura').title('Tipo di Chiusura')),
              S.listItem()
                .title('Maniche')
                .schemaType('manica')
                .child(S.documentTypeList('manica').title('Maniche')),
              S.listItem()
                .title('Tasche')
                .schemaType('tasche')
                .child(S.documentTypeList('tasche').title('Tasche')),
              S.listItem()
                .title('RICAMI/LAVORAZIONI/APPLICAZIONI')
                .schemaType('tipoRLA')
                .child(S.documentTypeList('tipoRLA').title('RICAMI/LAVORAZIONI/APPLICAZIONI:')),
              S.listItem()
                .title('Interni')
                .schemaType('interno')
                .child(S.documentTypeList('interno').title('Interni')),
            ])
        ),
      // S.listItem()
      //   .title('Persons')
      //   .schemaType('person')
      //   .child(S.documentTypeList('person').title('Persons')),
      // ...S.documentTypeListItems().filter(
      //   listItem =>
      //     !['siteSettings', 'sampleProject', 'category', 'person'].includes(
      //       listItem.getId()
      //     )
      // )
    ])