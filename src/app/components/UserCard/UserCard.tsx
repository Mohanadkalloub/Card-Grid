import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TUserCard = {
  label: string;
  value: string | number | [];
  icon: IconDefinition;
};
export default function UserCard({ label, value, icon }: TUserCard) {
  return (
    <div className="bg-gray-100 rounded-md text-center py-5">
      <FontAwesomeIcon icon={icon} />
      <div className="text-sm text-gray-500">{label}</div>
      <div className="font-semibold text-lg">{value}</div>
    </div>
  );
}
