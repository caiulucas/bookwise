interface BoxProps {
  children?: React.ReactNode;
}

export function Box({ children }: BoxProps) {
  return <div className="container bg-gray-700 rounded-lg p-6">{children}</div>;
}
