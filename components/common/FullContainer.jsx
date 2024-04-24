const FullContainer = ({ children, className, style, title, onClick }) => (
  <div
    title={title}
    style={style}
    onClick={onClick}
    className={`flex flex-col w-full items-center justify-center bg-cover bg-center relative ${className}`}
  >
    {children}
  </div>
);

export default FullContainer;
