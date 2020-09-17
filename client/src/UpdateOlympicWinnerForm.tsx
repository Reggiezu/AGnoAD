import React, { useState, FormEventHandler } from 'react';
import { IOlympicWinner } from './interfaces';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface UpdateOlympicWinnerFormProps {
    data: IOlympicWinner
}

const UpdateOlympicWinnerForm = ({ data }: UpdateOlympicWinnerFormProps): React.ReactElement => {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const {
        id,
        athlete,
        age,
        country,
        year,
        date,
        sport,
        gold,
        silver,
        bronze,
        total,
    } = data;


    const [athleteForm, setAthleteForm] = useState<string>(athlete)
    const [ageForm, setAgeForm] = useState<number>(age)
    const [countryForm, setCountryForm] = useState<string>(country)
    const [yearForm, setYearForm] = useState<number>(year)
    const [dateForm, setDateForm] = useState<string>(date)
    const [sportForm, setSportForm] = useState<string>(sport)
    const [goldForm, setGoldForm] = useState<number>(gold)
    const [silverForm, setSilverForm] = useState<number>(silver)
    const [bronzeForm, setBronzeForm] = useState<number>(bronze)
    const [totalForm, setTotalForm] = useState<number>(total)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updatedOlympicWinner: IOlympicWinner = {
            id,
            athlete: athleteForm,
            age: ageForm,
            country: countryForm,
            year: yearForm,
            date: dateForm,
            sport: sportForm,
            gold: goldForm,
            silver: silverForm,
            bronze: bronzeForm,
            total: totalForm,
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Olympic Winner</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">ID</Form.Label>
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue={id} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Athlete</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Athlete name..." value={athleteForm} onChange={e => setAthleteForm(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Age</Form.Label>
                            <Col sm="10">
                                <Form.Control type="number" placeholder="Athlete age..." value={ageForm} onChange={e => setAgeForm(parseInt(e.target.value))} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Country</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Athlete country..." value={countryForm} onChange={e => setCountryForm(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Year</Form.Label>
                            <Col sm="10">
                                <Form.Control type="number" placeholder="Athlete year..." value={yearForm} onChange={e => setYearForm(parseInt(e.target.value))} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Date</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Athlete date..." value={dateForm} onChange={e => setDateForm(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Sport</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Athlete sport..." value={sportForm} onChange={e => setSportForm(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Gold</Form.Label>
                            <Col sm="10">
                                <Form.Control type="number" placeholder="Athlete gold..." value={goldForm} onChange={e => setGoldForm(parseInt(e.target.value))} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Silver</Form.Label>
                            <Col sm="10">
                                <Form.Control type="number" placeholder="Athlete silver..." value={silverForm} onChange={e => setSilverForm(parseInt(e.target.value))} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Bronze</Form.Label>
                            <Col sm="10">
                                <Form.Control type="number" placeholder="Athlete bronze..." value={bronzeForm} onChange={e => setBronzeForm(parseInt(e.target.value))} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Total</Form.Label>
                            <Col sm="10">
                                <Form.Control type="number" placeholder="Athlete total..." value={totalForm} onChange={e => setTotalForm(parseInt(e.target.value))} />
                            </Col>
                        </Form.Group>

                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit">Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateOlympicWinnerForm;