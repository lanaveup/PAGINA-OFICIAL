# La Nave UP — Vercel + Google Sheets

## 1. Conectar Google Sheets

1. Abre la hoja indicada y entra a **Extensiones → Apps Script**.
2. Reemplaza el contenido de `Code.gs` con el archivo `apps-script/Code.gs` de este proyecto.
3. Presiona **Implementar → Nueva implementación → Aplicación web**.
4. Configura **Ejecutar como: Yo** y acceso para **Cualquier usuario**.
5. Autoriza y copia la URL terminada en `/exec`.

## 2. Subir a Vercel

1. Importa esta carpeta o súbela a un repositorio de GitHub.
2. En Vercel, agrega la variable de entorno `GOOGLE_APPS_SCRIPT_URL` con la URL `/exec`.
3. Vuelve a desplegar el proyecto.

Las respuestas se guardarán en el spreadsheet `1TXRmNm_yfdfviZmvtxFdZZVtgKkxrpyaHZOF0tgwPCs`, pestaña con gid `197994533`.
