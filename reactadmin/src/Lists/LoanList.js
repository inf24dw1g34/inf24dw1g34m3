import { Datagrid, DateField, List, ReferenceField, TextField, EditButton } from 'react-admin';
import { DateInput, Edit, ReferenceInput, SimpleForm, TextInput, useRecordContext, Filter } from 'react-admin';
import { minValue } from 'react-admin';

const PostFilter = (props) => <Filter {...props}>
    <TextInput label="Search by name" source="name" alwaysOn />
    <DateInput source="returnDate" />
</Filter>

const PostTitle = () => {
    const record = useRecordContext();
    return record ? (<span>Member - {`"${record.name}"`}</span>) : null;
}


export const LoanList = (props) => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid>
            <TextField source="id" />
            <DateField source="loanDate" />
            <DateField source="expectedReturnDate" />
            <DateField source="returnDate" />
            <ReferenceField source="bookId" reference="books" />
            <ReferenceField source="memberId" reference="members" />
            <EditButton />
        </Datagrid>
    </List>
);

export const LoanEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <DateInput source="loanDate" />
            <DateInput source="expectedReturnDate" />
            <DateInput source="returnDate" />
            <ReferenceInput source="bookId" reference="books" />
            <ReferenceInput source="memberId" reference="members" />
        </SimpleForm>
    </Edit>
);