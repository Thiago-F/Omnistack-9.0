import React , {useState , useMemo} from 'react';
import api from '../../services/api'

import './styles.css'

import camera from '../../assets/camera.svg'

export default function New({history}) {

    const [thumbnail , setThumbnail] = useState(null);

    const [company , setCompany] = useState('');
    const [techs , setTechs] = useState('');
    const [price , setPrice] = useState('');

    const preview = useMemo(() => { return thumbnail ? URL.createObjectURL(thumbnail) : null }, [thumbnail])

    async function handleSubmit(e) {
        e.preventDefault();

        const user_id = localStorage.getItem('user');

        const data = new FormData();
        data.append('thumbnail' , thumbnail);
        data.append('company' , company);
        data.append('techs' , techs);
        data.append('price' , price);

        await api.post('/spot', { data } , {
            headers: {user_id}
        })

        history.pushState('/dashboard');
    }

    return (
        <form onSubmit={handleSubmit}>

            <label 
                id="thumbnail" 
                style={{backgroundImage: `url(${preview})`}}
                className={thumbnail ? 'has-thumbnail' : ''}
            >
                <input type="file" onChange={event => setThumbnail(event.target.files[0])}/>
                <img src={camera} alt="Select img"/>
            </label>

            <label htmlFor="company">EMPRESA*</label>
            <input 
                id="company"
                placeholder="Sua empresa incrível"
                value={company}
                onChange={event => setCompany(event.target.value)}
            />

            <label htmlFor="company">TECNOLOGIAS* <span>(separadas por virgula)</span> </label>
            <input 
                id="techs"
                placeholder="Quais tecnologias usam?"
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />

            <label htmlFor="company">VALOR DA DIARIA* <span>(em branco para GRATUITO)</span> </label>
            <input 
                id="price"
                placeholder="Valor cobrado por dia?"
                value={price}
                onChange={event => setPrice(event.target.value)}
            />

            <button type="button" className="btn">Cadastrar</button>
        </form>
    )
}