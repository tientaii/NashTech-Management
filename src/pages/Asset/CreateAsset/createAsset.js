import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classNames from 'classnames/bind';
import styles from './createAsset.module.scss';
import { useState } from 'react';
import { useAuthContext } from '../../../context/RequiredAuth/authContext';

const cx = classNames.bind(styles);

function CreateAsset() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [specification, setSpecification] = useState('');
    const [installedDate, setInstalledDate] = useState('');

    const { token } = useAuthContext();

    const handleCreate = async () => {
        try {
            const response = await fetch(`https://nashtech-rookies-hn06-gr06-api.azurewebsites.net/api/Asset`, {
                method: 'POST',

                body: JSON.stringify({
                    assetName: name,
                    categoryId: category,
                    specification: specification,
                    installedDate: installedDate,
                    // state: ,
                }),
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token.token}`,
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            });

            const data = response.json();

            if (data != null) {
            }
        } catch (error) {
            console.log('error');
        }

        return null;
    };

    return (
        <div className={cx('container')}>
            <h3 className={cx('title')}>Create New Asset</h3>

            <Form>
                <Form.Group className={cx('common-form')}>
                    <Form.Label className={cx('title_input')}> Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        className={cx('input')}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className={cx('common-form')}>
                    <Form.Label className={cx('title_input')}>Category</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter category"
                        className={cx('input')}
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className={cx('common-form')}>
                    <Form.Label className={cx('title_input')}> Specification</Form.Label>
                    <textarea
                        cols="40"
                        rows="5"
                        placeholder="Enter specification"
                        className={cx('input-specification')}
                        value={specification}
                        onChange={(e) => setSpecification(e.target.value)}
                    ></textarea>
                </Form.Group>

                <Form.Group className={cx('common-form')}>
                    <Form.Label className={cx('title_input')}>Installed Date</Form.Label>
                    <Form.Control
                        type="date"
                        className={cx('input')}
                        value={installedDate}
                        onChange={(e) => setInstalledDate(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className={cx('common-form')}>
                    <Form.Label className={cx('title_input')}>State</Form.Label>
                    <div key={`gender-radio`} className={cx('input-radio-state')}>
                        <Form.Check label="Available" name="gender" type="radio" />
                        <Form.Check label="Not available" name="gender" type="radio" />
                    </div>
                </Form.Group>

                <div className={cx('button')}>
                    <Button variant="danger" onClick={handleCreate}>
                        Save
                    </Button>

                    <Button variant="outline-success" className={cx('cancel-button')} href="/manageasset">
                        Cancel
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default CreateAsset;
