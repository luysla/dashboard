import { Link } from 'react-router-dom';  
import { pages } from '../../routes/routes';

import ContainerMenu from './styles';

const Menu = () => {
    return (
        <ContainerMenu>
            { pages &&

                pages.map(item => {
                    return (
                        <Link
                            key={item.path}
                            to={{
                                pathname: item.path,
                                state: { name: item.name, }
                            }}
                        >
                            <img 
                                src={item.icon} 
                                alt={item.name}  
                            />
                        </Link>
                    )
                })

            }
        </ContainerMenu>
    )
}

export default Menu;