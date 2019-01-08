import React, { Component } from "react";
import { Modal, Button, Divider } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { closeModal, openModal } from "./modalActions";

const actions = { closeModal, openModal };

class UnauthModal extends Component {
  handleCloseModal = () => {
    if (this.props.location.pathname.includes("/event")) {
      this.props.closeModal();
    } else {
      this.props.history.goBack();
      this.props.closeModal();
    }
  };

  render() {
    const { openModal } = this.props;
    return (
      <Modal size="mini" open={true} onClose={this.handleCloseModal}>
        <Modal.Header>
          Вы должны войти в систему, чтобы сделать это!
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p>
              Пожалуйста, войдите или зарегистрируйтесь, чтобы увидеть эту
              страницу
            </p>
            <Button.Group widths={4}>
              <Button
                fluid
                color="teal"
                onClick={() => openModal("LoginModal")}
              >
                Вход
              </Button>
              <Button.Or text="или" />
              <Button fluid positive onClick={() => openModal("RegisterModal")}>
                Регистрация
              </Button>
            </Button.Group>
            <Divider />
            <div style={{ textAlign: "center" }}>
              <p>Или нажмите "Отмена", чтобы продолжить как гость</p>
              <Button onClick={this.handleCloseModal}>Отмета</Button>
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default withRouter(
  connect(
    null,
    actions
  )(UnauthModal)
);
