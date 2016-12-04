import { Component } from '@angular/core';

@Component({
    selector: "bi-informed",
    template: `
                <!-- Top Bar with logout and Logo sections -->
                <nav class="navbar navbar-inverse new-navbar navbar-fixed">
                  <div class="container-fluid">
                    <div class="navbar-header">
                      <button type="button" class="hidden navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"> </span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>                        
                      </button>
                      <a class="navbar-brand" href="#">Logo</a>
                    </div>
                    <div class=" collapse navbar-collapse" id="myNavbar">              
                      <ul class="hidden nav navbar-nav navbar-right">
                        <li>
                        <span> Migwi</span>
                        <a href="#"><span class="glyphicon glyphicon-log-in"></span>
                        Logout
                        </a></li>
                      </ul>
                    </div>
                  </div>
                </nav>

                <nav>
                    <a routerLink="/" routerLinkActive="active">Login</a>
                    <a routerLink="/#" routerLinkActive="active">app</a>
                </nav>

               <router-outlet></router-outlet>

                <footer class="container-fluid text-center navbar-inverse new-navbar">
                  <p>Footer Text</p>
                </footer>
              `
})
export class MainComponent{

}