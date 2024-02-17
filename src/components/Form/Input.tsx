interface inputProps {
  label: string;
  type: string;
  register: any;
  error?: any;
}

const InputField: React.FC<inputProps> = ({ label, type, register, error }) => (
  <div className="mt-m">
    {type === "checkbox" ? (
      <div className="mb-[20px]">
        <input type="checkbox" id="terms" {...register} />
        <label
          htmlFor="terms"
          className="ml-2 mb-2 text-sm font-bold text-gray-700"
        >
          {" "}
          {label}
        </label>
        {error && (
          <p className="text-red-primary text-body-m font-body mt-1">
            {error.message}
          </p>
        )}
      </div>
    ) : (
      <div className="mt-l">
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
    )}
  </div>
);

export default InputField;
