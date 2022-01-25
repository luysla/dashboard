import ContainerMenu from './styles';
import logoHome from '../../assets/img/icon-dashboard-menu.png';
import logoTask from '../../assets/img/icon-tasks.png';
import logoCalendar from '../../assets/img/icon-calendar.png';

const Menu = () => {
    return (
        <ContainerMenu>
            <div>
                <img src={logoHome} alt='Logo da página inicial' />
                <img src={logoTask} alt='Logo da página de tarefas' />
                <img src={logoCalendar} alt='Logo da página de eventos' />
            </div>
        </ContainerMenu>
    )
}

export default Menu;