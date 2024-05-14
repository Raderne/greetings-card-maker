const TitleInput = () => {
  return (
    <div className="flex flex-col space-y-2 mt-8">
      <span className="text-lg w-full text-neutral-500">
        Title For Your Greeting Card
      </span>
      <div className="border-2 border-neutral-200 rounded-md w-full  text-center text-neutral-500">
        <input
          type="text"
          className={
            "w-full p-2 outline-none rounded-md focus:ring-2 focus:ring-primary-500"
          }
          placeholder="Enter Title here"
        />
      </div>
    </div>
  );
};

export default TitleInput;
