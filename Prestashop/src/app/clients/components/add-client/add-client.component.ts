import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  constructor(
    private cs: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  ajouterClient(client: Client) {
    this.cs.add(client);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
