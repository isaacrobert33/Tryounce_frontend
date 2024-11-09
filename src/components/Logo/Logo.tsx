import { OunceLogo } from "../../assets/svgs/index";
import useAppNavigation from "../../hooks/navigation/useAppNavigation";

export default function Logo() {
  const { navigateToHome } = useAppNavigation();

  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        navigateToHome();
      }}
    >
      <img src={OunceLogo} alt="Ounce Logo" />
    </div>
  );
}
