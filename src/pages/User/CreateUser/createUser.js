import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classNames from 'classnames/bind';
import styles from "./createUser.module.scss"

const cx = classNames.bind(styles)

function CreateUser() {
  return (
    <div className={cx('container')}>
      <h3 className={cx('title')}>Create New User</h3>

      <Form >
        <Form.Group className={cx('common-form')} >
          <Form.Label className={cx('title_input')}>User Name</Form.Label>
          <Form.Control type="text" className={cx('input')} />
        </Form.Group>

        <Form.Group className={cx('common-form')} >
          <Form.Label className={cx('title_input')}>Password</Form.Label>
          <Form.Control type="password" className={cx('input')} />
        </Form.Group>

        <Form.Group className={cx('common-form')} >
          <Form.Label className={cx('title_input')}>First Name</Form.Label>
          <Form.Control type="text" className={cx('input')} />
        </Form.Group>

        <Form.Group className={cx('common-form')} >
          <Form.Label className={cx('title_input')}>Last Name</Form.Label>
          <Form.Control type="text" className={cx('input')} />
        </Form.Group>

        <Form.Group className={cx('common-form')} >
          <Form.Label className={cx('title_input')}>Date of Birth</Form.Label>
          <Form.Control type="date" className={cx('input')} />
        </Form.Group>

        <Form.Group className={cx('common-form')} >
          <Form.Label className={cx('title_input')}>Gender</Form.Label>

          <div key={`gender-radio`} className={cx('input-radio-gender')}>
            <Form.Check
              inline
              label="Male"
              name="gender"
              type="radio"
              id={`gender-radio-1`}
            />
            <Form.Check
              inline
              label="Female"
              name="gender"
              type="radio"
              id={`gender-radio-2`}
            />
          </div>

        </Form.Group>

        <Form.Group className={cx('common-form')} >
          <Form.Label className={cx('title_input')}>Joined Date</Form.Label>
          <Form.Control type="date" className={cx('input')} />
        </Form.Group>

        <Form.Group className={cx('common-form')} >
          <Form.Label className={cx('title_input')}>Type</Form.Label>
          <Form.Control type="text" className={cx('input')} />
        </Form.Group>

        <Form.Group className={cx('common-form')} >
          <Form.Label className={cx('title_input')}>Location</Form.Label>
          <Form.Control type="text" className={cx('input')} />
        </Form.Group>
        
        <div className={cx('button')}>
        <Button variant="danger" type="submit">
          Save
        </Button>

        <Button variant="outline-success" type="submit" className={cx('cancel-button')}>
          Cancel
        </Button>
        </div>
        
      </Form>
    </div>
  );
}

export default CreateUser;
