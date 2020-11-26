import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { FormEmpvigilantesComponent } from '../form-empvigilantes/form-empvigilantes.component';


@Component({
  selector: 'app-list-empvigilantes',
  templateUrl: './list-empvigilantes.component.html',
  styleUrls: ['./list-empvigilantes.component.scss']
})
export class ListEmpvigilantesComponent implements OnInit {

  constructor(
    private empleadoService: EmpleadosService,
    private dialog: MatDialog) { }

  displayedColumns: string[] = ['ID_Empleado', 'Nombre_Empleado', 'SeguridadSocial', 'Direccion','Telefono','Celular','Sueldo','Area','Acciones','BtnAgregar'];
  dataSource = new MatTableDataSource();

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  ngOnInit(): void {
    this.empleadoService.getAllEmpVigilante().subscribe(res=> this.dataSource.data = res );

  }

    //Metodo editar
  onEdit(element){
    this.resetForm ();
    this.openModal();
    if(element){
      this.empleadoService.selected = element;

    }
  }

 //Metodo eliminar
  //Obtiene el codigo que viene desde la interfaz de usuario e invoca el servicio
  onDelete(id:string){
    this.empleadoService.deleteEmpleado(id);
  }



    //Metodo para abrir pop up
    openModal(): void{
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data={
        title: 'Modal'
      };
      dialogConfig.autoFocus = true; //El foco del raton está en el formulario
      this.dialog.open(FormEmpvigilantesComponent, dialogConfig); //Abre el popup con el formulario

    }
  resetForm(): void{
    this.empleadoService.selected.ID_Empleado= '';
    this.empleadoService.selected.Nombre_Empleado = '';
    this.empleadoService.selected.SeguridadSocial = '';
    this.empleadoService.selected.Direccion ='';
    this.empleadoService.selected.Telefono = '';
    this.empleadoService.selected.Celular = '';
    this.empleadoService.selected.Sueldo = '';
    this.empleadoService.selected.Tipo_Empleado = '';
    this.empleadoService.selected.id = null;
  }


  

}
