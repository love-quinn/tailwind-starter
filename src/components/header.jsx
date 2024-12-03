import {ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <div className="header px-1/2 flex w-full justify-center lg:justify-between lg:px-10 place-self-center border-b-[1px] border-neutral-800 bg-black py-6 text-white">
      <a className="flex gap-2 border-[1px] border-white pe-2" href="/">
        <h6 className="bg-white px-2 text-lg uppercase text-black">Concept</h6>
        <h6 className="text-lg uppercase">Store</h6>
      </a>

      <ShoppingCart className="hidden lg:block"/>
    </div>
  );
};

export default Header;
