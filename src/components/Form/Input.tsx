interface inputProps {
  label: string;
  type: string;
  register: any;
  error?: any;
}

const InputField: React.FC<inputProps> = ({ label, type, register, error }) => (
  <div className="mb-[32px]">
    <label className="block text-gray-700 text-body-m font-body mb-xs">
      {label}
    </label>
    <input
      type={type}
      className={`border rounded-[6px] px-xs w-[592px] h-[40px] ${
        error ? "border-red-primary" : "border-gray-primary"
      }`}
      {...register}
    />
    {error && (
      <p className="text-red-primary text-body-m font-body mt-1">
        {error.message}
      </p>
    )}
  </div>
);

export default InputField;
