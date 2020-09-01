import React from 'react';

export const SalidaPage = () => {
  return (
    <div className="d-flex">
      <div className="col-3 bg-secondary">
        <div className="">
          <button className="btn btn-primary btn-block mb-2">Nueva Salida</button>
          <form className="form-inline">
            <input
              type="text"
              className="form-control col-8"
              placeholder="Numero Salida"
              name="numero"
            />
            <button className="btn btn-outline-primary col-4">Buscar</button>
          </form>
        </div>

        <ul className="list-group my-3">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Cras justo odio
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Dapibus ac facilisis in
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Morbi leo risus
          </li>
        </ul>
      </div>
      <form className="col-7 bg-white">
        <div className="form-row">
          <div class="form-group col-md-6">
            <label>Cedula</label>
            <div className="d-flex">
              <input type="text" class="form-control" placeholder="name@example.com" />
              <button className="btn btn-secondary">Buscar</button>
            </div>
          </div>
          <div class="form-group col-md-6">
            <label>Nombre</label>
            <input type="text" class="form-control" placeholder="name@example.com" />
          </div>
        </div>

        <div className="form-row">
          <div class="form-group col-md-6">
            <label>Veh. Placa</label>
            <input type="text" class="form-control" />
          </div>

          <div class="form-group col-md-6">
            <label>Marca</label>
            <input type="text" class="form-control" placeholder="" />
          </div>
        </div>

        <div className="form-row">
          <div class="form-group col-md-6">
            <label>Modelo</label>
            <input type="text" class="form-control" />
          </div>

          <div class="form-group col-md-6">
            <label>Color</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <div className="form-row">
          <div class="form-group col-md-6">
            <label>Conducto CI:</label>
            <input type="text" class="form-control" />
          </div>

          <div class="form-group col-md-6">
            <label>Conducto Nombre</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <div className="form-row">
          <div class="form-group col-md-8">
            <label>Material o Equipo</label>
            <textarea type="" class="form-control" rows="1"></textarea>
          </div>
          <div className="col-4 mt-sm-0 mt-md-4">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
              <label class="form-check-label" for="exampleRadios1">
                Retornara a Planta
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              />
              <label class="form-check-label" for="exampleRadios2">
                Desincorporacion
              </label>
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-12">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
              <label class="form-check-label" for="inlineCheckbox1">
                Motivo Salida 1
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="option2"
              />
              <label class="form-check-label" for="inlineCheckbox2">
                Motivo Salida 2
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="option3"
                disabled
              />
              <label class="form-check-label" for="inlineCheckbox3">
                Motivo Salida 3
              </label>
            </div>
          </div>
        </div>

        <div className="form-row">
          <div class="form-group col-md-12">
            <label>Direccion destino</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <div className="form-row">
          <div class="form-group col-md-6">
            <label>Estado</label>
            <div className="d-flex">
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
          </div>
          <div class="form-group col-md-6">
            <label>Ciudad</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>

        {/* <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select> */}
      </form>
      <div className="col-2 bg-secondary">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur tempora aut
        sunt porro illo cumque voluptatibus nihil maiores adipisci eveniet ad vero magni,
        repellendus atque rerum expedita consequuntur perferendis odio.
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          perspiciatis ipsa labore atque? Quam ratione adipisci nobis cupiditate facere
          quia velit totam laborum debitis harum libero, illo doloribus eaque aspernatur.
          Quisquam recusandae consequatur, voluptatibus debitis est vero expedita et ex
          eius ut! Ipsam alias consequatur impedit, itaque est ad porro tenetur. Ipsa sed
          voluptatem, enim eius voluptatibus facere at quisquam! Quas rerum reiciendis
          labore explicabo facere praesentium, ratione magni nostrum placeat? Cum
          accusantium fugit temporibus harum numquam voluptatem! Est iusto itaque eius cum
          officiis suscipit iste debitis praesentium ipsa mollitia!
        </p>
      </div>
    </div>
  );
};
