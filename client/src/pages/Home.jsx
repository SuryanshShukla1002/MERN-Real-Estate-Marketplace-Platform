import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListing, setSaleListing] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  useEffect(() => {
    const fetchOfferListing = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListing();
  }, []);
  return (
    <div>
      {/* Top */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find your next <span className="text-slate-500">perfect</span>
          <br /> place with ease
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          Sahand Estate is the best place to find your next perfect place to
          live
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link
          to={`/search`}
          className="text-xs text-blue-800 sm:text-sm font-bold hover:underline"
        >
          Let's get started
        </Link>
      </div>
      {/* swiper */}

      {/* Listing results for offer, sale and rent */}
    </div>
  );
}
