// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import { brand, colore, fantasia, tessuto, tema, unitaMisura, fit, trapunta, collo, polso, tipoChiusura, manica, tasche, tipoRLA, interno } from './types';
import { piumino, cappotto, giubbotto, giacca } from './vestiaire';
import { subPiumino, subCappotto, subGiubbotto, subGiacca } from './subcategoriesVestiaire';
import { scarpe, borsaZainoValigia } from './accessories';
import { subScarpe, subBorsaZainoValigia } from './subcategoriesAccessories'
import { categoryIconVestiaire, categoryIconAccessories, categoryIconTemi } from './DigitalPage';
import { BlogPost } from './LandingPage';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'Schema',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    ////////////////////////////////////////////////////////////////////////VESTIAIRE

    piumino,
    subPiumino,
    cappotto,
    subCappotto,
    giubbotto,
    subGiubbotto,
    giacca,
    subGiacca,

    ////////////////////////////////////////////////////////////////////////ACCESSORI
    scarpe,
    subScarpe,
    borsaZainoValigia,
    subBorsaZainoValigia,

    ////////////////////////////////////////////////////////////////////////LANDING PAGE

    BlogPost,

    ////////////////////////////////////////////////////////////////////////DIGITAL PAGE
    categoryIconVestiaire,
    categoryIconAccessories,
    categoryIconTemi,

    ////////////////////////////////////////////////////////////////////////TYPES

    brand,
    colore,
    fantasia,
    tessuto,
    tema,
    unitaMisura,
    fit,
    trapunta,
    collo,
    polso,
    tipoChiusura,
    manica,
    tasche,
    tipoRLA,
    interno

  ]),

})
