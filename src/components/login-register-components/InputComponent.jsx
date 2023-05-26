import Form from 'react-bootstrap/Form';

function InputComponent({ setUser, setUserPassword }) {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="Enter username" onChange={(e) => setUser(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setUserPassword(e.target.value)} />
                <Form.Text className="text-muted">
                    nunca compartiremos tu informacion con ninguna vaca ni oveja.
                </Form.Text>
            </Form.Group>
        </Form>
    )
}

export default InputComponent