import { jsPDF } from 'jspdf';

const fecha = new Date().toLocaleDateString();

function App() {
  //
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Hello world!', 10, 10);
    doc.save('a4.pdf');
  }
  const renderPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    var fecha = document.getElementById('fecha').value;
    var fechaObj = new Date(fecha + 'T00:00'); // Asegura que la fecha se interpreta en horario local
    var fechaLarga = fechaObj.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    var ciudad = document.getElementById('ciudad').value;
    if (ciudad === 'otra') {
      ciudad = prompt('Ingrese la ciudad');
    }
    var curaduria = document.getElementById('curaduria').value;
    if (ciudad === 'Mosquera' && curaduria === 'dos') {
      var profesional = 'Abogada';
      var nompro = 'MARIA CRISTINA ARENAS GUEVARA';
      var cur = 'CURADURIA URBANA No. 2';
    }
    
    var nombre = document.getElementById('nombre').value;
    doc.text( ciudad + ', ' + fechaLarga, 25, 25);
    doc.text(profesional, 25, 35);
    doc.setFont('helvetica', 'bold');
    doc.text(nompro, 25, 45);
    doc.setFont('helvetica', 'normal');
    doc.text(cur, 25, 55);
    window.open(doc.output('bloburl'), '_blank');
  }
  return (
    <div>
      <h1 className='text-center text-4xl text-white pt-12'>Generar PDF Poder</h1>
      {/* Ingresar Fecha o usar fecha actual */}
      <div class='block text-center pt-10 text-4xl '>
        <label for='fecha'>Fecha:</label>
        <input type='date' id='fecha' name='fecha' onChange={(e) => setFecha(e.target.value)}></input>
      </div>
      {/* Ingresar a que ciudad va dirigido de una lista y luego preguntar a cual curaduria de esa ciudad */}
      <div class='block text-center pt-10 text-4xl '>
        <label for='ciudad'>Ciudad:</label>
        <select id='ciudad' name='ciudad'>
          <option value='Bogotá'>Bogotá</option>
          <option value='Mosquera'>Mosquera</option>
          <option value='Funza'>Funza</option>
          <option value='Madrid'>Madrid</option>
          <option value='otra'>Otra</option>
        </select>
      </div>
      <div class='block text-center pt-10 text-4xl '>
        <label for='curaduria'>Curaduría:</label>
        <select id='curaduria' name='curaduria'>
          <option value='uno'>Curaduría 1</option>
          <option value='dos'>Curaduría 2</option>
          <option value='tres'>Curaduría 3</option>
          <option value='cuatro'>Curaduría 4</option>
          <option value='cinco'>Curaduría 5</option>
        </select>
      </div>
      {/* Escribir el nombre de quien da el poder */}
      <div class='block text-center pt-10 text-4xl '>
        <label for='nombre'>Nombre:</label>
        <input type='text' id='nombre' name='nombre'></input>
      </div>
      {/* Escoger el tipo de documento de identidad  */}
      <div class='block text-center pt-10 text-4xl '>
        <label for='tipo'>Tipo de documento:</label>
        <select id='tipo' name='tipo'>
          <option value='cc'>Cédula de ciudadanía</option>
          <option value='ce'>Cédula de extranjería</option>
          <option value='ti'>Tarjeta de identidad</option>
          <option value='pasaporte'>Pasaporte</option>
          <option value='nit'>NIT</option>
        </select>
      </div>


      <div class='block text-center pt-10 text-4xl '>
        <button onClick={generatePDF} className=' items-center'>Descargar PDF</button>
      </div>
      <div class='block text-center pt-10 text-4xl '>
        <button onClick={renderPDF} className=' items-center'>Renderizar PDF en el navegador</button>
      </div>
    </div>
  );
}

export default App;