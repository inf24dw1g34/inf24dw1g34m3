import { Admin, Resource } from "react-admin";
import lb4Provider from "react-admin-lb4";
import { BookList, BookEdit } from "./Lists/BookList"; 
import { GenreEdit, GenreList } from "./Lists/GenreList";
import { AuthorEdit, AuthorList } from "./Lists/AuthorList";
import { MemberEdit, MemberList } from "./Lists/MemberList";
import { LoanList, LoanEdit } from "./Lists/LoanList";
import Dashboard from "./dashboard";
import themes from "./themes";

import BookIcon from '@mui/icons-material/Book';
import CategoryIcon from '@mui/icons-material/Category';
import Person4Icon from '@mui/icons-material/Person4';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const dataProvider = lb4Provider("http://localhost:3000");

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider} {...themes}>
    <Resource name="books" icon={BookIcon} list={BookList} edit={BookEdit} />
    <Resource name="authors" icon={Person4Icon} list={AuthorList} edit={AuthorEdit} />
    <Resource name="genres" icon={CategoryIcon} list={GenreList} edit={GenreEdit} />
    <Resource name="members" icon={PeopleAltIcon} list={MemberList} edit={MemberEdit} />
    <Resource name="loans" icon={LocalLibraryIcon} list={LoanList} edit={LoanEdit} />
  </Admin>
);

export default App;
