import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ToolbarComponent } from '../assets/componentes-material/toolbar/toolbar.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', component: AppComponent             },
  // { path: 'toolbar', component: ToolbarComponent  },
  // { path: '', component: ToolbarComponent  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
