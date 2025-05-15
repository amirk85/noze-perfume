function BorderedTitle({ title, className }: { title: string, className?: string }) {
  return (
    <div className={`${className}`}>
      <h2 className={`mb-4 sm:mb-6 text-2xl sm:text-4xl font-bold text-gray-100`}>{title}</h2>
      <div className="w-16 sm:w-24 h-1 bg-gray-400 mb-4 sm:mb-6"></div>
    </div>
  );
}

export default BorderedTitle;
