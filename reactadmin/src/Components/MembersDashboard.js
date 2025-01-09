import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CardWithIcon from "./CardWithIcon";

const MembersDashboard = (props) => {
  const { value } = props;
  return (
    <CardWithIcon
      to="/members"
      icon={PeopleAltIcon}
      title={"Members"}
      subtitle={value}
    />
  );
};

export default MembersDashboard;
