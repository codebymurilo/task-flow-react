function Button(props) {
  return (
    <button
      {...props}
      className="bg-slate-400 p-2 text-white rounded-md cursor-pointer"
    >
      {props.children}
    </button>
  );
}

export default Button;
