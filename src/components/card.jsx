import PropTypes from 'prop-types';

const Card = ({ imageUrl, title, description}) => {
  return (
    <div className="my-6 rounded-lg border-[1px] border-neutral-800 p-4 text-white transition-transform hover:scale-105">
      <img
        className="rounded-lg w-full max-h-72 object-cover"
        src={imageUrl}
        alt={title}
      />

      <div className="mx-2">
        <div className="my-5">
          <h1 className="text-xl">{title}</h1>
          <h3 className="text-xl text-[#6A6A70]">{description}</h3>
        </div>

        <button className="font-regular rounded-lg bg-white px-3 py-2 text-base mb-3 text-black transition-transform hover:bg-white/90">
          Comprar
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
