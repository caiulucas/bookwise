interface CategoryProps {
  title: string;
  active?: boolean;
}

export function Category({ title, active = false }: CategoryProps) {
  const variants = {
    active: 'bg-purple-200 text-gray-100',
    inactive:
      'text-purple-100 border border-purple-100 hover:bg-purple-200 hover:text-gray-100'
  };

  return (
    <button
      className={`py-1 px-4 rounded-full ${
        active ? variants.active : variants.inactive
      }`}
    >
      {title}
    </button>
  );
}
