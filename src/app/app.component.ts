import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<ba-top-page></ba-top-page>
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3" id="sidebar">
                  <ba-sidebar></ba-sidebar>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-9" id="page">
                  <tables></tables>
                </div>
              </div>
              <ba-top-page></ba-top-page>
            `,
            styleUrls:['./themes/components/baSidebar/baSidebar.css',
                        './pages/tables/components/tables.css'],
})
export class AppComponent  {

}
