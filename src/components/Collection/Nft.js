import React from "react";

const Nft = ({ nft }) => {
  const { image_url, name } = nft;
  return (
    <div>
      <a
        href="/"
        aria-label="View Item"
        className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
      >
        <div className="flex flex-col h-full">
          <img src={image_url} className="object-cover w-full h-48" alt="" />
          <div className="flex-grow border border-t-0 rounded-b">
            <div className="p-5">
              <h6 className="mb-2 font-semibold leading-5">{name}</h6>
              <p className="text-sm text-gray-900">
                Sportacus andrew weatherall goose Refined gentlemen super mario
                des lynam alpha trion zap rowsdower.
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Nft;
