import { useState, useEffect } from 'react';
import { Button, Offcanvas, Form, FloatingLabel } from 'react-bootstrap';
import { createPlayer, updatePlayer } from '../../services/api';
import { toast } from 'react-toastify';

const Sidebar = ({ show, handleClose, action, data, handleSave }) => {
  const [player, setPlayer] = useState({
    name: '',
    dorsal: '',
    edad: '',
    nacionalidad: '',
    posicion: '',
    rol: '',
    altura: '',
    peso: '',
    llegada: '',
    image: '',
    partidos_jugados: 0,
    goles: 0,
  });

  useEffect(() => {
    if (action === 'update' && data) {
      setPlayer(data);
    } else if (action === 'create') {
      setPlayer({
        name: '',
        dorsal: '',
        edad: '',
        nacionalidad: '',
        posicion: '',
        rol: '',
        altura: '',
        peso: '',
        llegada: '',
        image: '',
        partidos_jugados: 0,
        goles: 0,
      });
    }
  }, [action, data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (action === 'create') {
        await createPlayer(player);
        toast.success('Jugador creado');
      } else {
        await updatePlayer(player.dorsal, player);
        toast.success('Jugador actualizado');
      }
      handleClose();
      handleSave();
    } catch (error) {
      console.error(error);
      toast.error('Error al guardar jugador');
    }
  };

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          {action === 'create' ? 'Crear nuevo jugador' : `Editar jugador: ${player.name}`}
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form onSubmit={handleSubmit}>
          {[
            { name: 'name', label: 'Nombre' },
            { name: 'dorsal', label: 'Dorsal', type: 'number' },
            { name: 'edad', label: 'Edad', type: 'number' },
            { name: 'nacionalidad', label: 'Nacionalidad' },
            { name: 'rol', label: 'Rol' },
            { name: 'altura', label: 'Altura (cm)', type: 'number' },
            { name: 'peso', label: 'Peso (kg)', type: 'number' },
            { name: 'llegada', label: 'Temporada de llegada', type: 'number' },
            { name: 'image', label: 'URL de imagen', type: 'url' },
            { name: 'partidos_jugados', label: 'Partidos jugados', type: 'number' },
            { name: 'goles', label: 'Goles', type: 'number' },
          ].map((field) => (
            <FloatingLabel
              controlId={field.name}
              label={field.label}
              className="mb-3"
              key={field.name}
            >
              <Form.Control
                type={field.type || 'text'}
                name={field.name}
                value={player[field.name]}
                onChange={handleChange}
                required={field.name !== 'image'}
              />
            </FloatingLabel>
          ))}

          <FloatingLabel controlId="posicion" label="Posición" className="mb-3">
            <Form.Select name="posicion" value={player.posicion} onChange={handleChange} required>
              <option value="">Selecciona posición</option>
              <option value="Portero">Portero</option>
              <option value="Defensa">Defensa</option>
              <option value="Centrocampista">Centrocampista</option>
              <option value="Delantero">Delantero</option>
            </Form.Select>
          </FloatingLabel>

          <Button variant="outline-primary" type="submit">
            {action === 'create' ? 'Crear jugador' : 'Actualizar jugador'}
          </Button>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
