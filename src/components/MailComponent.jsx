export default function MailComponent() {
  return (
    <div className="bg-white text-black p-4 flex items-center gap-8 rounded-lg ">
      <input
        type="text"
        placeholder="Join our mailing list!"
        className=" w-full outline-none"
      />
      <button className="bg-primary p-2 rounded-lg hover:cursor-pointer hover:bg-secondary hover:text-primary duration-300 transition-colors ease-in-out">
        Submit
      </button>
    </div>
  );
}
