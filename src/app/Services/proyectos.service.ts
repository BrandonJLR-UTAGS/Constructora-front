import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  url = 'http://127.0.0.1:3000/api'
  constructor(private http: HttpClient) { }

  obtenerProyectos(){
    return this.http.get(`${this.url}/proyecto`)
  }

  ObtenerProyectosActivos(){
    return this.http.get(`${this.url}/proyectoActivo`)
  }

  obtenerTareasProyecto(id){
    return this.http.get(`${this.url}/tareasProyecto/${id}`)
  }

  estadisticaPorProyecto(id){
    return this.http.get(`${this.url}/estadisticasProyecto/${id}`)
  }

  estadisticasGenerales(){
    return this.http.get(`${this.url}/estadisticas`)
  }

  crearProyecto(data){
// TODO hacer el codigo adecuado
    return this.http.post(`${this.url}/crearProyecto`, data)
  }

  actualizarProyecto(id){
// TODO hacer el codigo adecuado
    return this.http
  }

  borrarProyecto(id){
    // TODO hacer el codigo adecuado
    return this.http
  }
}
