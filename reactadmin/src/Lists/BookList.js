import { BooleanField, Datagrid, Edit, SimpleForm, BooleanInput, ReferenceInput, List, NumberField, ReferenceField, TextField, EditButton, NumberInput, TextInput, useRecordContext, Filter, SelectInput, NullableBooleanInput } from 'react-admin';
const PostFilter = (props) => <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
    <ReferenceInput label="Genre" source="genreId" reference="genres" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>
    <NullableBooleanInput label="Available" source="available"></NullableBooleanInput>
</Filter>

const PostTitle = () => {
    const record = useRecordContext();
    return record ? (<span>Book - {`"${record.title}"`}</span>) : null;
}

export const BookList = (props) => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid>
            <NumberField source="id" />
            <TextField source="title" />
            <TextField source="publicationYear" />
            <NumberField source="pageCount" />
            <BooleanField source="available" />
            <ReferenceField source="genreId" reference="genres" />
            <EditButton />
        </Datagrid>
    </List>
);

export const BookEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <NumberInput source="id" />
            <TextInput source="title" />
            <TextInput source="publicationYear" />
            <NumberInput source="pageCount" />
            <BooleanInput source="available" />
            <ReferenceInput source="genreId" reference="genres" />
        </SimpleForm>
    </Edit>
);