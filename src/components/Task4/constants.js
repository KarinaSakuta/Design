import avatarsImg from './assets/img/avatars.jpg';
import sleepImg from './assets/img/sleep.jpg';
import shoppingImg from './assets/img/shopping.jpg';
import businessImg from './assets/img/business.jpg';
import moneyImg from './assets/img/money.jpg';

export const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width                 : '90vw',
        height                : '75%',
    }
};

export const TASK_STATE = {
    initial: 'initial',
    editing: 'editing',
    editingFinished: 'editingFinished',
    finalResult: 'finalResult',
};

export const IMAGE = {
    0: { src: avatarsImg, orientation: 'vertical' },
    1: { src: shoppingImg, orientation: 'vertical' },
    2: { src: sleepImg, orientation: 'vertical' },
    3: { src: businessImg, orientation: 'horizontal' },
    4: { src: moneyImg, orientation: 'vertical' },
}