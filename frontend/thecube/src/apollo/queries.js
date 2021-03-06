import { gql } from '@apollo/client';

export const GET_CAROUSEL_ICONS = gql`
query SiteQuery {
  sanityIconiRicercaSitoVestiaire {
    IconiRicercaGiacche {
      asset {
        url
      }
    }
    IconiRicercaGilet {
      asset {
        url
      }
    }
    IconiRicercaGiubbotti {
      asset {
        url
      }
    }
    IconiRicercaMaglieria {
      asset {
        url
      }
    }
    IconiRicercaPiumini {
      asset {
        url
      }
    }
    IconiRicercaCappotti {
      asset {
        url
      }
    }
  }
  sanityIconiRicercaSitoAccessories {
    IconiRicercaBorse {
      asset {
        url
      }
    }
    IconiRicercaCravatte {
      asset {
        url
      }
    }
    IconiRicercaFoulardeSciarpe {
      asset {
        url
      }
    }
    IconiRicercaPapillon {
      asset {
        url
      }
    }
    IconiRicercaScarpe {
      asset {
        url
      }
    }
  }
}

`;
