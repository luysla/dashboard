import styled from 'styled-components';
import colors from '../../styles/colors';

const ContainerMenu =  styled.div`

    background-color: ${colors.white};
    position: absolute;
    top: 0;
    height: calc(100% + 3.12rem);
    width: 50px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            width: 1.87rem;
            height: 1.87rem;
            margin-top: 4.37rem;
        }
    }
    

`

export default ContainerMenu;