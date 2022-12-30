import React from "react";
import ProductCard from "../ProductCard";
import { PRODOTTI } from "../../../common/costants";
import Link from "next/link";
import Loader from "../../atoms/loader/Loader";
//loading foto
import loadingFoto from "../../../public/img/loading.png";
//web3
import {
  ChainId,
  ThirdwebProvider,
  useContract,
  useActiveListings,
} from "@thirdweb-dev/react";
import ProductCardNFT from "../ProductCardNFT";
//sanity db
// import { sanityClient } from "../../../sanity";
// import { GetServerSideProps } from "next";
import { Collection } from "../../../common/types";

interface TProductList {
  scrollMode?: string;
  justify?: string;
  productId?: string;
  marketItems: Collection[];
}

const ProductListNFT: React.FC<TProductList> = ({
  scrollMode,
  justify,
  marketItems,
}) => {
  //test sanity
  console.log(marketItems);

  //TODO --> SCARICARE IMMAGINE!

  return (
    <div
      className={`flex flex-row my-[10px] items-center ${justify} ${scrollMode}`}
    >
      {!marketItems ? (
        <div>
          <Loader show={true} />
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto">
          {marketItems?.map((listing) => {
            return (
              <div key={listing.id}>
                <ProductCardNFT
                  foto={listing ? listing.bannerImage : loadingFoto}
                  titolo={listing.title}
                  prezzo={listing.floorPrice.toString()}
                  listing={listing.id}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
// export const getServerSideProps: GetServerSideProps = async () => {
//   const query = '* [ _type == "marketItems"]';
//   const marketItems = await sanityClient.fetch(query);

//   if (!marketItems.length) {
//     return {
//       props: {
//         marketItems: [],
//       },
//     };
//   } else {
//     return {
//       props: {
//         marketItems,
//       },
//     };
//   }
// };

export default ProductListNFT;
