import { MYButton, ColorOption } from "../../common";
import Props from "../../../entities/Profile";
import useTheme from "../../../services/Theme";
import useProfile from "../../../hooks/useProfile";

const Settings: React.FC<Props> = ({ tab }) => {
  const { button, label } = useProfile(tab);
  const {
    colors,
    theme: {
      primary: { bgPrimary },
    },
    handleChangeTheme,
  } = useTheme();

  return (
    <form>
      <label className="block text-gray-700 text-body-s font-body mb-xs">
        انتخاب تم
      </label>
      <div className="flex items-center gap-[15px] w-[1482px]">
        {colors.map((color, index) =>
          color.primary.bgPrimary === bgPrimary ? (
            <ColorOption
              color={color.primary.bgPrimary}
              key={index}
              selected={true}
            />
          ) : (
            <ColorOption
              color={color.primary.bgPrimary}
              key={index}
              handleClick={() => handleChangeTheme(index)}
            />
          )
        )}
      </div>
      <MYButton myKey={button} label={label} />
    </form>
  );
};

export default Settings;
