export default function ArticleListByCategory()
{
    return(
        <>
            <h1>List of category wise news for category {category}</h1>
            {articles.map((article)=>{
                return(
                    <div key={article.id}>
                        <h2>
                            {article.id} {article.title}
                        </h2>
                        <hr/>
                        <h3>{article.description}</h3>
                    </div>
                )
            })}
        </>
    )
}
export async function getServerSideProps(context)
{
    const {params,req,res,query}=context;
    console.log(query);
    console.log(req.headers.cookie);
    res.setHeader('Set-Cookie',['name=Vishwas'])
    const {category}=params;
    const response=await fetch(`https://localhost:4000/news/category=${category}`);
    const data=response.json();
    console.log(`Pre-rendering list item for category ${category}`)
    return {
        props:{
            articles:data,
            category,
        },
    }
}