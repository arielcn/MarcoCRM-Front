const Agenda = () => {

    return (


        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossorigin="anonymous"
                />
                <title>Agenda</title>
            </head>

            <body>
                <div class="container">
                    <h1>Agenda</h1>
                    <div class="__form_add">
                        <div class="row">
                            <div class="col-3">
                                <input
                                    type="text"
                                    class="form-control name__field"
                                    placeholder="Nombre y Apellido"
                                />
                            </div>
                            <div class="col-3">
                                <input
                                    type="text"
                                    class="form-control street__field"
                                    placeholder="Dirección"
                                />
                            </div>
                            <div class="col-3">
                                <input
                                    type="text"
                                    class="form-control phone__field"
                                    placeholder="Teléfono"
                                />
                            </div>
                            <div class="col-3">
                                <button class="btn btn-success" onclick="addPerson()">
                                    Agregar
                                </button>
                                <button class="btn btn-primary" onclick="addRandomPerson()">
                                    Aleatoria
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="__table mt-3">
                        <table class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre y Apellido</th>
                                    <th scope="col">Dirección</th>
                                    <th scope="col">Teléfono</th>
                                </tr>
                            </thead>
                            <tbody class="table__main">
                            </tbody>
                        </table>
                    </div>
                </div>

                
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                    crossorigin="anonymous"
                ></script>
                <script src="./Agenda.js" defer></script>
            </body>
        </html>



    )

}
export default Agenda;