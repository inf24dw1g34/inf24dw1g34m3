import BookIcon from '@mui/icons-material/Book';
import CardWithIcon from "./CardWithIcon";
import { useGetList } from 'react-admin';

const BooksDashboard = (props) => {
  const { value } = props;
  return (
    <CardWithIcon
      to="/books"
      icon={BookIcon}
      title={"Books"}
      subtitle={value}
    />
  );
};

export default BooksDashboard;
