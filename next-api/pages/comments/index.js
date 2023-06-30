import {useState} from 'react';
function CommentsPage()
{
    const [data,setData]=useState([]);
    const [comment,setComment]=useState('');
    async function loadData()
    {
        const response=await fetch('/api/comments');
        const data=await response.json()
        setData(data);
    }
    async function submitComment()
    {
        const response=await fetch('/api/comments',{
            method:'POST',
            body:JSON.stringify({comment}),
            headers:{'Content-Type':'application/json',},

        });
        const data=await response.json();
        console.log(data);
    }
    async function deleteComment(id)
    {
        const response=await fetch(`/api/comments/${id}`,{method:'DELETE'});
        const data=await response.json();
        console.log(data);
        loadData();
    }
    return(
        <>
            <input type='text' value={comment} onChange={(e)=>setComment(e.target.value)}/>
            <button onClick={submitComment}>Submit Comment</button>
            <button onClick={loadData}>Load Data</button>
            {data.map((item)=>{
                return (
                    <div key={item.id}>
                        <h2>{item.id} | {item.text}</h2>
                        <button onClick={()=>deleteComment(item.id)}>Delete Comment</button>
                    </div>
                )
            })}
        </>
    )
}
export default CommentsPage;