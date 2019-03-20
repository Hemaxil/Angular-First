import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allowNewServer=false;
	serverCreationStatus="server not created";
  serverName='';
  constructor() {

  setTimeout(()=>{
  	this.allowNewServer=true;
  },2000);
   }

   onServerCreation(){
   	this.serverCreationStatus="Server created";
   }

   onUpdateServerName(event){
    // console.log(event.target.value);
    this.serverName=(<HTMLInputElement>event.target).value;
    
   }
  ngOnInit() {
  }

}
