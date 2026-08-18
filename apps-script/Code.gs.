const SPREADSHEET_ID = '1TXRmNm_yfdfviZmvtxFdZZVtgKkxrpyaHZOF0tgwPCs';
const SHEET_GID = 197994533;

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheets().find(s => s.getSheetId() === SHEET_GID);
    if (!sheet) throw new Error('No se encontró la pestaña indicada.');
    if (sheet.getLastRow() === 0) sheet.appendRow(['Fecha','Nombre y apellido','Correo','Organización','Rol','Tipo de contacto','Mensaje','Estado']);
    sheet.appendRow([new Date(),data.name,data.email,data.organization,data.role||'',data.interest,data.message,'Nuevo']);
    return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ok:false,error:error.message})).setMimeType(ContentService.MimeType.JSON);
  }
}
