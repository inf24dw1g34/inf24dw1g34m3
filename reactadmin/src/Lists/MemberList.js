import { Datagrid, DateField, EmailField, List, NumberField, TextField, EditButton } from 'react-admin';
import { DateInput, Edit, SimpleForm, TextInput, useRecordContext, Filter } from 'react-admin';

const PostFilter = (props) => <Filter {...props}>
    <TextInput label="Search by name" source="name" alwaysOn />
</Filter>

const PostTitle = () => {
    const record = useRecordContext();
    return record ? (<span>Member - {`"${record.name}"`}</span>) : null;
}


export const MemberList = (props) => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid>
            <NumberField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <TextField source="address" />
            <DateField source="registrationDate" />
            <EditButton />
        </Datagrid>
    </List>
);

export const MemberEdit = (props) => (
    <Edit  title={<PostTitle />} {...props}>
        <SimpleForm>
            <NumberField source="id" />
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="phone" />
            <TextInput source="address" />
            <DateInput source="registrationDate" />
        </SimpleForm>
    </Edit>
);