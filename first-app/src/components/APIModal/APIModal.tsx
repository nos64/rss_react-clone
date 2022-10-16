import React, { Component } from 'react';
import style from './APIModal.module.scss';

interface IPropsAPI {
  activeModal: boolean;
}

interface IStateAPI {
  activeModal: boolean;
}
export default class APIModal extends Component<IPropsAPI, IStateAPI> {
  constructor(props: IPropsAPI) {
    super(props);
    // this.state = {
    //   activeModal: true,
    // };
  }

  render() {
    return (
      <div
        className={this.state.activeModal ? (style.modal, style.active) : style.modal}
        onClick={() => this.setState({ activeModal: false })}
      >
        <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
          Modal
        </div>
      </div>
    );
  }
}
