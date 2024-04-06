import CancelIcon from '@mui/icons-material/Cancel';
import { TModalWarningProps } from '../../../types/types';

const ModalWarning = ({ isOpen, onClose }: TModalWarningProps) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="close-container">
                    <CancelIcon className='close' onClick={onClose} />
                </div>
                <div className="text-content">
                    <h2>Bem-vindo(a) à versão beta do <span>SquadUp</span>!</h2>
                    <div className="texts">
                        <p>
                            Este projeto tem como objetivo demonstrar habilidades técnicas. Algumas funcionalidades estão bloqueadas ou limitadas:
                        </p>
                        <p>
                            Não é possível editar ou excluir talentos antigos. Isso é necessário para demonstrar recursos como paginação, filtragem por e-mail e stack.
                        </p>
                        <p>
                            Há um rate-limit para limitar as requisições por segundo. Por favor, proceda com calma.
                        </p>
                        <p>
                            Para proteger o servidor, rotas como Post e Patch têm um limite de 10kb no corpo da requisição, então você não poderá salvar strings longas.
                        </p>
                        <p>
                            Também há um limite de, no máximo, 100 novos registros por hora para evitar sobrecarregas.
                        </p>
                        <p>
                            E ainda, há exclusão agendada de novos registros nos horários: 0hrs, 6hrs, 12hrs e 18hrs.
                        </p>
                        <p>
                            Você ainda pode criar, atualizar e deletar novos talentos, mas evite nomes impróprios ao salvá-los.
                        </p>
                        <p>
                            Sinta-se à vontade para explorar os recursos disponíveis!
                        </p>
                    </div>
                </div>
                <button onClick={onClose} className='confirm-btn'>Ok</button>
            </div>
        </div>
    );
};

export default ModalWarning;