import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class HighchartService {

    constructor(private http: HttpClient,private doms : DomSanitizer) { }

    getChartData(chartType): Promise<any[]> {
        return this.http.get<any[]>(`http://localhost:4200/assets/${chartType}.json`).toPromise();
    }
}