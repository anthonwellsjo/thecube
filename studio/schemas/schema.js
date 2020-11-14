// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import S from '@sanity/desk-tool/structure-builder'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import { brand, colore, fantasia, tessuto, tema, unitaMisura, fit, trapunta, collo, polso, tipoChiusura, manica, tasche, tipoRLA, interno } from './types';
import { piumino } from './pieces';
import { subPiumino } from './subcategories';
import { categoryIconVestiaire, categoryIconAccessories, categoryIconTemi } from './ui';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'Schema',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    ////////////////////////////////////////////////////////////////////////VESTITI

    piumino,
    subPiumino,
    ////////////////////////////////////////////////////////////////////////UI
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
