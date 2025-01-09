import Person4Icon from '@mui/icons-material/Person4';
import CardWithIcon from "./CardWithIcon";


const AuthorsDashboard = (props) => {
  const { value } = props;
  return (
    <CardWithIcon
      to="/authors"
      icon={Person4Icon}
      title={"Authors"}
      subtitle={value}
    />
  );
};

export default AuthorsDashboard;
