# 💰 Alke Wallet  
Proyecto educativo de billetera digital desarrollado con **HTML, CSS, JavaScript y jQuery**.  
Permite iniciar sesión, agregar contactos, enviar dinero, hacer depósitos y visualizar movimientos, todo usando **LocalStorage**.

---

## 🚀 Funcionalidades principales

### 🔑 Autenticación
- Inicio de sesión con credenciales fijas:
  - **Email:** admin@admin.com  
  - **Pass:** Python2026  
- Protección de rutas: no permite acceder sin login.
- Cierre de sesión.

### 👤 Contactos
- Agregar contactos por nombre.
- Listado dinámico almacenado en LocalStorage.
- Uso de contactos en la sección *Enviar Dinero*.

### 💵 Depósitos
- Permite aumentar el saldo de la cuenta.
- Registro automático de transacciones.

### 📤 Enviar dinero
- Selección de un contacto guardado.
- Validación de saldo suficiente.
- Registro del movimiento con nombre del destinatario.

### 📋 Movimientos
- Muestra depósitos y envíos.
- Detalla a quién se envió o desde quién se registró un movimiento.
- Valores positivos en verde y negativos en rojo.

---

## 🗂️ Estructura del proyecto

alke-wallet/
├── index.html
├── login.html
├── menu.html
├── deposit.html
├── sendmoney.html
├── transactions.html
├── contacts.html
├── css/
│ └── styles.css
├── js/
│ ├── auth.js
│ ├── wallet.js
│ └── ui.js
└── README.mds


---

## 🔥 Funcionalidades
### ✔ Login
Validación simple utilizando LocalStorage.

### ✔ Depósitos
Permite ingresar un monto que aumenta el saldo total.

### ✔ Envío de dinero
Seleccionas un contacto y envías un monto (si tienes suficiente saldo).

### ✔ Movimientos
Lista de transacciones con:
- Tipo (Depósito / Envío)
- Monto
- Destinatario

### ✔ Contactos
Permite agregar contactos y usarlos como destinatarios.

---

## 🧪 Cómo ejecutarlo
Simplemente abre **index.html** en tu navegador.

---

## 🧩 Gestión de Git y GitHub

Ramas utilizadas:
- `main` → código estable
- `feature/login`
- `feature/depositos`
- `feature/transacciones`

Cada rama incluye su propia funcionalidad y fue integrada mediante Pull Requests.

---

## 👤 Autor
Bastián Bachmann
