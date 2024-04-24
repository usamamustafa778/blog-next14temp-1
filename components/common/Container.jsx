const Container = ({ children, className, style, title, onClick }) => (
  <div
    title={title}
    style={style}
    onClick={onClick}
    className={`w-11/12 xl:w-10/12 flex flex-col items-center justify-center bg-cover bg-center relative ${className}`}
  >
    {children}
  </div>
);

export default Container;
