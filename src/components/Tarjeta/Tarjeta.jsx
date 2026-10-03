// Se importa como un objeto
import styles from './Tarjeta.module.css';

export function Tarjeta() {
    return (
        <div className={styles.caja}>
            <h3 className={styles.titulo}>Título Seguro (Modules)</h3>
            <p>Estilos aislados herméticamente del resto del proyecto.</p>
        </div>
    );
}