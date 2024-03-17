import { jsPDF } from 'jspdf';

function App() {
  //
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Hello world!', 10, 10);
    doc.save('a4.pdf');
  }
  const renderPDF = () => {
    const doc = new jsPDF();
    doc.addImage('./Ferroscan.jpg', 'JPG', 0, 0, 210, 297);
    doc.text('Hello world!', 35, 25);
    // Crean el PDF de formato para poder de notaria
    
    

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