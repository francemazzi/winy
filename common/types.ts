export interface NewProductType {
  Abbinamenti?: string;
  Description?: string;
  Ingredient?: string;
  disponibile?: string;
  id?: string;
  producer?: string;
  title?: string;
  img?: File;
}

export type cardType = {
  foto: string;
  titolo: string;
  produttore: string;
  categoria: string;
  prezzo: string;
  portate: string;
  linkPage: string;
};
export type cardTypeNFT = {
  foto?: any;
  titolo?: any;
  produttore?: string;
  categoria?: string;
  prezzo?: string;
  portate?: string;
  linkPage?: string;
  listing?: string;
};

export type productPageType = {
  foto: string;
  titolo: string;
  produttore: string;
  categoria: string;
  prezzo: string;
  portate: string;
};

export type buttonType = {
  relative?: string;
  pageLinkRouter?: string;
  text: string;
  textColor: string;
  color: string;
  colorHover: string;
  onClick?: () => void;
};

//sanity db
interface Image {
  asset: {
    url: string;
  };
}

interface RadioObj {
  category: {
    title: string;
    value: string;
  };
}

interface CategoryList {
  list: RadioObj[];
}

export interface Collection {
  title: string;
  contractAddress: string;
  categoryType: CategoryList;
  description: string;
  yearsOld: number;
  createdBy: string;
  volumeTraded: number;
  floorPrice: number;
  owners: [];
  profileImage: Image;
  bannerImage: Image;
  slug: {
    source: string;
  };
  id: string;
}

export interface Creator {
  userName: string;
  walletAddress: string;
  profileImage: Image;
  bannerImage: Image;
  twitterHandle: string;
  igHandle: string;
}
