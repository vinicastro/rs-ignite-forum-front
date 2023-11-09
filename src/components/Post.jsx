import { useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'


export function Post({author, content, publishedAt }) {
    const [comments, setComments] = useState([
        'Post muito bacana, hein?!'
      ], )

    const [newCommentText, setNewCommentText] = useState('')

    function handleCreateNewComment() {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete)
        setComments(commentsWithoutDeletedOne)
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Este campo é obrigatório')
    }

    const publishedAtFormatted = format(publishedAt, "dd 'de' LLLL 'ás' HH:mm'h'", { locale: ptBR})
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true})
    const isNewCommentEmpty = newCommentText.trim().length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author?.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author?.name}</strong>
                        <p>{author?.role}</p>
                    </div>
                </div>
                <time dateTime={publishedAt.toISOString()} title={publishedAtFormatted}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    }
                    if(line.type === 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
                
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea
                    value={newCommentText}
                    name="newComment" 
                    placeholder='Deixe um comentário'
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
            {comments.map(comment => {
               return (
                <Comment 
                    key={comment} 
                    content={comment}
                    onDeleteComment={deleteComment}
                />)
            })}
            </div>
        </article>
    )
}