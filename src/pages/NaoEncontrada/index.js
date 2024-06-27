import style from './NaoEncontrada.module.css';

function NaoEncontrada(){
    return(
        <section className={StyleSheet.container}>
            <h2>Ops!</h2>
            <p>O conteúdo que você procura não foi encontardo!</p>
        </section>
    )
}

export default NaoEncontrada;