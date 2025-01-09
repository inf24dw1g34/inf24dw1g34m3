import { Datagrid, Edit, SimpleForm, List, NumberField, TextField, EditButton, NumberInput, TextInput, useRecordContext, Filter } from 'react-admin';

const PostFilter = (props) => <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
</Filter>

const PostTitle = () => {
    const record = useRecordContext();
    return record ? (<span>Genre - {`"${record.title}"`}</span>) : null;
}

export const GenreList = (props) => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="name" />
            <EditButton />
        </Datagrid>
    </List>
);

export const GenreEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <NumberInput source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);