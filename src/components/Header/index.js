import LogoHeader from '../../assets/img/icon-dashboard.png';
import ShowDate from '../ShowDate';
import ContainerHeader from './styles';

const Header = () => {
    return (
        <ContainerHeader>
            <div>
                <img src={LogoHeader} alt='logo' />
                <p>Dashboard</p>
            </div>
            <ShowDate />
        </ContainerHeader>
    )
}

export default Header;