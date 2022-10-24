import React, { memo } from "react";
import { useLoaderData } from "react-router-dom";
import Nft from "./Nft";

const Collections = memo(() => {
  const nfts = useLoaderData();
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="text-5xl font-bold mb-10 underline underline-offset-4 text-purple-600">
        NFT, It is a form of digital ledger.
      </h1>
      <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
        {nfts.map((nft) => (
          <Nft nft={nft}></Nft>
        ))}
      </div>
    </div>
  );
});

export default Collections;
