function BorderedTitle({ title }: { title: string }) {
  return (
    <>
      <h2 className="text-4xl font-bold text-gray-100">{title}</h2>
      <div className="w-24 h-1 bg-gray-400 mb-6"></div>
    </>
  );
}

export default BorderedTitle;
