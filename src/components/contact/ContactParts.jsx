export const Field = ({
  icon,
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) => (
  <div>
    <label
      htmlFor={name}
      className="mb-1 block text-xs font-semibold text-[#071c3d]"
    >
      {label}
    </label>
    <div className="flex items-center gap-3 rounded-lg border border-[#d9d9d9] bg-white px-3 focus-within:border-[#c75c0d]">
      <span className="shrink-0 text-sm text-[#1e293b]">{icon}</span>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-10 w-full bg-transparent text-xs text-[#071c3d] outline-none placeholder:text-[#8a93a0]"
      />
    </div>
  </div>
);

export const Feature = ({ icon, title, sub }) => (
  <div className="flex items-center gap-2 max-sm:flex-col max-sm:items-center max-sm:text-center">
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef3e8] text-base text-[#4f6b39]">
      {icon}
    </div>
    <div>
      <h4 className="text-[11px] font-bold text-[#071c3d]">{title}</h4>
      <p className="mt-0.5 text-[10px] leading-tight text-[#556070]">{sub}</p>
    </div>
  </div>
);

export const Bottom = ({ icon, text }) => (
  <div className="border-[#cfd7c2] px-2 text-center sm:border-r sm:last:border-r-0">
    <div className="mb-1 flex justify-center text-2xl text-[#4f6b39]">
      {icon}
    </div>
    <p className="mx-auto max-w-[90px] text-[11px] font-bold leading-tight text-[#071c3d]">
      {text}
    </p>
  </div>
);
