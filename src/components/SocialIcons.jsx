import { PiFacebookLogoThin, PiInstagramLogoThin, PiLinkedinLogoThin, PiPinterestLogoThin, PiTelegramLogoThin, PiTwitterLogoThin } from "react-icons/pi";

const icons = [
  PiTwitterLogoThin,
  PiLinkedinLogoThin,
  PiFacebookLogoThin,
  PiInstagramLogoThin,
  PiPinterestLogoThin,
  PiTelegramLogoThin
]

const SocialIcons = () => {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,48px)] justify-between gap-4 mb-4">
      {
        icons.map(icon => <SocialIcon Icon={icon} />)
      }
    </ul>
  );
}

const SocialIcon = ({Icon}) => {
  return (
    <li>
      <a className="p-2 block rounded-full bg-gray hover:ring-2" href="">
        <Icon className="w-8 h-8 stroke-4" />
      </a>
    </li>
  );
}

export default SocialIcons;