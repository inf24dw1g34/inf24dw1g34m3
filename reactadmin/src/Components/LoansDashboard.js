import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import CardWithIcon from "./CardWithIcon";

const LoansDashboard = (props) => {
  const { value } = props;
  return (
    <CardWithIcon
      to="/loans"
      icon={LocalLibraryIcon}
      title={"Loans"}
      subtitle={value}
    />
  );
};

export default LoansDashboard;
