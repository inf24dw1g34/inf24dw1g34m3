import { Datagrid, List, TextField } from 'react-admin';
import { Edit, SimpleForm, TextInput, useRecordContext, Filter, EditButton } from 'react-admin';


const PostFilter = (props) => <Filter {...props}>
    <TextInput label="Search by name" source="name" alwaysOn />
    <TextInput label="Search by nationality" source="nationality" />
</Filter>

const PostTitle = () => {
    const record = useRecordContext();
    return record ? (<span>Author - {`"${record.name}"`}</span>) : null;
}

export const AuthorList = (props) => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="nationality" />
            <EditButton />
        </Datagrid>
    </List>
);

export const AuthorEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="nationality" />
        </SimpleForm>
    </Edit>
);