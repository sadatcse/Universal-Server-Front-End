function ViewResponseStat({ children, name, data }) {
  return (
    <div className="flex p-4 space-x-3 rounded-lg border border-neutral-800">
      <div className="flex justify-center p-2 align-middle rounded-lg">
        {children}
      </div>
      <div className="flex flex-col justify-center align-middle">
        <p className="text-3xl font-semibold text-blue-500">{data}</p>
        <p className="capitalize ">{name}</p>
      </div>
    </div>
  );
}

export default ViewResponseStat;
