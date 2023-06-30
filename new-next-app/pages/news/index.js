function NewsArticleList({ articles })
{
    return(
        <>
            <h1>List of news articles</h1>
            {
                articles.map((article)=>{
                    return(
                        <div key={article.id}>
                            <h2>
                                {article.id} {article.title} | {article.category}
                            </h2>
                        </div>
                    );
                })
            }
        </>
    );
}
export default NewsArticleList;
export async function getServerSideProps()
{
    const response=await fetch("https://localhost:4000/news");
    const data=await response.json();
    console.log('Pre-rendering list items');
    return{
        props:{
            articles:data,
        },
    }
}