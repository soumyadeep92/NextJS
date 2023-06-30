import {useState,useEffect} from 'react';
export default function Dashboard()
{
    const [isLoading,setIsLoading]=useState(true);
    const [dataDashboard,setDataDashboard]=useState(null);
    useEffect(()=>{
        async function getDashboardData()
        {
            const response=await fetch('http://localhost:4000/dashboard')
            const data=await response.json();
            setDataDashboard(data);
            setIsLoading(false);
        } 
        getDashboardData()
    },[])
    if(isLoading)
    {
        return(
            <h2>Loading...</h2>
        )
    }
    return(
        <>
            <div>
                <h2>Dashboard Posts: {dataDashboard.posts}</h2>
                <h2>Dashboard Likes: {dataDashboard.likes}</h2>
                <h2>Dashboard Following: {dataDashboard.following}</h2>
                <h2>Dashboard Followers: {dataDashboard.followers}</h2>
            </div>
        </>
    )
}