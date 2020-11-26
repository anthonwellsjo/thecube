import { gql } from '@apollo/client';

export const GET_ICONS_VESTIAIRE = gql`
query SiteQuery {
  sanityIconiRicercaSitoVestiaire {
    IconiRicercaCappotti {
      asset {
        url
      }
    }
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
  }
}
`;