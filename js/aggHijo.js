
function agg(){
         const inputs = `<div class="hijo card-body">
         <div class="row mt-3">
             <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 formulario_grupo" id="grupo_nombre2">
                 <label for="nombre2" class="formulario_label">Nombres</label>
                 <div class="formulario_grupo-input">
                     <input type="text" class="form-control formulario_input" pattern="[a-zA-ZÀ-ÿ\s]{1,40}" name="nombre2" id="nombre2" required>
                     <i class="formulario_validacion-estado fas fa-times-circle"></i>
                 </div>
                 <p class="formulario_input-error">El Nombre tiene que ser de 4-30 dígitos y solo puede contener letras y acentos</p>
             </div>
             <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 formulario_grupo" id="grupo_apellido2">
                 <label for="apellido2" class="formulario_label">Apellidos</label>
                 <div class="formulario_grupo-input">
                     <input type="text" class="form-control formulario_input" pattern="[a-zA-ZÀ-ÿ\s]{1,40}" name="apellido2" id="apellido2" required>
                     <i class="formulario_validacion-estado fas fa-times-circle"></i>
                 </div>
                 <p class="formulario_input-error">El apellido tiene que ser de 3-30 dígitos y solo puede contener letras y acentos.</p>
             </div>  
         </div>
         <div class="row mt-3">
             <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 ">
                 <label>Cedula</label>
                 <div class="row ">
                     <div class="col-4">
                         <select class="form-control " required>
                             <option>-</option>
                             <option>V</option>
                             <option>E</option>
                             <option>J</option>
                             <option>G</option>
                         </select>
                     </div>
                     <div class="col-8 formulario_grupo-input" >
                         <input type="text" class="form-control formulario_input" pattern="[0-9]{1,10}" name="cedula2" id="cedula2"  >
                         <i class="formulario_validacion-estado fas fa-times-circle"></i>
                     </div>
                     <p class="formulario_input-error">La Cedula solo puede contener números.</p>
                 </div>
             </div>
             <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 formulario_grupo" id="grupo_fecha2">
                 <label for="fecha2" class="formulario_label">Fecha de nacimiento</label>
                 <div class="formulario_grupo-input">
                     <input type="date" class="form-control formulario_input" name="fecha2" id="fecha2" required >
                 </div>
             </div>
         </div>
         <div class="row mt-2">
             <div class="col">
                 <label>¿Estudian?</label>
                 <div class="form-check form-check-inline">
                     <input class="form-check-input" type="radio" name="radioOptions" id="inlineRadio1" value="option1">
                     <label class="form-check-label" for="inlineRadio1">SI</label>
                 </div>
                 <div class="form-check form-check-inline">
                     <input class="form-check-input" type="radio" name="radioOptions" id="inlineRadio2" value="option2">
                     <label class="form-check-label" for="inlineRadio2">NO</label>
                 </div> 
             </div>
         </div>
         <div class="row justify-content-end mt-1>
            <div class="col-1">
                <button class="btn btn-danger eliminar-fila" onclick="eliminar();">Eliminar</button>
            </div>
         </div>
        </div>`;
                     
         $("#copia").append(inputs);
     }
     function eliminar(){
         $(".hijo").last().remove();
         
         
     }
     