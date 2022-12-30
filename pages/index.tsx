import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/molecols/Navbar/Navbar";
import Loader from "../components/atoms/loader/Loader";
import CategoryBar from "../components/organism/CategoryBar";
import ProductList from "../components/organism/ProductList";
import Reasearch from "../components/atoms/Reasearch";
import { GetServerSideProps } from "next";
import { Collection } from "../common/types";
//sanity db
import { sanityClient } from "../sanity";

//eth network
import {
  ChainId,
  ThirdwebProvider,
  useContract,
  useActiveListings,
} from "@thirdweb-dev/react";
import ProductListNFT from "../components/organism/ProductListNFT";
import ProductListNewNFT from "../components/organism/ProductListNewNFT";
import Button from "../components/atoms/Button";
import { useRouter } from "next/router";
import ProductListSanity from "../components/organism/ProductListSanity";

//Props per sanity
interface Props {
  marketItems: Collection[];
}
const Home = ({ marketItems }: Props) => {
  //TODO
  //test sanity
  console.log(marketItems);

  //router
  const router = useRouter();
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT,
    "marketplace"
  );

  const { data: listings, isLoading: loadingListing } =
    useActiveListings(contract);

  // console.log(listings);

  return (
    <div className="m-[10px]">
      <Head>
        <title>Winy - Guadagna bevendo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-center items-center p-[20px] h-[20rem] rounded-lg shadow-xl relative">
        <Image
          src={"/img/glassesWine.jpg"}
          alt="photo not upload"
          objectFit="cover"
          layout="fill"
          className="rounded-lg"
        />
        <div className="text-[22px] font-bold text-[white] bg-[#a59f9f4b] p-[10px] drop-shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] rounded-lg relative">
          Acquista il vino e guadagna con la sua identità
        </div>

        <Button
          text="Esplora"
          color="white"
          textColor="black"
          colorHover="#a59f9f4b"
          pageLinkRouter={"/marketplace"}
          relative={"relative"}
        />
      </div>
      <div className="my-[15px]">
        <div className="text-[19px] font-semibold ">
          Scopri i nuovi prodotti
        </div>
        <div className="bg-[white]">
          {/* <ProductList scrollMode="overflow-x-scroll" /> */}
          <ProductListNewNFT scrollMode="overflow-x-scroll" />
        </div>
      </div>
      <div className="my-[15px]">
        <h2 className="text-[19px] font-semibold ">
          Ricerca Il tuo prodotto preferito
        </h2>
        <Reasearch />
      </div>
      <div className="my-[15px]">
        <h2 className="text-[19px] font-semibold animate-pulse text-red-600">
          Pre-ordina, risparmia e guadagna!
        </h2>
        <ProductListNFT />
      </div>
      <div className="my-[15px]">
        <h2 className="text-[19px] font-semibold text-cyan-700">Le novità</h2>

        <ProductListSanity marketItems={marketItems} />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const query = '* [ _type == "marketItems"]';
  const marketItems = await sanityClient.fetch(query);

  if (!marketItems.length) {
    return {
      props: {
        marketItems: [],
      },
    };
  } else {
    return {
      props: {
        marketItems,
      },
    };
  }
};

export default Home;
