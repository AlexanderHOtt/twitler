export function Container({
  children,
  classNames = "",
}: {
  children: React.ReactNode;
  classNames?: string;
}) {
  return (
    <div
      className={`m-auto max-w-xl border-l border-r border-[#2F3336] ${classNames}`}
    >
      {children}
    </div>
  );
}
