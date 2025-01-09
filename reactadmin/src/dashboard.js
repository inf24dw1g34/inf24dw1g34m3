import { Card, CardHeader, CardContent, Stack, Box } from "@mui/material";
import { Title } from "react-admin";
import BooksDashboard from "./Components/BooksDashboard";
import AuthorsDashboard from "./Components/AuthorsDashboard";
import ResourceCount from "./ResourceCount";
import GenresDashboard from "./Components/GenresDashboard";
import MembersDashboard from "./Components/MembersDashboard";
import LoansDashboard from "./Components/LoansDashboard";
import Welcome from "./Components/Welcome";
import Example from "./Components/BarChart";
import { useGetList } from "react-admin";
import { Loading } from "react-admin";


const Dashboard = () => {
    const { booksCount, authorsCount, genresCount, membersCount, loansCount } = ResourceCount();
    const { data: chartData, isPending, error } = useGetList('authors', { pagination: { page: 1, perPage: 100 } });
    if (isPending) { return <Loading />; }
    if (error) { return <p>ERROR</p>; }
    console.log(chartData);
    return (<>
        <Title defaultTitle="Library API" />
        <Welcome />
        <Stack direction="row" gap={2} mt={3}>
            <Box flex={1}>
                <Stack direction="row" spacing={3}>
                    <BooksDashboard value={booksCount} />
                    <AuthorsDashboard value={authorsCount} />
                    <GenresDashboard value={genresCount} />
                </Stack>
            </Box>
        </Stack>
        <Stack direction="row" gap={2} mt={3}>
            <Box flex={1}>
                <Stack direction="row" spacing={3}>
                    <MembersDashboard value={membersCount} />
                    <LoansDashboard value={loansCount} />
                </Stack>
            </Box>
        </Stack>
        <Stack mt={3}>
            <Card>
                <CardHeader title="Bar Chart" />
                <CardContent>
                    <div style={{ width: '100%', height: 300 }}>
                        <Example data={chartData} />
                    </div>
                </CardContent>
            </Card>
        </Stack>

    </>);
};

export default Dashboard;