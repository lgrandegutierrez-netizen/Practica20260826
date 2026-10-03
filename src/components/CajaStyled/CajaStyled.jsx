import styled from 'styled-components';

// Contenedor estilizado
const ContenedorEspecial = styled.div`
 background-color: #f0f7ff;
 border: 2px dashed #005cc5;
 padding: 20px;
 border-radius: 8px;
 max-width: 448px;
 `;

 //Botón estilizado
 const BotonDinamico = styled.button`
 background-color: #005cc5;
 color: white;
 padding: 8px 16px;
 border: none;
 border-radius: 4px;
 cursor: pointer;
 
 &:hover {
 background-color: #005cc5;
 }
 `;
 
 //Componente React estándar que implimenta los dos componentes de arriba
 export function CajaStyled() {
    return (
        <ContenedorEspecial>
            <BotonDinamico>Acción</BotonDinamico>
        </ContenedorEspecial>
    );
 }