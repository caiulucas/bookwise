interface AuthorNameProps {
  children: string;
}

export function AuthorName({ children }: AuthorNameProps) {
  return <span className="text-gray-400 text-sm">{children}</span>;
}
