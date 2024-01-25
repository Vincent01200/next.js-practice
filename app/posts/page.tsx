import styles from "../posts/postsPage.module.css"
import CardLists from "../components/CardLists"
import ViewButtonUser from "../components/ViewButtonUser"
import { Children } from "react"

const baseUrl = "https://jsonplaceholder.typicode.com/posts"

interface Iposts {
    userId: number,
    id: number,
    title: string,
    body: string,
}

const Posts = async() => {
    const response = await fetch(baseUrl, {
        cache : "no-store"
    })
    const posts: Iposts[] = await response.json()

    return (
        <>
            <p >{new Date(). toLocaleTimeString()}</p>
            <h1 className={styles.h1wp}>Postingan Pages</h1>

            {posts.map ((post) => {
                return(
                    <CardLists key="{post.id}">
                        <div className={styles.card}>
                            <p className={styles.id}>ID : {post.id}</p>
                            <p className={styles.id}>Title : {post.title}</p>
                            <p className={styles.id}>Body : {post.body}</p>

                            <div className={styles.button}>
                                <ViewButtonUser userId={post.userId} />
                            </div>
                            
                        </div>
                        
                    </CardLists>
                )
            }
            )
            }
            
        </> 
    )
}

export default Posts