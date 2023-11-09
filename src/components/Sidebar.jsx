import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilLine} from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src='https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=500' 
            />
            <div className={styles.profile}>
                <Avatar src="https://github.com/vinicastro.png" />
                <strong>Vinicius de Castro </strong>
                <span>Software Engineer</span>
            </div>
            <footer>
                <a href="#" >
                    <PencilLine size={20}/>
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    )
    
}