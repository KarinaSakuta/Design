import React, { Component } from 'react';
import task4Content from './task4Content.json';
import Captions from './assets/img/screen2.jpg';
import Keywords from './assets/img/screen1.jpg';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './style.scss';
import avatarsImg from './assets/img/avatars.jpg';
import sleepImg from './assets/img/sleep.jpg';
import shoppingImg from './assets/img/shopping.jpg';
import businessImg from './assets/img/business.jpg';
import moneyImg from './assets/img/money.jpg';
import Modal from 'react-modal';

const customStyles = {
        content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width: '90vw',
        height: '75%',
    }
};

const TASK_STATE = {
    initial: 'initial',
    editing: 'editing',
    editingFinished: 'editingFinished',
    finalResult: 'finalResult',
};

const IMAGE = {
    0: avatarsImg,
    1: shoppingImg,
    2: sleepImg,
    3: businessImg,
    4: moneyImg,
}

export default class Task4 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpened: false,
            modalImgSrc: null,
        };
    }

    getTaskState() {
        const { finished } = this.props;

        if (!finished) {
            return TASK_STATE.editing;
        }

        if (finished) {
            return TASK_STATE.finalResult;
        }

        throw new Error('Task4: invalid state');
    }

    handleChange = (event, propertyName, key) => {
        const target = event.target;

        const currentValues = this.getCurrentValues();

        currentValues[key][propertyName] = target.value;

        this.props.onChange({
            completed: true,
            result: currentValues,
        });
    }

    getCurrentValues() {
        const { initialValues } = task4Content;
        const { result } = this.props;

        if (this.getTaskState() === TASK_STATE.initial) {
            return { ...task4Content.initialValues };
        }

        return Object.keys(initialValues).reduce((currentValues, key) => {
            const resultCaptions = result && result[key] && result[key].captions;
            const resultWords = result && result[key] && result[key].words;
            const captions = resultCaptions || '';
            const words = resultWords || '';

            return {
                ...currentValues,
                [key]: { captions, words },
            };
        }, {});
    }

    openImageModal = (event) => {
        const target = event.target;
        const src = target.src;
        this.setState({ isModalOpened: true, modalImgSrc: src });
    }

    closeImageModal = (event) => {
        this.setState({ isModalOpened: false, modalImgSrc: null });
    }

    renderImageModal() {
        return (
            <Modal
                isOpen={this.state.isModalOpened}
                style={customStyles}
                contentLabel="onRequestClose Example"
                onRequestClose={this.closeImageModal}
                shouldCloseOnOverlayClick={true}
            >
                <div className="illustration__modal-container">
                    <div className="illustration__modal-img-container">
                        <img 
                            src={this.state.modalImgSrc} 
                            className="illustration__modal-img" 
                            alt="modal"
                        />
                    </div>
                    <div onClick={this.closeImageModal} className="illustration__modal-close-btn" />
                </div>
            </Modal>
        );
    }

    renderTasks() {
        const currentValues = this.getCurrentValues();
        const valuesEntries = Object.entries(currentValues)

        return valuesEntries.map(([key, item]) => {
            const { captions, words } = item;
            const isEditable = this.getTaskState() === TASK_STATE.editing;

            return (
                <div key={key} className="illustration__item">
                    <h3 className="illustration__img-title">{`Картинка ${Number(key) + 1}`}</h3>
                    <div className={`illustration__img-container illustration__img-container_${key}`}>
                        <img 
                            src={IMAGE[key]} 
                            className="illustration__img" 
                            alt="illustration"
                            onClick={this.openImageModal}
                        />
                    </div>
                    <div className="illustration__field-container">
                        <TextField
                            value={captions}
                            onChange={(event) => this.handleChange(event, "captions", key)}
                            InputProps={{
                                readOnly: !isEditable
                            }}
                            label="Введите заголовки"
                            multiline
                            rows={4}
                            rowsMax={30}
                            variant="outlined"
                        />
                        <TextField
                            data-key={key} 
                            data-property-name="words"
                            value={words}
                            onChange={(event) => this.handleChange(event, "words", key)}
                            InputProps={{
                                readOnly: !isEditable
                            }}
                            label="Введите ключевые слова"
                            multiline
                            rows={4}
                            rowsMax={30}
                            variant="outlined"
                        />
                    </div>
                </div>
            );
        });
    }

    renderTitleAndDescription() {
        if (this.getTaskState() === TASK_STATE.finalResult) {
            return (
                <>
                    <div className="illustration__description">
                        <h2 className="illustration__title">{task4Content.title}</h2>
                    </div>
                    {this.props.fResults}
                </>
            );
        }

        return (
            <div className="illustration__container">
                <div className="illustration__description">
                    <h2 className="illustration__title">{task4Content.title}</h2>
                    <p className="illustration__text">{task4Content.description}</p>
                    <p className="illustration__text"><span className="illustration__bold">{task4Content.bold1}</span>{task4Content.text2}</p>
                    <p className="illustration__text"><span className="illustration__bold">{task4Content.bold2}</span>{task4Content.text3}</p>
                    <div className="illustration__text-container">
                        <p className="illustration__text-list">{task4Content.text4}</p>
                        <p className="illustration__text-list illustration__text-list_indent">{task4Content.text5}<a href={task4Content.href} target="_blank" rel="noopener noreferrer">ссылке</a>{task4Content.text6}</p>
                        <p className="illustration__text-list illustration__text-list_indent">{task4Content.text7}</p>
                        <p className="illustration__text-list illustration__text-list_indent">{task4Content.text8}</p>
                    </div>
                    <div className="illustration__screen-container illustration__screen-container_1">
                        <img src={Captions} alt="screen1" className="illustration__img-screen"/>
                    </div>
                    <div className="illustration__text-container">
                        <p className="illustration__text-list illustration__text-list_indent">{task4Content.text9}</p>
                    </div>
                    <div className="illustration__screen-container illustration__screen-container_2">
                        <img src={Keywords} alt="screen2" className="illustration__img-screen"/>
                    </div>
                </div>
                <div className="illustration__task-description">
                    <h2 className="illustration__title-task">Задание</h2>
                    <p className="illustration__text-task">{task4Content.task}</p>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="illustration" style={{marginBottom: this.props.marginBottom}}>
                {this.renderTitleAndDescription()}
                <div className="illustration__form">
                    <div className="illustration__form-container">
                        {this.renderTasks()}
                        {this.renderImageModal()}
                    </div>
                </div>
            </div>
        );
    }
}
