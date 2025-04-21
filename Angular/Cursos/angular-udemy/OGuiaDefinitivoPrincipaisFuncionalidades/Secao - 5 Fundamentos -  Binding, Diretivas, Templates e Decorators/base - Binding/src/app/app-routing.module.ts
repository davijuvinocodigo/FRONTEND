import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { DecoratorInputComponent } from './decorator-input/decorator-input.component';
import { DecoratorOutputComponent } from './decorator-output/decorator-output.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';


const routes: Routes = [
  { path: 'propertyBanding', component: PropertyBindingComponent },
  { path: 'eventBinding', component: EventBindingComponent },
  { path: 'attributeBinding', component: AttributeBindingComponent },
  { path: 'decoratorInput', component: DecoratorInputComponent },
  { path: 'decoratorOutput', component: DecoratorOutputComponent },
  { path: '', redirectTo: 'propertyBanding', pathMatch: 'full' },];

@NgModule({
  declarations: [
    PropertyBindingComponent, EventBindingComponent, DecoratorInputComponent, DecoratorOutputComponent, AttributeBindingComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
