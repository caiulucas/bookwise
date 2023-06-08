import React from 'react';

import Icon from '@/components/Icon';

interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function SearchInput(props: SearchInputProps) {
  return (
    <div
      className="border border-gray-500 rounded-sm px-5 flex items-center
      gap-2 w-full flex-1 focus-within:outline outline-1 outline-green-100"
    >
      <input
        type="text"
        className="bg-transparent placeholder:text-gray-400 w-full h-12
        outline-none peer caret-green-100"
        {...props}
      />
      <button className="text-gray-500 text-xl peer-focus:text-green-100">
        <Icon name="magnifying-glass" />
      </button>
    </div>
  );
}
