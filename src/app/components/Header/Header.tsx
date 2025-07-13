type THeaderProps = {
  selectedName: string;
};
export default function Header({ selectedName }: THeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 bg-gray-200 text-fuchsia-600 p-5 text-2xl rounded-md">
      <h1>Task Cocktail Digital - Card Grid</h1>
      <div>
        {selectedName ? (
          <h1 className="text-xl font-bold text-fuchsia-600">
            Hi , i am {selectedName}
          </h1>
        ) : (
          <h1 className="text-xl font-bold text-fuchsia-600 ">Name</h1>
        )}
      </div>
    </header>
  );
}
