import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-md bg-black/30"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()} // Prevent modal close when clicking inside
        className="w-full max-w-[600px] max-h-[90vh] bg-white rounded-xl p-6 flex flex-col relative overflow-y-auto shadow-lg"
      >
        {/* Close Button */}
        <button
          className="absolute right-4 top-4 text-red-600 p-2 rounded-full hover:bg-gray-200"
          onClick={onClose}
        >
          <AiOutlineClose className="text-3xl" />
        </button>

        {/* Book Details */}
        <h2 className="w-fit px-4 py-1 bg-red-300 text-white rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500 break-words">{book._id}</h4>

        <div className="flex items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1 font-semibold">{book.title}</h2>
        </div>

        <div className="flex items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>

        {/* Description */}
        <p className="mt-4 font-semibold">About the Book</p>
        <p className="mt-2 text-gray-700">
          This book plunges you into a world where strength is everything, and
          the weak are nothing more than stepping stones for the powerful. The
          protagonist starts as an underdog—mocked, discarded, and left to die.
          But when fate grants them an unfathomable power, they rise, tearing
          through enemies, breaking limits, and ascending to a level beyond
          human comprehension. With each battle, they become a legend, feared by
          gods and monsters alike. Betrayal, bloodshed, and unstoppable ambition
          drive this electrifying story, where every fight is a spectacle, and
          every victory reshapes the world. In the end, only one rule remains—
          <span className="font-bold text-red-500">evolve or die.</span>
        </p>
      </div>
    </div>
  );
};

export default BookModal;
