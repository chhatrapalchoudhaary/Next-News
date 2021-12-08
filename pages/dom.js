import styles from '../styles/Dom.module.css'


const DOM = ({developer}) => {
    console.log(developer)
    return (
            <div className={styles.main}>
                <h1>Developer of Month</h1>
                <div className={styles.developerOfTheMonth}>
                    <h3>{developer.name}</h3>
                    <h5>{developer.position}</h5>
                    <img src={developer.image} alt={developer.name} />
                    <p>{developer.description}</p>
                </div>
            </div>  
    )
}

export const getServerSideProps = async ()=> {
    const apiResponse = await fetch('https://my-json-server.typicode.com/chhatrapalchoudhaary/Next-News/devOfMonth');

    const developer = await apiResponse.json();

    return {
        props:{
            developer
        }
    }
}

export default DOM
