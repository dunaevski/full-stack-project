import React, { Component } from 'react'
import {Segment, Form, Button} from 'semantic-ui-react'

class EventFrom extends Component {
  render() {
    const {handleCancel} = this.props
    return (
      <Segment>
        <Form>
          <Form.Field>
            <label>Название События</label>
            <input placeholder="Имя" />
          </Form.Field>
          <Form.Field>
            <label>Дата</label>
            <input type="date" placeholder="Дата События" />
          </Form.Field>
          <Form.Field>
            <label>Город</label>
            <input placeholder="Город проведения события" />
          </Form.Field>
          <Form.Field>
            <label>Место</label>
            <input placeholder="Введите место события" />
          </Form.Field>
          <Form.Field>
            <label>Организатор</label>
            <input placeholder="Введите имя организатора" />
          </Form.Field>
          <Button positive type="submit">
            Подтвердить
          </Button>
          <Button onClick={handleCancel}type="button" negative>
          Отмена
          </Button>
        </Form>
      </Segment>
    )
  }
}

export default EventFrom 