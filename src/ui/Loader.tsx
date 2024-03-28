export default function Loader({ isMini = false }: { isMini: boolean }) {
  if (isMini)
    return (
      <div className="fixed left-1/2 top-1/4 flex h-52 w-52 -translate-x-1/2 items-center justify-center p-4">
        <div className="spinner"></div>
      </div>
    );

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
}
