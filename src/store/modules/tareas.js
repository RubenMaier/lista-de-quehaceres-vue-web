const state = {
    listaTareas: [
        {
            id: 1,
            titulo: "Titulo 1",
            descripcion:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore voluptas ipsa dolores quaerat cupiditate earum fugiat amet saepe possimus dolorum quod ex, explicabo aliquam sequi autem quis et omnis facilis!"
        },
        {
            id: 2,
            titulo: "Titulo 2",
            descripcion:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore voluptas ipsa dolores quaerat cupiditate earum fugiat amet saepe possimus dolorum quod ex, explicabo aliquam sequi autem quis et omnis facilis!"
        }
    ],
    titulo: "",
    descripcion: "",
    formCrear: true,
    _indexEditarTarea: "",
    snackbar: false,
    mensajeSnackbar: "",
    colorSnackbar: "error"
}

const getters = {
    listaTareas: (state) => state.listaTareas,
    formCrear: (state) => state.formCrear,
    color: (state) => state.colorSnackbar,
    mensaje: (state) => state.mensajeSnackbar,
    _titulo: (state) => state.titulo,
    _descripcion: (state) => state.descripcion,
    _snackbar: (state) => state.snackbar
}

const mutations = {
    agregarTarea: (state, tarea) => {
        state.titulo = tarea.titulo;
        state.descripcion = tarea.descripcion;
        if (state.titulo === "" || state.descripcion === "") {
            state.snackbar = true;
            state.mensajeSnackbar = "Debe llenar todos los campos!";
            state.colorSnackbar = "red";
        } else {
            // agregamos una nueva tarea
            state.snackbar = false;
            state.listaTareas.push({
                id: Date.now(), // nos tira la fecha con la milesima de segundo en vivo, asi que sera distinto siempre
                titulo: state.titulo,
                descripcion: state.descripcion
            });
            state.titulo = "";
            state.descripcion = "";
        }
    },
    activarEdicionDeTarea(state, index) {
        state.formCrear = false;
        state.titulo = state.listaTareas[index].titulo;
        state.descripcion = state.listaTareas[index].descripcion;
        state._indexEditarTarea = index;
    },
    eliminarTarea(state, id) {
        state.listaTareas = state.listaTareas.filter(tarea => tarea.id != id);
    },
    editarTarea(state, tarea) {
        state.titulo = tarea.titulo;
        state.descripcion = tarea.descripcion;
        state.listaTareas[state._indexEditarTarea].titulo = state.titulo;
        state.listaTareas[state._indexEditarTarea].descripcion = state.descripcion;
        state.formCrear = true;
        state.snackbar = true;
        state.mensajeSnackbar = "La tarea fue editada correctamente";
        state.colorSnackbar = "green";
        state.titulo = "";
        state.descripcion = "";
    },
    actualizarSnackbar(state, valor) {
        state.snackbar = valor;
    }
}

const actions = {
}

export default {
    state,
    getters,
    mutations,
    actions
}