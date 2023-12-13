import { Component, Input } from '@angular/core';
import { IJob } from '../interface/job.interface';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent {
    @Input() job!: IJob;
}
