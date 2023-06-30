import Head from 'next/head';
export default function Blog(){
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name='blog' content={dexcription}/>
            </Head>
            <h1 className='content'>Article</h1>
        </>
    )
}
export async function getServerSideProps(){
    return{
        props:{
            title:'Article Title',
            description:'Article Description'
        }
    }
}