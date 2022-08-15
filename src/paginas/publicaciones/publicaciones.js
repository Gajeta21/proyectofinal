import './publicaciones.css'
import { Post } from './postear'

export function Publications({posts}){


    return(
        <div className='containerpost'>
            {
                posts.map((post)=>(
                    <Post key={post.creado} post={post}/>
                ))
            }
        </div>
    )
}