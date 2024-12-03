const Header = () => {
  return (
    <div className="header px-1/2 flex w-full justify-center lg:justify-start lg:px-10 place-self-center border-b-[1px] border-neutral-800 bg-black py-6 text-white">
      <div className="flex gap-2 border-[1px] border-white pe-2">
        <h6 className="bg-white px-2 text-lg uppercase text-black">Concept</h6>
        <h6 className="text-lg uppercase">Store</h6>
      </div>
    </div>
  );
};

export default Header;
