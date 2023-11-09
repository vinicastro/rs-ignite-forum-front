import {  ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment ({ content, onDeleteComment }) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment()  {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((currentLikes)=> currentLikes +1)
    }


    return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/vinicastro.png" alt='' />
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Vini</strong>
                        <time dateTime='2023-11-05 22:58:00' title='05 de Novemebro às 22:58'>Cerca de 1h atrás</time>
                    </div>
                    <button onClick={handleDeleteComment} title='Deletar comentário'>
                        <Trash size={24}/>
                    </button>
                </header>
                <p>{content}</p>
            </div>
            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Aplaudir<span>{likeCount}</span>
                </button>
            </footer>
        </div>
    </div>
    )
}