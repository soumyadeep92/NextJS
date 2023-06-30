import Link from 'next/link';
export default function PostList({posts})
{
    return(
        <>
            <div>List of Posts</div>
            {posts.map(post=>{
                return(
                    <div key={post.id}>
                        <Link href={`posts/${post.id}`} passHref>
                            <p>{post.id}</p></Link>
                            <p>{post.title}</p>
                    </div>)
                }
            )}
        </>
    )
}
export async function getStaticProps()
{
    const response=await fetch('https://jsonplaceholder.typicode.com/posts');
    const data=await response.json();
    return{
        props:{
            posts:data.slice(0,3)
        }
    }
}