const Canvas = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-fuchsia-300 w-screen h-screen flex flex-wrap md:flex-nowrap justify-center items-center">
      <div className="h-1/12 flex justify-end items-center md:w-1/6">
        <ul>
          <li>Create New Task</li>
          <li>Create New Board</li>
        </ul>
      </div>
      <main className="flex justify-center items-center h-5/6 w-5/6 md:w-5/6">
        <div className="bg-primary-500 w-5/6 h-full rounded-lg"></div>
      </main>
    </div>
  );
};

export default Canvas;
