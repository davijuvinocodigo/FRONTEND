import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';


const routes: Routes = [
  { path: 'propertyBanding', component: PropertyBindingComponent },
  { path: 'eventBinding', component: EventBindingComponent },
  { path: 'attributeBinding', component: AttributeBindingComponent },
  { path: '', redirectTo: 'propertyBanding', pathMatch: 'full' },];

@NgModule({
  declarations: [
    PropertyBindingComponent, EventBindingComponent, AttributeBindingComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
