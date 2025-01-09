import CategoryIcon from '@mui/icons-material/Category';
import CardWithIcon from "./CardWithIcon";


const GenresDashboard = (props) => {
  const { value } = props;
  return (
    <CardWithIcon
      to="/genres"
      icon={CategoryIcon}
      title={"Genres"}
      subtitle={value}
    />
  );
};

export default GenresDashboard;
