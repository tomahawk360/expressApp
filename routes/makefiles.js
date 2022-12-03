async function downloadCSV(data) {
    const arch = document.createElement('a');
    arch.href = 'data:text/csv;charset=utf-8,' + encodeURI(data);
    arch.download = "Comportamiento de datos en el tiempo.csv";
    arch.click();
}

async function downloadPDF(data) {
    const arch = document.createElement('a');
    arch.href = `data:application/pdf;base64,${data}`;
    arch.donwload = "Comportamiento de datos en el tiempo.pdf";
    arch.click();
}

module.exports = { downloadCSV, downloadPDF };