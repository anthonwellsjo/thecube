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
                .title('Digital Space')
                .child(
                  S.list()
                    .title('Digital Space')
                    .items([
                      S.listItem()
                        .title('Iconi Ricerca Vestiaire')
                        .child(
                          S.editor()
                            .title('Iconi Ricerca Vestiaire')
                            .schemaType('IconiRicercaSitoVestiaire')
                            .documentId('IconiRicercaSitoVestiaire')
                        ),
                      S.listItem()
                        .title('Iconi Ricerca Accessori')
                        .child(
                          S.editor()
                            .title('Iconi Ricerca Accessori')
                            .schemaType('IconiRicercaSitoAccessories')
                            .documentId('IconiRicercaSitoAccessories')),
                      S.listItem()
                        .title('Iconi Ricerca Temi')
                        .child(
                          S.editor()
                            .title('Iconi Ricerca Temi')
                            .schemaType('IconiRicercaSitoTemi')
                            .documentId('IconiRicercaSitoTemi')),
                    ])
                )
              ,
              S.listItem()
                .title('Landing Page')
                .child(
                  S.list()
                    .title('Landing Page')
                    .items([
                      S.listItem()
                        .title('Blog Posts')
                        .schemaType('BlogPost')
                        .child(S.documentTypeList('BlogPost').title('Blog Posts')),
                    ])
                )
              ,
            ])
        ),
      S.listItem()
        .title('Capi')
        .child(
          S.list()
            .title('Capi')
            .items([
              S.listItem()
                .title('Vestiaire')
                .child(
                  S.list()
                    .title('Vestiaire')
                    .items([
                      S.listItem()
                        .title('Piumini')
                        .schemaType('piumino')
                        .child(S.documentTypeList('piumino').title('Piumini')),
                      S.listItem()
                        .title('Cappotti')
                        .schemaType('cappotto')
                        .child(S.documentTypeList('cappotto').title('Cappotti')),
                      S.listItem()
                        .title('Giubbotti')
                        .schemaType('giubbotto')
                        .child(S.documentTypeList('giubbotto').title('Giubbotti')),
                      S.listItem()
                        .title('Giacche')
                        .schemaType('giacca')
                        .child(S.documentTypeList('giacca').title('Giacche')),
                    ])
                ),
              S.listItem()
                .title('Accessori')
                .child(
                  S.list()
                    .title('Accessori')
                    .items([
                      S.listItem()
                        .title('Scarpe')
                        .schemaType('scarpe')
                        .child(S.documentTypeList('scarpe').title('Scarpe')),
                      S.listItem()
                        .title('Borse/Zaini/Valigie')
                        .schemaType('borsaZainoValigia')
                        .child(S.documentTypeList('borsaZainoValigia').title('Borse/Zaini/Valigie')),
                    ])
                )
            ])
        )
      ,
      S.listItem()
        .title('Attributi')
        .child(
          S.list()
            .title('Attributi')
            .items([
              S.listItem()
                .title('Sottocategorie Capi')
                .child(
                  S.list()
                    .title('Sottocategorie Capi')
                    .items([
                      S.listItem()
                        .title('Vestiaire')
                        .child(
                          S.list()
                            .title('Sottocategorie Vestiaire')
                            .items([
                              S.listItem()
                                .title('Piumini')
                                .schemaType('piuminoSottoCat')
                                .child(S.documentTypeList('piuminoSottoCat').title('Sottocategorie Piumini')),
                              S.listItem()
                                .title('Cappotti')
                                .schemaType('cappottoSottoCat')
                                .child(S.documentTypeList('cappottoSottoCat').title('Sottocategorie Cappotti')),
                              S.listItem()
                                .title('Giubbotti')
                                .schemaType('giubbottoSottoCat')
                                .child(S.documentTypeList('giubbottoSottoCat').title('Sottocategorie Giubbotti')),
                              S.listItem()
                                .title('Giacche')
                                .schemaType('giaccaSottoCat')
                                .child(S.documentTypeList('giaccaSottoCat').title('Sottocategorie Giacche')),
                            ])
                        ),
                      S.listItem()
                        .title('Accessori')
                        .child(
                          S.list()
                            .title('Sottocategorie Accessori')
                            .items([
                              S.listItem()
                                .title('Scarpe')
                                .schemaType('scarpeSottoCat')
                                .child(S.documentTypeList('scarpeSottoCat').title('Sottocategorie Scarpe')),
                              S.listItem()
                                .title('Borse/Zaini/Valigie')
                                .schemaType('borsaZainoValigiaSottoCat')
                                .child(S.documentTypeList('borsaZainoValigiaSottoCat').title('Sottocategorie Borse/Zaini/Valigie')),
                            ])
                        )
                    ])
                ),
              S.listItem()
                .title('Proprietá')
                .child(
                  S.list()
                    .title('Proprietá')
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
                )

            ])
        ),
      S.listItem()
        .title('TUTTO')
        .child(
          S.list()
            .title('Content')
            .items(
              S.documentTypeListItems()
            )

        )
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