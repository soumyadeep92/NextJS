import {useState} from 'react';
import {useRouter} from 'next/router';
export default function eventList({eventData})
{
    const [item,setItem]=useState(eventData);
    const fetchSportsEvents=async ()=>{
        const response=await fetch('http://localhost:4000/events?category=sports');
        const data=await response.json();
        const router=useRouter();
        setItem(data);
        router.push('/events?category=sports',undefined,{shallow:true})
    }
    return(
        <>
            <div>
                <button onClick={fetchSportsEvents}>Sports Event</button>
                {item.map((evnt)=>{
                    return(
                        <div>
                            <h2 key={evnt.id}>{evnt.title} {evnt.date} | {evnt.category}</h2>
                            <hr/>
                            <p>{evnt.description}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export async function getServerSideProps(context)
{
    const {query}=context;
    const {category}=query;
    const queryString=category?'category=sports':''
    const response=await fetch(`http://localhost:4000/events?${queryString}`);
    const data=await response.json();
    return{
        props:{
            eventData:data
        }
    }
}
