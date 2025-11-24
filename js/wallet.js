// Si no existe saldo, crearlo
if (!localStorage.getItem("balance")) {
    localStorage.setItem("balance", 0);
}

// Si no existen contactos, inicializar
if (!localStorage.getItem("contacts")) {
    localStorage.setItem("contacts", "[]");
}

// Si no existen transacciones, inicializar
if (!localStorage.getItem("transactions")) {
    localStorage.setItem("transactions", "[]");
}

function updateBalance() {
    $("#balance").text("$" + localStorage.getItem("balance"));
}

// Guardar movimiento
function saveTransaction(tipo, monto, destinatario) {
    let list = JSON.parse(localStorage.getItem("transactions"));

    list.push({ tipo, monto, destinatario });

    localStorage.setItem("transactions", JSON.stringify(list));
}

// Cargar contactos en selects
function loadContactsSelect() {
    let contacts = JSON.parse(localStorage.getItem("contacts"));

    $(".contactSelect").each(function () {
        $(this).html(`<option value="">Selecciona un contacto</option>`);
        contacts.forEach(c => {
            $(this).append(`<option value="${c}">${c}</option>`);
        });
    });
}

$(document).ready(function () {
    updateBalance();
    loadContactsSelect();

    // ---- AGREGAR CONTACTO ----
    $("#addContactBtn").click(function () {
        let name = $("#contactName").val().trim();
        if (name === "") return;

        let contacts = JSON.parse(localStorage.getItem("contacts"));
        contacts.push(name);
        localStorage.setItem("contacts", JSON.stringify(contacts));

        $("#contactMsg").show();
        $("#contactName").val("");

        // recargar lista
        loadContactsSelect();
        loadContactsList();
    });

    // listar contactos
    function loadContactsList() {
        if ($("#contactList").length) {
            let contacts = JSON.parse(localStorage.getItem("contacts"));
            $("#contactList").html("");

            contacts.forEach(c => {
                $("#contactList").append(`
                    <li class="list-group-item">${c}</li>
                `);
            });
        }
    }
    loadContactsList();

    // ---- DEPOSITAR ----
    $("#depositBtn").click(function () {
        let amount = Number($("#depositAmount").val());
        let to = $("#depositTo").val();
        if (amount <= 0 || to === "") return;

        let saldo = Number(localStorage.getItem("balance"));
        saldo += amount;
        localStorage.setItem("balance", saldo);

        saveTransaction("Depósito", amount, to);

        $("#depositMsg").show();
        updateBalance();
    });

    // ---- ENVIAR ----
    $("#sendBtn").click(function () {
        let amount = Number($("#sendAmount").val());
        let to = $("#sendTo").val();

        let saldo = Number(localStorage.getItem("balance"));

        if (amount > 0 && amount <= saldo && to !== "") {
            saldo -= amount;
            localStorage.setItem("balance", saldo);

            saveTransaction("Envío", -amount, to);

            $("#sendMsg").show();
            updateBalance();
        }
    });

    // ---- CARGAR MOVIMIENTOS ----
    if ($("#transactionList").length) {
        let list = JSON.parse(localStorage.getItem("transactions"));
        list.forEach(t => {
            $("#transactionList").append(`
                <li class="list-group-item d-flex justify-content-between">
                    <span>${t.tipo} a <strong>${t.destinatario}</strong></span>
                    <span class="${t.monto > 0 ? "text-success" : "text-danger"}">
                        ${t.monto > 0 ? "+" : ""}${t.monto}
                    </span>
                </li>
            `);
        });
    }
});
