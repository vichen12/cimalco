# Google Sheets con Apps Script

Esta es la version simple:

- pegas un script en Google Apps Script
- lo despliegas como web app
- me pasas el deployment ID
- el backend del sitio le hace `POST` y listo

## Codigo para Google Apps Script

Pega esto en un proyecto nuevo de Apps Script:

```javascript
const SPREADSHEET_ID = "PEGA_ACA_TU_SPREADSHEET_ID";
const SHEET_NAME = "Consultas";

const HEADERS = [
  "Fecha",
  "Nombre",
  "Email",
  "Telefono",
  "Empresa",
  "Intereses",
  "LineaPreseleccionada",
  "GrupoPreseleccionado",
  "ItemPreseleccionado",
  "Mensaje",
  "Whatsapp",
];

function getSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }

  return sheet;
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return jsonResponse_({ ok: true, message: "Apps Script activo" });
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || "{}");
    const sheet = getSheet_();

    const interests = Array.isArray(data.interests)
      ? data.interests.join(", ")
      : "";

    const whatsapp = data.phone
      ? `https://wa.me/${String(data.phone).replace(/\D/g, "")}`
      : "";

    sheet.appendRow([
      data.createdAt || new Date().toISOString(),
      data.name || "",
      data.email || "",
      data.phone || "",
      data.company || "",
      interests,
      data.line || "",
      data.group || "",
      data.item || "",
      data.message || "",
      whatsapp,
    ]);

    return jsonResponse_({ ok: true });
  } catch (error) {
    return jsonResponse_({
      ok: false,
      error: String(error),
    });
  }
}
```

## Como desplegarlo

Segun la documentacion oficial de Google Apps Script, un web app necesita `doGet(e)` o `doPost(e)` y se despliega desde `Deploy > New deployment`:

- [Web Apps - Apps Script](https://developers.google.com/apps-script/guides/web)

Pasos:

1. Crear el Google Sheet.
2. Copiar el `spreadsheetId` de la URL.
3. Crear un proyecto nuevo de Apps Script.
4. Pegar el codigo.
5. Reemplazar `SPREADSHEET_ID`.
6. Click en `Deploy > New deployment`.
7. Elegir `Web app`.
8. `Execute as`: tu usuario.
9. `Who has access`: `Anyone`.
10. Deploy.
11. Copiar el `deployment ID`.

## Que variable usa el sitio

En el proyecto web se usa:

```env
GOOGLE_APPS_SCRIPT_DEPLOYMENT_ID=tu-deployment-id
```

O directamente:

```env
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/tu-deployment-id/exec
```

## Que hace el backend del sitio

Cuando alguien envia el formulario:

1. valida los datos
2. hace `POST` al Apps Script
3. guarda la fila en Google Sheets
4. manda el mail si SMTP esta configurado
5. abre WhatsApp con el mensaje prellenado

Archivo:

- [route.ts](/C:/Users/viche/Desktop/Cimalco/web/src/app/api/contact/route.ts)
