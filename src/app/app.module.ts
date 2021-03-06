import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './mat/mat.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';


// lists
import { ListParquesComponent } from './components/list-parques/list-parques.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';
import { ListVisitantesComponent } from './components/list-visitantes/list-visitantes.component';
import { ListEspeciesComponent } from './components/list-especies/list-especies.component';


//services
import { ParquesService } from './services/parques.service';
import { EmpleadosService } from './services/empleados.service';
import { VisitantesService } from  './services/visitantes.service';
import { EspeciesService } from  './services/especies.service';
import { AreasService } from './services/areas.service';

//forms
import { FormParquesComponent } from './components/form-parques/form-parques.component';
import { FormVisitantesComponent } from './components/form-visitantes/form-visitantes.component';


//firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { SidenComponent } from './siden/siden.component';
import { ListAreasComponent } from './components/list-areas/list-areas.component';
import { FormAreasComponent } from './components/form-areas/form-areas.component';
import { ListAlojamientosComponent } from './components/list-alojamientos/list-alojamientos.component';
import { FormAlojamientosComponent } from './components/form-alojamientos/form-alojamientos.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ListAnimalesComponent } from './components/list-animales/list-animales.component';
import { ListMineralesComponent } from './components/list-minerales/list-minerales.component';
import { ListVegetalesComponent } from './components/list-vegetales/list-vegetales.component';
import { FormAnimalesComponent } from './components/form-animales/form-animales.component';
import { FormMineralesComponent } from './components/form-minerales/form-minerales.component';
import { FormVegetalesComponent } from './components/form-vegetales/form-vegetales.component';
import { FormEmpconservacionComponent } from './components/form-empconservacion/form-empconservacion.component';
import { FormEmpgestionComponent } from './components/form-empgestion/form-empgestion.component';
import { FormEmpinvestigacionComponent } from './components/form-empinvestigacion/form-empinvestigacion.component';
import { FormEmpvigilantesComponent } from './components/form-empvigilantes/form-empvigilantes.component';
import { ListEmpconservacionComponent } from './components/list-empconservacion/list-empconservacion.component';
import { ListEmpgestionComponent } from './components/list-empgestion/list-empgestion.component';
import { ListEmpinvestigacionComponent } from './components/list-empinvestigacion/list-empinvestigacion.component';
import { ListEmpvigilantesComponent } from './components/list-empvigilantes/list-empvigilantes.component';
import { ListVisitasComponent } from './components/list-visitas/list-visitas.component';
import { FormVisitaComponent } from './components/form-visita/form-visita.component';
import { FormVisitasComponent } from './components/form-visitas/form-visitas.component';



@NgModule({
  declarations: [
    AppComponent,
    ListParquesComponent,
    ListEmpleadosComponent,
    ListVisitantesComponent,
    ListEspeciesComponent,
    FormParquesComponent,
    FormVisitantesComponent,
    SidenComponent,
    ListAreasComponent,
    FormAreasComponent,
    ListAlojamientosComponent,
    FormAlojamientosComponent,
    ListAnimalesComponent,
    ListMineralesComponent,
    ListVegetalesComponent,
    FormAnimalesComponent,
    FormMineralesComponent,
    FormVegetalesComponent,
    FormEmpconservacionComponent,
    FormEmpgestionComponent,
    FormEmpinvestigacionComponent,
    FormEmpvigilantesComponent,
    ListEmpconservacionComponent,
    ListEmpgestionComponent,
    ListEmpinvestigacionComponent,
    ListEmpvigilantesComponent,
    ListVisitasComponent,
    FormVisitaComponent,
    FormVisitasComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.configFirebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    MatModule,
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTreeModule,
    ReactiveFormsModule
  ],
  providers: [
    ParquesService,
    EmpleadosService,
    VisitantesService,
    EspeciesService,
    AreasService
  ],

  bootstrap: [AppComponent],
  entryComponents:[
    FormParquesComponent,
    FormVisitantesComponent,
    FormAreasComponent,
    FormAnimalesComponent,
    FormMineralesComponent,
    FormVegetalesComponent
] //Controla donde se muestra el componente
})
export class AppModule {}
