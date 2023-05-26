import Form from 'react-bootstrap/Form';

function InputComponent({ setUser, setUserPassword }) {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control type="text" placeholder="Fulanito Mercedez" onChange={(e) => setUser(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="fulanitom@correo.com" onChange={(e) => setUser(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="fulanito123" onChange={(e) => setUserPassword(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Repita contraseña</Form.Label>
                <Form.Control type="password" placeholder="fulanito123" onChange={(e) => setUserPassword(e.target.value)} />
            </Form.Group>
        </Form>
    )
}

export default InputComponent