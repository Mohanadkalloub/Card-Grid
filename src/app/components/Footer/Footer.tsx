type TFooterProps = {
  selectedName: string;
};

export default function Footer({ selectedName }: TFooterProps) {
  return (
    <footer className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 rounded-md bg-gray-200 text-fuchsia-600 p-5 text-2xl">
      <h1>Test Card Grid - Cocktail Digital</h1>
      <div>
        {selectedName ? (
          <h1 className="text-xl font-bold text-fuchsia-600">
            Hi , i am {selectedName}
          </h1>
        ) : (
          <h1 className="text-xl font-bold text-fuchsia-600">Name</h1>
        )}
      </div>
    </footer>
  );
}
