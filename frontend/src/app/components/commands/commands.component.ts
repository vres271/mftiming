import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { TestService } from '../../services/test.service';
import { LStorageService } from '../../services/lstorage.service';
import { CommandsService } from '../../services/commands.service';
import { MessagesService } from '../../services/messages.service';
import { faCog, faTrashAlt, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss']
})
export class CommandsComponent implements OnInit {
  faCog = faCog;
  faTrashAlt = faTrashAlt;
  faAngleDoubleLeft = faAngleDoubleLeft;
  faAngleDoubleRight = faAngleDoubleRight;
  public commandResult: object = null;
  public commandForm: FormGroup;
  public sendedCommandsList: any = [];

  public command: any = {units_id:0};

  constructor(
    public app: AppService,
    private fb: FormBuilder,
    public test: TestService,
    public storage: LStorageService,
    public commands: CommandsService,
    public messages: MessagesService,
    ) { }

  ngOnInit() {
    this.initForm();
    let storedCommand = this.storage.get('lastCommand');
    if(storedCommand) this.command = storedCommand;
    let sendedCommandsList = this.storage.get('sendedCommandsList');
    if(sendedCommandsList) this.sendedCommandsList = sendedCommandsList;
    if(this.command) this.commandForm.patchValue(this.command);
  }

  public initForm(){
    this.commandForm = this.fb.group({
      units_id: ['', [Validators.required,]],
      text: ['', [Validators.required,]],
      service: ['', [Validators.required,]],
    });
  }

  public sendCommand() {
    if(!this.commandForm.value.units_id) return false;
    if(!this.commandForm.value.service) return false;
    this.commandResult = null;
    this.storage.set('lastCommand', this.commandForm.value);
    if(this.sendedCommandsList.indexOf(this.commandForm.value.text)<0) {
      this.sendedCommandsList.push(this.commandForm.value.text);
      this.storage.set('sendedCommandsList', this.sendedCommandsList);
    }
    this.commands.send(this.commandForm.value)
      .subscribe(res=>{
        this.commandResult = res;
        setTimeout(()=>{this.getCommandsMessages()},10000);
      });
  }

  public getCommandsMessages() {
    this.messages.get({
        units_id: this.commandForm.value.units_id,  
        service: this.commandForm.value.service
        }
      )
      .subscribe((res:any)=>{
        
      });
  }

  public setCommandText(text) {
    this.commandForm.patchValue({text: text});
  }

  public delCommandFromSendedList(text) {
    let index = this.sendedCommandsList.indexOf(text);
    if(index>-1) this.sendedCommandsList.splice(index,1);
  }
}

