import React from 'react';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
    // renombrar propiedad de la desestructuración
    const { data:images, loading } = useFetchGifs(category);

    return (
        // <Fragment>
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            {/* Si no es true entonces no hace nada */}
            { loading && <p className="animate__animated animate__flash">Cargando...</p> }
            <div className="card-grid">
                {
                    images.map(img => (
                        // Enviar todos las claves de img como props
                        // Para evitar tanta desestructuración
                        <GifGridItem key={ img.id } { ...img } />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};

export default GifGrid;
