import useSWR from 'swr';
const fetcher=async()=>{
    const response=await fetch('http://localhost:4000/dashboard');
    const data=response.json();
    return data;
}
export default function DashboardSWR()
{
    const {data,error}=useSWR('dashboard',fetcher);
    if(error) return 'An error occured'
    if(!data) return 'Loading'
    return(
        <>
            <div>
                <h2>Dashboard Likes - {data.likes}</h2>
                <h2>Dashboard Posts - {data.posts}</h2>
                <h2>Dashboard Followers - {data.followers}</h2>
                <h2>Dashboard Following - {data.following}</h2>
            </div>
        </>
    )
}